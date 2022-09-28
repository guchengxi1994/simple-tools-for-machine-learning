import os
import random

import numpy as np
from mltools.src.augmentation import NullableNdArray, PathOrNdarray
from mltools.src.log.logger import logger
from skimage import io, transform


def img_translation(oriImg: PathOrNdarray, th: int = 0, tv: int = 0) -> NullableNdArray:
    """图像平移"""
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

    imgShape = img.shape

    trans_h = random.randint(0, int(0.5 * imgShape[1])) if th == 0 else th
    trans_v = random.randint(0, int(0.5 * imgShape[0])) if tv == 0 else tv

    tf_trans = transform.SimilarityTransform(translation=[trans_h, trans_v])

    img = transform.warp(img, tf_trans.inverse, preserve_range=True)
    return np.array(img, dtype=np.uint8)
