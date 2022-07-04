import numpy as np
from skimage.restoration import inpaint
from mltools.src.utils.generate_polygon import (generatePolygon,
                                                generateRectangle)


def rectangleInpaint(img: np.ndarray, startPoint: tuple = None):
    imgShape = img.shape
    mask = np.array(generateRectangle(imgShape, startPoint) / 255, dtype=bool)

    result = inpaint.inpaint_biharmonic(
        img,
        mask,
    )
    return np.array(result, dtype=np.uint8)


def polygonInpaint(img: np.ndarray, startPoint: tuple = None):
    imgShape = img.shape
    mask = generatePolygon(imgShape, startPoint)

    result = inpaint.inpaint_biharmonic(
        img,
        mask,
    )
    return np.array(result, dtype=np.uint8)
