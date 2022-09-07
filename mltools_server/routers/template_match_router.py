import sys
import traceback

sys.path.append("..")

from fastapi import APIRouter
from mltools_server.lib.tools.template_match import (
    template_match_script,
    get_code,
    TemplateMatchReq,
)
from mltools_server.lib.exceptions import ImageError
from mltools_server.lib import CommonResponse

templateMatchRouter = APIRouter()


@templateMatchRouter.post("/templateMatch", tags=["templateMatch"])
def template_match(req: TemplateMatchReq):
    try:
        r = template_match_script(req)

        return CommonResponse(200, "", r)
    except ImageError:
        return CommonResponse(500, "图片尺寸错误", None)
    except:
        traceback.print_exc()
        return CommonResponse(500, "未知错误", None)


@templateMatchRouter.get("/templateMatch/code", tags=["templateMatch"])
def template_match_code():
    return CommonResponse(
        200,
        "",
        {"codes": get_code()},
    )
