import base64
import json
import os
import xml.etree.ElementTree as ET
from mltools.src.log.logger import logger
import traceback

from mltools.src.utils.mlfiles_standardization import Annotation


def labelImg_to_ml_file(xmlPath: str, imgPath: str):
    imgName = os.path.split(imgPath)[-1]
    fileName = (os.sep).join(imgPath.split(".")[:-1]) + ".ml"

    with open(imgPath, "rb") as img:
        b64 = base64.b64encode(img.read())
        d = dict()
        d["imageName"] = imgName
        d["imageData"] = b64.decode()
        d["scale"] = 1.0
        tree = ET.parse(xmlPath)
        root = tree.getroot()
        entities = []
        savedClassNames = []
        try:
            for o in root.iter("object"):
                label = o.find("name").text
                bndbox = o.find("bndbox")
                xmin = bndbox.find("xmin").text
                xmax = bndbox.find("xmax").text
                ymin = bndbox.find("ymin").text
                ymax = bndbox.find("ymax").text
                if label not in savedClassNames:
                    savedClassNames.append(label)
                entities.append(
                    Annotation(
                        "rect",
                        label,
                        {
                            "xmin": int(xmin),
                            "xmax": int(xmax),
                            "ymin": int(ymin),
                            "ymax": int(ymax),
                        },
                        None,
                    ).to_json(),
                )
            d["annotations"] = entities
            d["savedClassNames"] = savedClassNames
            with open(fileName, "w", encoding="utf-8") as f:
                json.dump(d, f, indent=3, ensure_ascii=False, sort_keys=True)
        except:
            logger.error("=====    Exception     =====")
            traceback.print_exc()


def labelme_to_ml_file(jsonPath: str):
    jsonData = json.load(open(jsonPath, "r"))
    fileName = (os.sep).join(jsonPath.split(".")[:-1]) + ".ml"
    d = dict()
    d["imagePath"] = jsonData["imagePath"]
    d["imageData"] = jsonData["imageData"]
    savedClassNames = []
    entities = []
    for s in jsonData["shapes"]:
        if s["label"] not in savedClassNames:
            savedClassNames.append(s["label"])

        entities.append(
            Annotation(
                "polygon",
                s["label"],
                None,
                s["points"],              
            ).to_json(),
        )
    d["annotations"] = entities
    d["savedClassNames"] = savedClassNames
    with open(fileName, "w", encoding="utf-8") as f:
        json.dump(d, f, indent=3, ensure_ascii=False, sort_keys=True)
