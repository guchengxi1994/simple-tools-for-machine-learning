import random

import numpy as np
from skimage.transform import resize


def cutmix(img1: np.ndarray, img2: np.ndarray, factor: float = 0.5):
    imgShape1 = img1.shape
    img2 = resize(img2, (imgShape1[1], imgShape1[0]), preserve_range=True)

    startX = random.randint(0, int(0.5 * imgShape1[0]))
    startY = random.randint(0, int(0.5 * imgShape1[1]))

    rectHeight = random.randint(0, int(factor * imgShape1[0]))
    rectWidth = random.randint(0, int(factor * imgShape1[1]))

    img1[startX:startX + rectHeight, startY:startY + rectWidth] = 0
    img2[0:startX, :] = 0
    img2[startX + rectHeight:, :] = 0
    img2[:, 0:startY] = 0
    img2[:, startY + rectWidth:] = 0

    return np.array(img1 + img2, dtype=np.uint8)
