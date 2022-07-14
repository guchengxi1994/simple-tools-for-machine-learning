import base64
import io
import json
import os
import traceback
import xml.etree.ElementTree as ET

import numpy as np
import PIL
from mltools.src.log.logger import logger

try:
    from labelme import __version__ as labelmeVersion
except:
    labelmeVersion = "4.2.9"


def img_encode(img_or_path):
    if isinstance(img_or_path, np.ndarray):
        """
        copy from labelme image.py
        """
        img_pil = PIL.Image.fromarray(img_or_path)
        f = io.BytesIO()
        img_pil.save(f, format="PNG")
        img_bin = f.getvalue()
        if hasattr(base64, "encodebytes"):
            img_b64 = base64.encodebytes(img_bin)
        else:
            img_b64 = base64.encodestring(img_bin)
        # _, enc = cv2.imencode('.jpg', img_or_path)
        # base64_data = base64.urlsafe_b64encode(enc.tobytes())
        return img_b64

    else:
        if isinstance(img_or_path, str):
            i = open(img_or_path, "rb")
        elif isinstance(img_or_path, io.BufferedReader):
            i = img_or_path
        else:
            raise TypeError("Input type error!")

        base64_data = base64.b64encode(i.read())

        return base64_data.decode()


def x2j_convert(xmlpath, originImgPath, saveFile=True):
    """this function is used to convert xml files (labelimg) to jsons (labelme)"""
    if not os.path.exists(xmlpath) or not os.path.exists(originImgPath):
        logger.error("file not exist")
        return

    base64Code = img_encode(originImgPath)
    shapes = getPolygon(xmlpath)

    (fatherPath, filename_ext) = os.path.split(originImgPath)
    (filename, _) = os.path.splitext(filename_ext)

    ob = dict()
    ob["imageData"] = base64Code
    ob["flags"] = {}
    ob["version"] = labelmeVersion
    ob["imagePath"] = filename_ext

    img = io.imread(originImgPath)
    imgShape = img.shape
    del img
    ob["imageHeight"] = imgShape[0]
    ob["imageWidth"] = imgShape[1]
    ob["shapes"] = shapes

    if saveFile:
        with open(fatherPath + os.sep + filename + ".json", "w", encoding="utf-8") as f:
            j = json.dumps(ob, sort_keys=True, indent=4)
            f.write(j)

        logger.info("save to path {}".format(fatherPath + os.sep + filename + ".json"))
        return fatherPath + os.sep + filename + ".json"
    else:
        return json.dumps(ob, sort_keys=True, indent=4)


def x2j_convert_pascal(xmlpath, originImgPath, saveFile=True):
    # pass
    if not os.path.exists(xmlpath) or not os.path.exists(originImgPath):
        logger.error("file not exist")
        return

    base64Code = img_encode(originImgPath)
    shapes = getPolygonPascal(xmlpath)

    (fatherPath, filename_ext) = os.path.split(originImgPath)
    (filename, _) = os.path.splitext(filename_ext)

    ob = dict()
    ob["imageData"] = base64Code
    ob["flags"] = {}
    ob["version"] = labelmeVersion
    ob["imagePath"] = filename_ext

    img = io.imread(originImgPath)
    imgShape = img.shape
    del img
    ob["imageHeight"] = imgShape[0]
    ob["imageWidth"] = imgShape[1]
    ob["shapes"] = shapes

    if saveFile:
        with open(
            fatherPath + os.sep + filename + "_p.json", "w", encoding="utf-8"
        ) as f:
            j = json.dumps(ob, sort_keys=True, indent=4)
            f.write(j)

        logger.info(
            "save to path {}".format(fatherPath + os.sep + filename + "_p.json")
        )
        return fatherPath + os.sep + filename + "_p.json"
    else:
        return json.dumps(ob, sort_keys=True, indent=4)


def getImgShape(xmlPath):
    in_file = open(xmlPath)
    tree = ET.parse(in_file)
    root = tree.getroot()

    imgSize = root.find("size")
    imgwidth = imgSize.find("width").text
    imgheight = imgSize.find("height").text

    return imgwidth, imgheight


def getPolygon(xmlPath):
    in_file = open(xmlPath)
    tree = ET.parse(in_file)
    root = tree.getroot()
    shapes = []
    try:
        for obj in root.iter("object"):
            flags = {}
            group_id = "null"
            shape_type = "polygon"
            # pass

            dic = dict()
            label = obj.find("name").text
            polygon = obj.find("polygon")
            # print(len(polygon))
            if len(polygon) > 2:
                points = []
                for i in range(0, len(polygon)):
                    # print(polygon.find('point{}'.format(i)).text)
                    tmp = polygon.find("point{}".format(i)).text.split(",")
                    point = [int(tmp[0]), int(tmp[1])]
                    # print(point)
                    points.append(point)

                    del tmp, point

                    dic["flags"] = flags
                    dic["group_id"] = group_id
                    dic["shape_type"] = shape_type
                    dic["points"] = points
                    dic["label"] = label
            shapes.append(dic)
        # print(shapes)
        return shapes
    except Exception:
        logger.error(traceback.print_exc())


def getPolygonPascal(xmlPath):
    in_file = open(xmlPath)
    tree = ET.parse(in_file)
    root = tree.getroot()
    shapes = []
    try:
        for obj in root.iter("object"):
            flags = {}
            group_id = "null"
            shape_type = "polygon"
            # pass

            dic = dict()
            label = obj.find("name").text
            polygon = obj.find("bndbox")
            # print(len(polygon))
            # if len(polygon)>2:
            # points = []
            # for i in range(0,len(polygon)):
            xmin = int(polygon.find("xmin").text)
            ymin = int(polygon.find("ymin").text)
            xmax = int(polygon.find("xmax").text)
            ymax = int(polygon.find("ymax").text)
            # print(polygon.find('point{}'.format(i)).text)
            # tmp = polygon.find('point{}'.format(i)).text.split(',')
            # point = [int(tmp[0]),int(tmp[1])]
            # print(point)
            p1 = [xmin, ymin]
            p2 = [xmax, ymax]
            p3 = [xmin, ymax]
            p4 = [xmax, ymin]
            # points.append(point)
            points = [p1, p2, p3, p4]
            # del tmp,point

            dic["flags"] = flags
            dic["group_id"] = group_id
            dic["shape_type"] = shape_type
            dic["points"] = points
            dic["label"] = label
            shapes.append(dic)
        # print(shapes)
        return shapes
    except Exception:
        logger.error("=====    Exception     =====")
        traceback.print_exc()
