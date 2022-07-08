import random

import numpy as np
import skimage
from mltools.src.decorators.deprecated import deprecatedFeature
from mltools.src.log.logger import logger
from skimage.transform import resize

from .resize import imgResize


def getMeanSize(imgs: list):
    height = []
    width = []
    for i in imgs:
        height.append(i.shape[0])
        width.append(i.shape[1])

    return int(np.mean(height)), int(np.mean(width))


@deprecatedFeature("`mosiac_img` is deprecated, use `mosiac_img_no_reshape` instead")
def mosiac_img(imgs: list, heightFactor=0.5, widthFactor=0.5):
    if not type(imgs) is list:
        logger.error("Input must be a list!")
        return

    if len(imgs) == 0:
        logger.error("None image found!")
        return

    if len(imgs) == 1:
        for _ in range(0, 3):
            imgs.append(imgs[0])

    if len(imgs) == 2:
        for _ in range(0, 2):
            imgs.append(imgs[0])

    if len(imgs) == 3:
        for _ in range(0, 1):
            imgs.append(imgs[0])

    mHeight, mWidth = getMeanSize(imgs)

    img_left_top = imgResize(
        np.array(skimage.transform.resize(imgs[0], (mHeight, mWidth)) * 255).astype(
            np.uint8
        ),
        heightFactor,
        widthFactor,
    )

    img_right_top = imgResize(
        np.array(skimage.transform.resize(imgs[1], (mHeight, mWidth)) * 255).astype(
            np.uint8
        ),
        heightFactor,
        1 - widthFactor,
    )

    img_left_bottom = imgResize(
        np.array(skimage.transform.resize(imgs[2], (mHeight, mWidth)) * 255).astype(
            np.uint8
        ),
        1 - heightFactor,
        widthFactor,
    )

    img_right_bottom = imgResize(
        np.array(skimage.transform.resize(imgs[3], (mHeight, mWidth)) * 255).astype(
            np.uint8
        ),
        1 - heightFactor,
        1 - widthFactor,
    )

    h1 = np.hstack((img_left_top, img_right_top))
    h2 = np.hstack((img_left_bottom, img_right_bottom))

    return np.vstack((h1, h2))


def mosiac_img_no_reshape(imgs: list, heightFactor=0.5, widthFactor=0.5):
    assert (
        type(imgs) is list and len(imgs) == 4
    ), "input must be a list[str_or_ndarray] with length=4"

    img1, img2, img3, img4 = imgs[0], imgs[1], imgs[2], imgs[3]

    imgShape1 = img1.shape
    img2 = resize(img2, (imgShape1[1], imgShape1[0]), preserve_range=True)
    img3 = resize(img3, (imgShape1[1], imgShape1[0]), preserve_range=True)
    img4 = resize(img4, (imgShape1[1], imgShape1[0]), preserve_range=True)

    if heightFactor < 0.5:
        heightFactor = 1 - heightFactor

    if widthFactor < 0.5:
        widthFactor = 1 - widthFactor

    maskImg = np.zeros(
        (int(imgShape1[0] / heightFactor), int(imgShape1[1] / widthFactor), 3)
    )

    front = random.randint(0, 3)

    maskShape = maskImg.shape
    res = []

    if front == 0:
        maskImg[maskShape[0] - imgShape1[0] :, maskShape[1] - imgShape1[1] :] = img4
        maskImg[0 : imgShape1[0], maskShape[1] - imgShape1[1] :] = img2
        maskImg[maskShape[0] - imgShape1[0] :, 0 : imgShape1[1]] = img3
        maskImg[0 : imgShape1[0], 0 : imgShape1[1]] = img1
        res = [1, 4, 2, 3]

    if front == 1:
        maskImg[maskShape[0] - imgShape1[0] :, maskShape[1] - imgShape1[1] :] = img4
        maskImg[maskShape[0] - imgShape1[0] :, 0 : imgShape1[1]] = img3
        maskImg[0 : imgShape1[0], 0 : imgShape1[1]] = img1
        maskImg[0 : imgShape1[0], maskShape[1] - imgShape1[1] :] = img2
        res = [2, 4, 3, 1]

    if front == 2:
        maskImg[maskShape[0] - imgShape1[0] :, maskShape[1] - imgShape1[1] :] = img4
        maskImg[0 : imgShape1[0], maskShape[1] - imgShape1[1] :] = img2
        maskImg[0 : imgShape1[0], 0 : imgShape1[1]] = img1
        maskImg[maskShape[0] - imgShape1[0] :, 0 : imgShape1[1]] = img3
        res = [3, 4, 2, 1]

    if front == 3:
        maskImg[0 : imgShape1[0], 0 : imgShape1[1]] = img1
        maskImg[0 : imgShape1[0], maskShape[1] - imgShape1[1] :] = img2
        maskImg[maskShape[0] - imgShape1[0] :, 0 : imgShape1[1]] = img3
        maskImg[maskShape[0] - imgShape1[0] :, maskShape[1] - imgShape1[1] :] = img4
        res = [4, 1, 2, 3]

    return maskImg.astype(np.uint8), res, heightFactor, widthFactor
