import numpy as np
import skimage.util.noise as snoise
import cv2


def noise(imgData: np.ndarray, noiseType: int = 0) -> np.ndarray:
    if noiseType == 0:
        return snoise.random_noise(imgData, "s&p")
    else:
        return snoise.random_noise(imgData, "gaussian")


def denoise(imgData: np.ndarray, denoiseType: int = 0) -> np.ndarray:
    if denoiseType == 0:
        return cv2.medianBlur(imgData, 5)
    else:
        return cv2.blur(imgData, (5, 5))
