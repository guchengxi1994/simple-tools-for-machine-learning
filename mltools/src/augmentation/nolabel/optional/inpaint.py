import numpy as np
from skimage.restoration import inpaint
from mltools.src.utils.generate_polygon import generate_polygon, generate_rectangle


def rectangle_inpaint(img: np.ndarray, startPoint: tuple = None):
    imgShape = img.shape
    mask = np.array(generate_rectangle(imgShape, startPoint) / 255, dtype=bool)

    result = inpaint.inpaint_biharmonic(
        img,
        mask,
    )
    # print(np.max(result))
    return np.array(result * 255, dtype=np.uint8)


def polygon_inpaint(img: np.ndarray, startPoint: tuple = None):
    imgShape = img.shape
    mask = generate_polygon(imgShape, startPoint)

    result = inpaint.inpaint_biharmonic(
        img,
        mask,
    )
    # print(np.max(result))
    return np.array(result * 255, dtype=np.uint8)
