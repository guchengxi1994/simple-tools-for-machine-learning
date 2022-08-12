from skimage import feature
import numpy as np
import cv2


def canny(imgData: np.ndarray):
    return feature.canny(imgData, sigma=3)


def sobel(imgData: np.ndarray):
    gray_img = cv2.cvtColor(imgData, cv2.COLOR_RGB2GRAY)
    x = cv2.Sobel(gray_img, cv2.CV_16S, 1, 0)
    y = cv2.Sobel(gray_img, cv2.CV_16S, 0, 1)
    Scale_absX = cv2.convertScaleAbs(x)
    Scale_absY = cv2.convertScaleAbs(y)
    result = cv2.addWeighted(Scale_absX, 0.5, Scale_absY, 0.5, 0)
    return result
