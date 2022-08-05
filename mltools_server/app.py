import base64
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from lib.tools.sift import SiftReq, process_sift
from mltools_server.lib import CommonResponse
from mltools_server.lib.exceptions import ImageError
from mltools_server.lib.tools.aug import NoLabelGetReq, NoLabelReq, nolabel_aug_process
import glob
from starlette.responses import FileResponse

from mltools_server.lib.tools.zip_folder import zip_dir

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


@app.get("/sift/code")
async def get_sift_code():
    return CommonResponse(
        200,
        "",
        {
            "codes": """
import matplotlib.pyplot as plt

from skimage import data
from skimage import transform
from skimage.color import rgb2gray
from skimage.feature import match_descriptors, plot_matches, SIFT

img1 = rgb2gray(data.astronaut())
img2 = transform.rotate(img1, 180)
tform = transform.AffineTransform(scale=(1.3, 1.1), rotation=0.5,
                                  translation=(0, -200))
img3 = transform.warp(img1, tform)

descriptor_extractor = SIFT()

descriptor_extractor.detect_and_extract(img1)
keypoints1 = descriptor_extractor.keypoints
descriptors1 = descriptor_extractor.descriptors

descriptor_extractor.detect_and_extract(img2)
keypoints2 = descriptor_extractor.keypoints
descriptors2 = descriptor_extractor.descriptors

descriptor_extractor.detect_and_extract(img3)
keypoints3 = descriptor_extractor.keypoints
descriptors3 = descriptor_extractor.descriptors

matches12 = match_descriptors(descriptors1, descriptors2, max_ratio=0.6,
                              cross_check=True)
matches13 = match_descriptors(descriptors1, descriptors3, max_ratio=0.6,
                              cross_check=True)
fig, ax = plt.subplots(nrows=2, ncols=2, figsize=(11, 8))

plt.gray()

plot_matches(ax[0, 0], img1, img2, keypoints1, keypoints2, matches12)
ax[0, 0].axis('off')
ax[0, 0].set_title("Original Image vs. Flipped Image\n"
                   "(all keypoints and matches)")

plot_matches(ax[1, 0], img1, img3, keypoints1, keypoints3, matches13)
ax[1, 0].axis('off')
ax[1, 0].set_title("Original Image vs. Transformed Image\n"
                   "(all keypoints and matches)")

plot_matches(ax[0, 1], img1, img2, keypoints1, keypoints2, matches12[::15],
             only_matches=True)
ax[0, 1].axis('off')
ax[0, 1].set_title("Original Image vs. Flipped Image\n"
                   "(subset of matches for visibility)")

plot_matches(ax[1, 1], img1, img3, keypoints1, keypoints3, matches13[::15],
             only_matches=True)
ax[1, 1].axis('off')
ax[1, 1].set_title("Original Image vs. Transformed Image\n"
                   "(subset of matches for visibility)")

plt.tight_layout()
plt.show()
      """
        },
    )


@app.post("/aug/nolabel")
async def aug_nolabel(req: NoLabelReq):
    r = nolabel_aug_process(req.imgData)
    return CommonResponse(200, "", {"savedPath": r})

@app.get("/zipdownload/{folderName}")
async def download_movie(folderName:str):
    if not folderName.startswith("cache"):
        folderName = "cache/" + folderName
    p = zip_dir(folderName)
    print(p)
    return FileResponse(p)


@app.get("/aug/nolabel/code")
async def get_aug_nolabel_codes():
    return CommonResponse(
        200,
        "",
        {
            "codes": """
# import module
from mltools.src.augmentation.aug_no_label import NoLabelAugmentation

# initial NoLabelAugmentation class
n = NoLabelAugmentation(["0.png"], False, augNumber=3)

# random augmentation
n.go()

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

# cutmix, needs 2 or more images
# use append to add another image
n.append("3.png")
n.onlyCutmix()

# distort
n.onlyDistort()

# inpaint
n.onlyInpaint(reshape=True)

# mosaic
n.onlyMosaic()

# resize
n.onlyResize()
    """
        },
    )


@app.post("/aug/nolabel/crop")
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


@app.post("/aug/nolabel/distort")
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


@app.post("/aug/nolabel/noise")
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


@app.post("/aug/nolabel/rotation")
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


@app.post("/aug/nolabel/trans")
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


@app.post("/aug/nolabel/zoom")
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
