import sys

sys.path.append("..")

from fastapi import APIRouter
from mltools_server.lib import CommonResponse
from mltools_server.lib.tools.edge_detection import canny_detection, sobel_detection
from mltools_server.lib.tools.aug import (
    NoLabelReq,
)

edgeDetectionRouter = APIRouter()


@edgeDetectionRouter.post("/edgeDetection/canny", tags=["edge_detection"])
async def canny_edge_detection(req: NoLabelReq):
    r = canny_detection(req.imgData)
    return CommonResponse(200, "", {"imgData": r})


@edgeDetectionRouter.post("/edgeDetection/sobel", tags=["edge_detection"])
async def sobel_edge_detection(req: NoLabelReq):
    r = sobel_detection(req.imgData)
    return CommonResponse(200, "", {"imgData": r})
