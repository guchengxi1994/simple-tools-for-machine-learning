import os

import numpy as np
from mltools.src.augmentation import NullableNdArray, PathOrNdarray
from mltools.src.log.logger import logger
from skimage import io
from skimage import transform


def imgRotation(oriImg: PathOrNdarray,
                angle: float = 30,
                resize: bool = False) -> NullableNdArray:
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

    if resize:
        image_rotated = transform.rotate(img, angle=angle, resize=True)
    else:
        image_rotated = transform.rotate(img, angle=angle)

    return image_rotated
