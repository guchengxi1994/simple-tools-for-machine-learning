import numpy as np
import skimage


def img_resize(img: np.ndarray, heightFactor=1, widthFactor=1):
    imgShape = img.shape
    resizedImg = skimage.transform.resize(
        img,
        (int(heightFactor * imgShape[0]), int(widthFactor * imgShape[1])),
        preserve_range=True,
    )

    return np.array(resizedImg).astype(np.uint8)


def img_resize_with_shape(img: np.ndarray, height: int, width: int):
    resizedImg = skimage.transform.resize(img, height, width, preserve_range=True)
    return np.array(resizedImg).astype(np.uint8)
