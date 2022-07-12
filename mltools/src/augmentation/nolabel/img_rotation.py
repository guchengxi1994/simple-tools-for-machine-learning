import math
import os
import cv2

import numpy as np
from mltools.src.augmentation import NullableNdArray, PathOrNdarray
from mltools.src.log.logger import logger
from skimage import io
from skimage import transform


def img_rotation(
    oriImg: PathOrNdarray, angle: float = 30, resize: bool = False
) -> NullableNdArray:
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
            "parameter oriImg type error,expected a string or ndarray,got {}".format(
                type(oriImg)
            )
        )

    if resize:
        rotatedImage = transform.rotate(
            img, angle=angle, resize=True, preserve_range=True
        )
    else:
        rotatedImage = transform.rotate(img, angle=angle, preserve_range=True)

    return np.array(rotatedImage, dtype=np.uint8)
