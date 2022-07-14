from typing import List, Tuple
from skimage import io
import numpy as np
import skimage


class ImgWrapper:
    def __init__(self, img: np.ndarray, ID: float, width: int, height: int):
        self.img = img
        self.ID = ID
        self.width = width
        self.height = height


def reshape_ref_short_side(img: np.ndarray, b: int = 648):
    imgsize = img.shape
    x = imgsize[0]
    y = imgsize[1]

    if x > y:
        img = np.rot90(img, -1)
        imgsize = img.shape
        x = imgsize[0]
        y = imgsize[1]

    times = x / b

    img = skimage.transform.resize(img, (b, int(y / times)), preserve_range=True)

    paddingSize = (int(int(y / times) / b) + 1) * b - int(y / times)

    if len(imgsize) != 3:
        img = np.pad(img, ((0, 0), (0, paddingSize)))
    else:
        r, g, b = img[:, :, 0], img[:, :, 1], img[:, :, 2]
        R = np.pad(r, ((0, 0), (0, paddingSize)))
        G = np.pad(g, ((0, 0), (0, paddingSize)))
        B = np.pad(b, ((0, 0), (0, paddingSize)))

        img = np.dstack((R, G, B))
    return img


def split_img(
    img: np.ndarray,
    b: int = 648,
    saveFile: bool = True,
    savePath: str = "",
    imgName: str = "split",
):
    """call this function after `reshape_ref_short_side`"""
    imgList = []
    imgShape = img.shape
    times = int(imgShape[1] / b)
    for i in range(0, times):
        img1 = img[:, i * b : (i + 1) * b]
        imgList.append(img1)
        if saveFile:
            io.imsave(savePath + "_%s_%s.jpg" % (imgName, str(i)), img1)

    return imgList


def split_img_overlap(img: np.ndarray) -> Tuple[List[ImgWrapper], List[ImgWrapper]]:
    imgList = []
    subImgList = []
    imgShape = img.shape
    times = int(imgShape[1] / imgShape[0])

    for i in range(0, int(times)):
        img1 = img[:, i * imgShape[0] : (i + 1) * imgShape[0]]
        imgList.append(ImgWrapper(img1, i + 1, imgShape[0], imgShape[0]))

        if i + 1.5 < times:
            imgCover = img[
                :, int((i + 0.5) * imgShape[0]) : int((i + 1.5) * imgShape[0])
            ]
            subImgList.append(ImgWrapper(imgCover, i + 1.5, imgShape[0], imgShape[0]))

    return imgList, subImgList
