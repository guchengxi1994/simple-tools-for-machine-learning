import numpy as np
from skimage import io
from skimage.transform import resize


def mixup(img1: np.ndarray, img2: np.ndarray, factor: float = 0.5):

    imgShape1 = img1.shape
    img2 = resize(img2, (imgShape1[1], imgShape1[0]), preserve_range=True)

    return np.array(factor * img1 + (1 - factor) * img2, dtype=np.uint8)
