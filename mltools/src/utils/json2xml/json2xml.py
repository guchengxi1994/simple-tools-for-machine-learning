import json
import os

import numpy as np
from mltools.src.log.logger import logger
from mltools.src.utils.img2xml.multi_object_process import img2xml_multiobj


def j2x_conversion(jsonPath: str):
    """this function is used to convert jsons(labelme) to xmls(labelImg)"""
    with open(jsonPath, "r", encoding="utf-8") as f:
        jsonObj = json.load(f)
        if isinstance(jsonObj, str):
            jsonObj = json.loads(jsonObj)

    tmpPath = jsonPath.replace(".json", ".xml")
    aimPath = tmpPath
    folder = os.path.abspath(jsonPath)

    filename = jsonObj["imagePath"]
    path = tmpPath

    width = jsonObj["imageWidth"]
    height = jsonObj["imageHeight"]

    objs = []

    shapes = jsonObj["shapes"]
    # print(type(shapes))
    for shape in shapes:
        label = shape["label"]
        points = shape["points"]
        # print(type(points))
        tmp = np.array(points)

        # print(tmp)
        obj = dict()
        obj["name"] = label
        obj["difficult"] = 0
        bndbox = dict()
        bndbox["xmin"] = (
            np.min(tmp[:, 0]) if np.min(tmp[:, 0]) > 0 else 1
        )  # https://github.com/AlexeyAB/darknet  the bounding box cannot be 0
        bndbox["xmax"] = np.max(tmp[:, 0])
        bndbox["ymin"] = np.min(tmp[:, 1]) if np.min(tmp[:, 1]) > 0 else 1
        bndbox["ymax"] = np.max(tmp[:, 1])

        obj["bndbox"] = bndbox

        if bndbox["ymax"] - bndbox["ymin"] < 10 or bndbox["xmax"] - bndbox["xmin"] < 10:
            pass
        else:
            objs.append(obj)

    img2xml_multiobj(tmpPath, aimPath, folder, filename, path, width, height, objs)
    # print(objs)
    logger.info("Done! Check {}".format(tmpPath))
