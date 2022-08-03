import base64
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from lib.tools.sift import SiftReq, process_sift
from mltools_server.lib import CommonResponse
from mltools_server.lib.exceptions import ImageError
from mltools_server.lib.tools.aug import NoLabelGetReq, NoLabelReq, nolabel_aug_process
import glob

app = FastAPI(version="0.0.1")

app.add_middleware(
    CORSMiddleware,
    # 允许跨域的源列表，例如 ["http://www.example.org"] 等等，["*"] 表示允许任何源
    allow_origins=["*"],
    # 跨域请求是否支持 cookie，默认是 False，如果为 True，allow_origins 必须为具体的源，不可以是 ["*"]
    allow_credentials=False,
    # 允许跨域请求的 HTTP 方法列表，默认是 ["GET"]
    allow_methods=["*"],
    # 允许跨域请求的 HTTP 请求头列表，默认是 []，可以使用 ["*"] 表示允许所有的请求头
    # 当然 Accept、Accept-Language、Content-Language 以及 Content-Type 总之被允许的
    allow_headers=["*"],
    # 可以被浏览器访问的响应头, 默认是 []，一般很少指定
    # expose_headers=["*"]
    # 设定浏览器缓存 CORS 响应的最长时间，单位是秒。默认为 600，一般也很少指定
    # max_age=1000
)


@app.get("/")
async def root():
    return {"message": "Welcome, XiaoShuYuI"}


@app.post("/sift")
async def sift(req: SiftReq):
    try:
        r = process_sift(req=req)
        return CommonResponse(200, "", r)
    except ImageError:
        return CommonResponse(500, "图片维度错误", None)
    except Exception:
        return CommonResponse(500, "未知错误", None)


@app.post("/aug/nolabel")
async def aug_nolabel(req: NoLabelReq):
    r = nolabel_aug_process(req.imgData)
    return CommonResponse(200, "", {"savedPath": r})


@app.post("/aug/nolabel/crop")
async def get_aug_nolabel_crop(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "crop" in x, imgs))
    if len(f) > 0:
        with open(f[0],'rb') as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@app.post("/aug/nolabel/distort")
async def get_aug_nolabel_distort(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "distort" in x, imgs))
    if len(f) > 0:
        with open(f[0],'rb') as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@app.post("/aug/nolabel/noise")
async def get_aug_nolabel_noise(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "noise" in x, imgs))
    if len(f) > 0:
        with open(f[0],'rb') as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@app.post("/aug/nolabel/rotation")
async def get_aug_nolabel_rotation(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "rotation" in x, imgs))
    if len(f) > 0:
        with open(f[0],'rb') as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@app.post("/aug/nolabel/trans")
async def get_aug_nolabel_trans(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "trans" in x, imgs))
    if len(f) > 0:
        with open(f[0],'rb') as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})


@app.post("/aug/nolabel/zoom")
async def get_aug_nolabel_zoom(f: NoLabelGetReq):
    imgs = glob.glob(f.folderName + os.sep + "*.jpg")
    f = list(filter(lambda x: "zoom" in x, imgs))
    if len(f) > 0:
        with open(f[0],'rb') as img:
            b64encode = base64.b64encode(img.read())
            b64 = b64encode.decode()
        return CommonResponse(200, "", {"imgData": b64})
    else:
        return CommonResponse(200, "", {"imgData": None})
