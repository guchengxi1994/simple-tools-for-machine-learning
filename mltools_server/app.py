from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from lib.tools.sift import SiftReq, process_sift
from mltools_server.lib import CommonResponse
from mltools_server.lib.exceptions import ImageError

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
