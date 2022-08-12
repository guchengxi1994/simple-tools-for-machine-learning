import sys

sys.path.append("..")

import os
from mltools_extra.edge_detection import canny, sobel
from mltools.src.utils.json2mask.third_party import img_b64_to_arr
from skimage import io
from skimage.color import rgb2gray
import base64

base_cache_dir = "cache/"
if not os.path.exists(base_cache_dir):
    os.mkdir(base_cache_dir)


def canny_detection(imgData: str):
    img = img_b64_to_arr(imgData)
    imgGrey = rgb2gray(img)
    f = canny(imgGrey)
    io.imsave(base_cache_dir + "cache.jpg", f)
    fi = open(base_cache_dir + "cache.jpg", "rb")
    b64 = base64.b64encode(fi.read()).decode()
    return b64


def sobel_detection(imgData: str):
    f = sobel(img_b64_to_arr(imgData))
    io.imsave(base_cache_dir + "cache.jpg", f)
    fi = open(base_cache_dir + "cache.jpg", "rb")
    b64 = base64.b64encode(fi.read()).decode()
    return b64
