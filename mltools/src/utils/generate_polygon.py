""" This script is used to generate white(255,255,255)
    polygons/rectangles in images
    ------
    这个脚本是用来在图形中绘制纯白色多边形的（用于增广中的crop）
"""

import random

import numpy as np
from skimage.draw import polygon
from skimage.morphology import convex_hull_image


def generatePolygon(
    imgShape: tuple,
    startPoint: tuple = None,
    convexHull: bool = False,
    polygonPointCount: int = None,
):
    """imgShape 图片尺寸
    startPoint polygon初始点，可为None
    polygonPointCount polygon顶点个数，可为None
    """
    points = random.randint(4, 10) if polygonPointCount is None else polygonPointCount
    mask = np.zeros((imgShape))

    if startPoint is None:
        startX = random.randint(0, int(0.5 * imgShape[0]))
        startY = random.randint(0, int(0.5 * imgShape[1]))
    else:
        startX = (
            startPoint[0]
            if startPoint[0] < 0.5 * imgShape[0]
            else int(0.5 * imgShape[0])
        )
        startY = (
            startPoint[1]
            if startPoint[1] < 0.5 * imgShape[1]
            else int(0.5 * imgShape[1])
        )

    x_cor = np.random.randint(startX, imgShape[0], points).tolist()
    y_cor = np.random.randint(startY, imgShape[1], points).tolist()
    # cor_xy = np.array(np.vstack((x_cor, y_cor)).T.tolist())
    rr, cc = polygon(x_cor, y_cor)
    mask[rr, cc] = 255
    mask = np.array(mask, dtype=np.uint8)
    if convexHull:
        mask = convex_hull_image(mask, tolerance=0.2)
        mask = np.array(mask * 255, dtype=np.uint8)
    # if len(imgShape) == 3:
    #     return np.dstack((mask, mask, mask))
    # else:
    #     return mask
    return mask


def generateRectangle(imgShape: tuple, startPoint: tuple = None):
    mask = np.zeros((imgShape))

    if startPoint is None:
        startX = random.randint(0, int(0.5 * imgShape[0]))
        startY = random.randint(0, int(0.5 * imgShape[1]))
    else:
        startX = (
            startPoint[0]
            if startPoint[0] < 0.5 * imgShape[0]
            else int(0.5 * imgShape[0])
        )
        startY = (
            startPoint[1]
            if startPoint[1] < 0.5 * imgShape[1]
            else int(0.5 * imgShape[1])
        )

    rectHeight = random.randint(0, int(0.5 * imgShape[0]))
    rectWidth = random.randint(0, int(0.5 * imgShape[1]))

    mask[startX : startX + rectHeight, startY : startY + rectWidth] = 255

    return mask.astype(np.uint8)
