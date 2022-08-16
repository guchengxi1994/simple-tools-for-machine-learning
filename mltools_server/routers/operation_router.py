import sys

sys.path.append("..")

from fastapi import APIRouter
from mltools_server.lib import CommonResponse
from mltools_server.lib.tools.noise import (
    NoiseReq,
    get_denoised_image,
    get_noised_image,
)

operationRouter = APIRouter()


@operationRouter.post("/operation/noise", tags=["operation"])
async def noise(req: NoiseReq):
    r = get_noised_image(req.img, req.ntype)
    return CommonResponse(200, "", {"imgData": r})


@operationRouter.post("/operation/denoise", tags=["operation"])
async def noise(req: NoiseReq):
    r = get_denoised_image(req.img, req.ntype)
    return CommonResponse(200, "", {"imgData": r})
