import sys

sys.path.append("..")
import os
import base64
from skimage import io
from pydantic import BaseModel

from mltools_extra.noise import noise, denoise
from mltools.src.utils.json2mask.third_party import img_b64_to_arr

base_cache_dir = "cache/"
if not os.path.exists(base_cache_dir):
    os.mkdir(base_cache_dir)


class NoiseReq(BaseModel):
    img: str
    ntype: int


def get_noised_image(imgData: str, noiseType: int):
    f = noise(img_b64_to_arr(imgData), noiseType)
    io.imsave(base_cache_dir + "cache.jpg", f)
    fi = open(base_cache_dir + "cache.jpg", "rb")
    b64 = base64.b64encode(fi.read()).decode()
    return b64


def get_denoised_image(imgData: str, noiseType: int):
    f = denoise(img_b64_to_arr(imgData), noiseType)
    io.imsave(base_cache_dir + "cache.jpg", f)
    fi = open(base_cache_dir + "cache.jpg", "rb")
    b64 = base64.b64encode(fi.read()).decode()
    return b64
