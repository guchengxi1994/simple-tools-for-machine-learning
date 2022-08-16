import sys

sys.path.append("..")

from fastapi import APIRouter
from mltools_server.lib import CommonResponse
from mltools_server.lib.tools.dlib import get_face_details, get_faces, get_dlib_codes
from mltools_server.lib.tools.aug import NoLabelReq

dlibRouter = APIRouter()


@dlibRouter.post("/dlib/faceDetect", tags=["dlib"])
async def dlib_face_detect(req: NoLabelReq):
    r = get_faces(req.imgData)
    return CommonResponse(200, "", {"imgData": r})


@dlibRouter.post("/dlib/faceDetails", tags=["dlib"])
async def dlib_face_detect_details(req: NoLabelReq):
    r = get_face_details(req.imgData)
    return CommonResponse(200, "", {"imgData": r})


@dlibRouter.get("/dlib/code", tags=["dlib"])
async def get_dlib_code():
    return CommonResponse(
        200,
        "",
        {"codes": get_dlib_codes()},
    )
