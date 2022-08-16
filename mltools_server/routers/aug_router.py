import sys

sys.path.append("..")

import base64
import glob
import os

from fastapi import APIRouter
from mltools_server.lib import CommonResponse
from mltools_server.lib.tools.aug import (
    NoLabelGetReq,
    NoLabelReq,
    aug_nolabel_codes,
    nolabel_aug_process,
)
from mltools_server.lib.tools.zip_folder import zip_dir
from starlette.responses import FileResponse

augRouter = APIRouter()


@augRouter.post("/aug/nolabel", tags=["aug_nolabel"])
async def aug_nolabel(req: NoLabelReq):
    r = nolabel_aug_process(req.imgData)
    return CommonResponse(200, "", {"savedPath": r})


@augRouter.get("/zipdownload/{folderName}", tags=["aug_nolabel"])
async def download_movie(folderName: str):
    if not folderName.startswith("cache"):
        folderName = "cache/" + folderName
    p = zip_dir(folderName)
    print(p)
    return FileResponse(p)


@augRouter.get("/aug/nolabel/code", tags=["aug_nolabel"])
async def get_aug_nolabel_codes():
    return CommonResponse(
        200,
        "",
        {"codes": aug_nolabel_codes()},
    )


@augRouter.post("/aug/nolabel/crop", tags=["aug_nolabel"])
async def get_aug_nolabel_crop(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "crop" in x, imgs))
    if len(f) > 0:
        with open(f[0], "rb") as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@augRouter.post("/aug/nolabel/distort", tags=["aug_nolabel"])
async def get_aug_nolabel_distort(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "distort" in x, imgs))
    if len(f) > 0:
        with open(f[0], "rb") as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@augRouter.post("/aug/nolabel/noise", tags=["aug_nolabel"])
async def get_aug_nolabel_noise(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "noise" in x, imgs))
    if len(f) > 0:
        with open(f[0], "rb") as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@augRouter.post("/aug/nolabel/rotation", tags=["aug_nolabel"])
async def get_aug_nolabel_rotation(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "rotation" in x, imgs))
    if len(f) > 0:
        with open(f[0], "rb") as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@augRouter.post("/aug/nolabel/trans", tags=["aug_nolabel"])
async def get_aug_nolabel_trans(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "trans" in x, imgs))
    if len(f) > 0:
        with open(f[0], "rb") as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@augRouter.post("/aug/nolabel/zoom", tags=["aug_nolabel"])
async def get_aug_nolabel_zoom(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "zoom" in x, imgs))
    if len(f) > 0:
        with open(f[0], "rb") as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})
