from skimage import io
import numpy as np

import xml.etree.ElementTree as ET

from mltools.src.augmentation.nolabel.optional.resize import img_resize
from mltools.src.utils.xml2yolo.xml2yolo import convert as x2yVert
from mltools.src.utils.yolo2xml.yolo2xml import convert as y2xVert
from mltools.src.log.logger import logger


def resize_script(
    oriImg: np.ndarray,
    xmlpath: str,
    heightFactor=1,
    widthFactor=1,
    savePath="",
    fileName="",
):
    tree = ET.parse(xmlpath)
    root = tree.getroot()

    if fileName != "":
        root.find("filename").text = fileName
        root.find("path").text = savePath + fileName

    resizeImg = img_resize(oriImg, heightFactor, widthFactor)

    resizeImgShape = resizeImg.shape
    width = int(resizeImgShape[1])
    height = int(resizeImgShape[0])

    size = root.find("size")
    size.find("width").text = str(width)
    size.find("height").text = str(height)

    for obj in root.iter("object"):
        xmlbox = obj.find("bndbox")
        b = (
            float(xmlbox.find("xmin").text),
            float(xmlbox.find("xmax").text),
            float(xmlbox.find("ymin").text),
            float(xmlbox.find("ymax").text),
        )
        # print('===========================')
        # print(b)
        bb = x2yVert((oriImg.shape[1], oriImg.shape[0]), b)

        x, y, w, h = bb[0], bb[1], bb[2], bb[3]
        # print(x, y, w, h)
        # w = w
        # h = h
        bbox = y2xVert((resizeImgShape[1], resizeImgShape[0]), x, y, w, h)
        # print(bbox)
        # print('===========================')
        xmlbox.find("xmin").text = str(int(bbox[0]))
        xmlbox.find("ymin").text = str(int(bbox[2]))
        xmlbox.find("xmax").text = str(int(bbox[1]))
        xmlbox.find("ymax").text = str(int(bbox[3]))

    if fileName != "":
        io.imsave(savePath + fileName, resizeImg)
        tree.write(savePath + fileName.replace(".jpg", ".xml"))
        logger.info("Resize augmentation saved to {}.".format(savePath))
    return tree
