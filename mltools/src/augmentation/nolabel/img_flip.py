import os
from typing import List

import numpy as np
from mltools.src.augmentation import NullableNdArray, PathOrNdarray
from mltools.src.log.logger import logger
from skimage import io


def img_flip(
    oriImg: PathOrNdarray, flipList: list = [1, 0, -1]
) -> List[NullableNdArray]:
    if isinstance(oriImg, str):
        if os.path.exists(oriImg):
            img = io.imread(oriImg)
        else:
            logger.error("Original image not found")
            return []
    elif isinstance(oriImg, np.ndarray):
        img = oriImg
    else:
        logger.error(
            "parameter oriImg type error,expected a string or ndarray,got {}".format(
                type(oriImg)
            )
        )
        return []

    results = []
    if 1 in flipList:
        h_ori = np.fliplr(img)
        results.append(h_ori)

    if 0 in flipList:
        v_ori = np.flipud(img)
        results.append(v_ori)

    if -1 in flipList:
        h_v_ori = np.flipud(np.fliplr(img))
        results.append(h_v_ori)

    return results
