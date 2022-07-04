import os

import numpy as np
import skimage

try:
    import defusedxml.ElementTree as ET
except:
    import xml.etree.ElementTree as ET

from mltools.src.augmentation.nolabel.optional.resize import imgResize
from mltools.src.log.logger import logger
from mltools.src.utils.xml2yolo.xml2yolo import convert as x2yVert
from mltools.src.utils.yolo2xml.yolo2xml import convert as y2xVert


def resizeScript(img, xmlpath: str, heightFactor=1, widthFactor=1, flag=True):
    if isinstance(img, str) and os.path.exists(img):
        oriImg = skimage.io.imread(img)
    elif isinstance(img, np.ndarray):
        oriImg = img
    else:
        logger.error('Input error!')
        return

    in_file = open(xmlpath)
    tree = ET.parse(in_file)
    root = tree.getroot()

    parentPath, xmlFilename = os.path.split(xmlpath)
    xf, _ = os.path.splitext(xmlFilename)
    savePath = parentPath + os.sep + xf + '_reshape.xml'

    root.find('filename').text = xf + '_reshape.jpg'
    root.find('path').text = parentPath + os.sep + xf + '_reshape.jpg'

    resizeImg = imgResize(oriImg, heightFactor, widthFactor)
    resizeImgShape = resizeImg.shape
    width = int(resizeImgShape[1])
    height = int(resizeImgShape[0])

    size = root.find('size')
    size.find('width').text = str(width)
    size.find('height').text = str(height)

    for obj in root.iter('object'):
        xmlbox = obj.find('bndbox')
        b = (float(xmlbox.find('xmin').text), float(xmlbox.find('xmax').text),
             float(xmlbox.find('ymin').text), float(xmlbox.find('ymax').text))
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
        xmlbox.find('xmin').text = str(int(bbox[0]))
        xmlbox.find('ymin').text = str(int(bbox[2]))
        xmlbox.find('xmax').text = str(int(bbox[1]))
        xmlbox.find('ymax').text = str(int(bbox[3]))

    if flag:  # save file
        tree.write(savePath)
        in_file.close()
        return resizeImg, savePath
    else:
        return tree
