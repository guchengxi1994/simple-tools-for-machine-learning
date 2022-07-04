import numpy as np
import skimage
from skimage.transform import resize


def imgResize(img: np.ndarray, heightFactor=1, widthFactor=1):
    imgShape = img.shape
    resizedImg = skimage.transform.resize(
        img, (int(heightFactor * imgShape[0]), int(widthFactor * imgShape[1])),preserve_range=True)
    
    return np.array(resizedImg).astype(np.uint8)