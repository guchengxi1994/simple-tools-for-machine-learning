import copy
import os
import numpy as np
import xml.etree.ElementTree as ET
from mltools.src.decorators.unfully_test_feature import UnFullyTestedFeature
from mltools.src.utils.split.split_img import split_img_overlap
from skimage import io


@UnFullyTestedFeature
def split_xml(oriImg: np.ndarray, xmlPath: str, savePath: str, imgName: str = "split"):
    imgList, overlapImgList = split_img_overlap(oriImg)

    tree = ET.parse(xmlPath)
    root = tree.getroot()

    for j in range(0, len(imgList)):
        subImg = imgList[j]
        if j != len(imgList) - 1:
            subOverLayImg = overlapImgList[j]
            tmp = str(subOverLayImg.ID).replace(".", "dot")
            io.imsave(savePath + os.sep + imgName + tmp + ".jpg", subOverLayImg.img)
        else:
            subOverLayImg = None
        io.imsave(savePath + os.sep + imgName + str(subImg.ID) + ".jpg", subImg.img)
        if root is not None:
            subImgTree = copy.deepcopy(tree)
            subImgRoot = subImgTree.getroot()
            size = subImgRoot.find("size")
            size.find("width").text = str(subImg.width)
            size.find("height").text = str(subImg.height)
            subs = subImgRoot.findall("object")
            for obj in subs:
                xmlbox = obj.find("bndbox")
                b = (
                    float(xmlbox.find("xmin").text),
                    float(xmlbox.find("xmax").text),
                    float(xmlbox.find("ymin").text),
                    float(xmlbox.find("ymax").text),
                )
                oriWidth = float(xmlbox.find("xmax").text) - float(
                    xmlbox.find("xmin").text
                )
                xmlbox.find("xmin").text = (
                    str(int(float(xmlbox.find("xmin").text) - j * subImg.width))
                    if float(xmlbox.find("xmin").text) - j * subImg.width > 0
                    else str(0)
                )
                xmlbox.find("xmax").text = (
                    str(int(float(xmlbox.find("xmax").text) - j * subImg.width))
                    if float(xmlbox.find("xmax").text) - j * subImg.width < subImg.width
                    else str(subImg.width)
                )
                if b[1] < j * subImg.width or b[0] > ((j + 1) * subImg.width):
                    subImgRoot.remove(obj)

                if xmlbox:
                    if (
                        int(xmlbox.find("xmax").text) - int(xmlbox.find("xmin").text)
                        < 0.5 * oriWidth
                    ):
                        try:
                            subImgRoot.remove(obj)
                        except:
                            pass

            xmlsavepath = savePath + os.sep + imgName + str(subImg.ID) + ".xml"
            subImgTree.write(xmlsavepath)

            if subOverLayImg:
                subOverImgTree = copy.deepcopy(tree)
                subOverImgRoot = subOverImgTree.getroot()
                size = subOverImgRoot.find("size")
                size.find("width").text = str(subOverLayImg.width)
                size.find("height").text = str(subOverLayImg.height)
                subs = subOverImgRoot.findall("object")
                for obj in subs:
                    xmlbox = obj.find("bndbox")
                    oriWidth = float(xmlbox.find("xmax").text) - float(
                        xmlbox.find("xmin").text
                    )
                    b = (
                        float(xmlbox.find("xmin").text),
                        float(xmlbox.find("xmax").text),
                        float(xmlbox.find("ymin").text),
                        float(xmlbox.find("ymax").text),
                    )
                    xmlbox.find("xmin").text = (
                        str(
                            int(
                                float(xmlbox.find("xmin").text)
                                - (j + 0.5) * subImg.width
                            )
                        )
                        if float(xmlbox.find("xmin").text) - (j + 0.5) * subImg.width
                        > 0
                        else str(0)
                    )
                    xmlbox.find("xmax").text = (
                        str(
                            int(
                                float(xmlbox.find("xmax").text)
                                - (j + 0.5) * subImg.width
                            )
                        )
                        if float(xmlbox.find("xmax").text) - (j + 0.5) * subImg.width
                        < subImg.width
                        else str(subImg.width)
                    )
                    if b[1] < (j + 0.5) * subImg.width or b[0] > (
                        (j + 1.5) * subImg.width
                    ):
                        subOverImgRoot.remove(obj)

                    if xmlbox:
                        if (
                            int(xmlbox.find("xmax").text)
                            - int(xmlbox.find("xmin").text)
                            < 0.5 * oriWidth
                        ):
                            try:
                                subOverImgRoot.remove(obj)
                            except:
                                pass
                tmp = str(subOverLayImg.ID).replace(".", "dot")
                xmlsavepath = savePath + os.sep + imgName + tmp + ".xml"
                subOverImgTree.write(xmlsavepath)
