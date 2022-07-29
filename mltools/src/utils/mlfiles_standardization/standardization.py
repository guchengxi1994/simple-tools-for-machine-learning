import base64
import json
import os
from mltools.src.augmentation.nolabel.optional.resize import img_resize
from mltools.src.utils.img2xml.multi_object_process import img2xml_multiobj

from mltools.src.utils.mlfiles_standardization import Annotation
import numpy as np
from skimage import io


def standardization(mlPath: str, saveFolder: str = "./"):
    j = json.load(open(mlPath))
    imageData = j["imageData"]
    imageName: str = j["imageName"]
    scale = j["scale"]
    annotations: list = j["annotations"]
    fi = open(imageName, "wb")
    b64 = base64.b64decode(imageData)
    fi.write(b64)
    fi.close()
    imgExt = os.path.splitext(imageName)[-1]

    image: np.ndarray = io.imread(imageName)

    path = saveFolder + imageName

    if scale != 1:
        image = img_resize(image, 1 / scale, 1 / scale)
        io.imsave(imageName, image)
    imageShape = image.shape
    width = imageShape[1]
    height = imageShape[0]

    labelImgAnnotationList = []
    labelmeAnnotationList = []
    for i in annotations:
        a = Annotation()
        a.from_json(i)
        if a.annotationType == "rect":
            labelImgAnnotationList.append(a.standardize(height, width))
        else:
            labelmeAnnotationList.append(a.standardize(height, width))

    if len(labelImgAnnotationList) > 0:
        tmpPath = path.replace(imgExt, ".xml")
        aimPath = tmpPath
        # print(tmpPath)
        img2xml_multiobj(
            tmpPath,
            aimPath,
            saveFolder,
            imageName,
            path,
            width,
            height,
            labelImgAnnotationList,
        )

    if len(labelmeAnnotationList) > 0:
        obj = {}
        obj["flags"] = {}
        obj["imageData"] = imageData
        obj["imageHeight"] = height
        obj["imageWidth"] = width
        obj["shapes"] = labelmeAnnotationList
        obj["imagePath"] = path
        tmpPath = path.replace(imgExt, ".json")
        json.dump(
            obj,
            open(tmpPath, "w", encoding="utf-8"),
            indent=3,
            ensure_ascii=False,
            sort_keys=True,
        )
