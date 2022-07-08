import os
import numpy as np
import skimage.util.noise as snoise
from mltools.src.augmentation import NullableNdArray, PathOrNdarray
from skimage import io
from mltools.src.log.logger import logger


def img_noise(oriImg: PathOrNdarray, noise_types: list = []) -> NullableNdArray:
    if len(noise_types) == 0:
        noise_types = ["gaussian", "poisson", "s&p", "speckle"]
    l = np.random.randint(2, size=len(noise_types)).tolist()
    p = list(zip(noise_types, l))

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

    for i in p:
        if i[1] != 0:
            img = snoise.random_noise(img, mode=i[0])

    img = np.array(img * 255).astype(np.uint8)

    return img
