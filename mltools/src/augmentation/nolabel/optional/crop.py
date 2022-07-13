"""
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-07-09 08:43:17
LastEditors: xiaoshuyui
LastEditTime: 2022-07-12 19:51:29
"""
import numpy as np
import skimage.util.noise as snoise
from mltools.src.utils.generate_polygon import generate_polygon, generate_rectangle


def rectangle_crop(img: np.ndarray, startPoint: tuple = None, noise=False):
    imgShape = img.shape
    mask = generate_rectangle(imgShape, startPoint)
    mask[mask != 255] = 1
    mask[mask == 255] = 0

    if noise:
        noisedMask = np.ones(imgShape) * 255
        noisedMask = snoise.random_noise(noisedMask, "s&p") * 255
        noisedMask = np.array(noisedMask * (1 - mask), dtype=np.uint8)
        return img * mask + noisedMask

    return img * mask


def polygon_crop(
    img: np.ndarray, startPoint: tuple = None, convexHull=False, noise=False
):
    imgShape = img.shape
    mask = generate_polygon(imgShape, startPoint, convexHull)
    mask[mask != 255] = 1
    mask[mask == 255] = 0

    if noise:
        noisedMask = np.ones(imgShape) * 255
        noisedMask = snoise.random_noise(noisedMask, "s&p") * 255
        noisedMask = np.array(noisedMask * (1 - mask), dtype=np.uint8)
        return img * mask + noisedMask

    return img * mask


def multi_rectangle_crop(img: np.ndarray, number: int = 1, noise=False):
    imgShape = img.shape
    mask = np.zeros(imgShape, dtype=np.uint8)
    for _ in range(number):
        mask += generate_rectangle(imgShape)
    mask[mask != 255] = 1
    mask[mask == 255] = 0

    if noise:
        noisedMask = np.ones(imgShape) * 255
        noisedMask = snoise.random_noise(noisedMask, "s&p") * 255
        noisedMask = np.array(noisedMask * (1 - mask), dtype=np.uint8)
        return img * mask + noisedMask

    return img * mask


def multi_polygon_crop(img: np.ndarray, number: int = 1, noise=False, convexHull=False):
    imgShape = img.shape
    mask = np.zeros(imgShape, dtype=np.uint8)
    for _ in range(number):
        mask += generate_polygon(imgShape, convexHull=convexHull)
    mask[mask != 255] = 1
    mask[mask == 255] = 0

    if noise:
        noisedMask = np.ones(imgShape) * 255
        noisedMask = snoise.random_noise(noisedMask, "s&p") * 255
        noisedMask = np.array(noisedMask * (1 - mask), dtype=np.uint8)
        return img * mask + noisedMask

    return img * mask
