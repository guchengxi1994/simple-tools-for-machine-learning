import os
import random
import numpy as np
from skimage import io
from scipy import ndimage

from mltools.src.augmentation import NullableNdArray, PathOrNdarray
from mltools.src.log.logger import logger


def imgZoom(oriImg: PathOrNdarray, size: float) -> NullableNdArray:
    """ size : The zoom factor along the axes, default 0.8~1.8
    """
    if isinstance(oriImg, str):
        if os.path.exists(oriImg):
            img = io.imread(oriImg)
        else:
            logger.error("Original image not found")
            return
    elif isinstance(oriImg, np.ndarray):
        img = oriImg
    else:
        logger.error(
            'parameter oriImg type error,expected a string or ndarray,got {}'.
            format(type(oriImg)))

    try:
        size = float(size)
    except:
        logger.warning('input {} type error ,got {}.'.format(
            'size', type(size)))
        size = random.uniform(0.8, 1.8)
        size = round(size, 2)

    return _getZoomedImg(img, size)


def _getZoomedImg(img: np.ndarray, size: float) -> np.ndarray:
    """ original function is https://github.com/guchengxi1994/mask2json/blob/d361f91af3b80fb4f6de9060cdd8bcd18c4d0891/convertmask/utils/auglib/imgAug.py#L48

        original function was using `opencv-python`(cv2), this is using `numpy`,`skimage` and `scipy`
    """
    imgDepth = 1
    if len(img.shape) == 3:
        zoomImg = ndimage.zoom(img, (size, size, 1), order=1)
        imgDepth = 3
    else:
        zoomImg = ndimage.zoom(img, size)

    oriImgShape = img.shape
    zoomImgShape = zoomImg.shape
    if size > 1:
        vDis = zoomImgShape[0] - oriImgShape[0]
        hDis = zoomImgShape[1] - oriImgShape[1]

        vDisHalf = int(vDis * 0.5)
        hDisHalf = int(hDis * 0.5)

        res = zoomImg[vDisHalf:zoomImgShape[0] + vDisHalf - vDis,
                      hDisHalf:zoomImgShape[1] + hDisHalf - hDis]
    elif size < 1:
        # return zoomImg
        vDis = abs(zoomImgShape[0] - oriImgShape[0])
        hDis = abs(zoomImgShape[1] - oriImgShape[1])
        vDisHalf = int(vDis * 0.5)
        hDisHalf = int(hDis * 0.5)
        if imgDepth == 1:
            res = np.pad(zoomImg, ((vDisHalf, vDis - vDisHalf),
                                   (hDisHalf, hDis - hDisHalf)))
        else:
            r, g, b = zoomImg[:, :, 0], zoomImg[:, :, 1], zoomImg[:, :, 2]
            zoomedR = np.pad(r, ((vDisHalf, vDis - vDisHalf),
                                 (hDisHalf, hDis - hDisHalf)))
            zoomedG = np.pad(g, ((vDisHalf, vDis - vDisHalf),
                                 (hDisHalf, hDis - hDisHalf)))
            zoomedB = np.pad(b, ((vDisHalf, vDis - vDisHalf),
                                 (hDisHalf, hDis - hDisHalf)))

            return np.dstack((zoomedR, zoomedG, zoomedB))
    else:
        res = img
    return res