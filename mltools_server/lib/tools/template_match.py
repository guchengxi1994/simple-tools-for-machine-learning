import base64
import os
import sys


sys.path.append("..")

from mltools_extra.template_match import template_match
from mltools.src.utils.json2mask.third_party import img_b64_to_arr
from mltools_server.lib.exceptions import ImageError
from pydantic import BaseModel
from skimage import io

base_cache_dir = "cache/"
if not os.path.exists(base_cache_dir):
    os.mkdir(base_cache_dir)


class TemplateMatchReq(BaseModel):
    img: str
    template: str
    method: int


class TemplateMatchResp:
    def __init__(self, imgData, similarity) -> None:
        self.imgData: str = imgData
        self.similarity: float = similarity


def template_match_script(req: TemplateMatchReq):
    img = img_b64_to_arr(req.img)
    template = img_b64_to_arr(req.template)
    imgShape = img.shape
    templateShape = template.shape
    if imgShape[0] < templateShape[0] or imgShape[1] < templateShape[1]:
        raise ImageError()

    result = template_match(img, template, req.method)
    io.imsave(base_cache_dir + "cache.jpg", result.resultImg)
    fi = open(base_cache_dir + "cache.jpg", "rb")
    b64 = base64.b64encode(fi.read()).decode()

    return TemplateMatchResp(b64, result.similarity)
