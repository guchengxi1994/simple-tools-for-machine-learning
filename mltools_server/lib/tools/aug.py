import os
import sys
import datetime

from pydantic import BaseModel

sys.path.append("..")
from mltools.src.augmentation.aug_no_label import NoLabelAugmentation
from mltools.src.utils.json2mask.third_party import img_b64_to_arr
from skimage import io
from threading import Thread

base_cache_dir = "cache/"


class NoLabelReq(BaseModel):
    imgData: str


class NoLabelGetReq(BaseModel):
    folderName: str


def thread_processing(imgPath: str, savedPath: str):
    n = NoLabelAugmentation([imgPath], savedPath=savedPath)
    # only flip
    n.onlyFlip()
    # only noise
    n.onlyNoise()
    # only rotation
    n.onlyRotation()
    # translation
    n.onlyTranslation()
    # zoom
    n.onlyZoom()
    # crop
    n.onlyCrop()
    # distort
    n.onlyDistort()
    # resize
    n.onlyResize()


def nolabel_aug_process(imgData: str) -> str:
    if not os.path.exists(base_cache_dir):
        os.mkdir(base_cache_dir)
    t = datetime.datetime.now().timestamp()
    t = str(t).split(".")[0]
    savdPath = base_cache_dir + t
    if not os.path.exists(savdPath):
        os.mkdir(savdPath)
    image = img_b64_to_arr(imgData)
    io.imsave(savdPath + os.sep + "origin.jpg", image)

    t = Thread(
        target=thread_processing,
        args=(savdPath + os.sep + "origin.jpg", savdPath + os.sep),
    )

    t.start()

    return savdPath
