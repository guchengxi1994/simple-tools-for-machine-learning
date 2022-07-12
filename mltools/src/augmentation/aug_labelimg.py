from copy import deepcopy
import random
from typing import List
from mltools.src.augmentation import AugmentationTypes
from mltools.src.augmentation.base import BaseAugmentation
from mltools.src.decorators.unfinished_feature import UnfinishedFeature
from mltools.src.augmentation.nolabel import *
from mltools.src.augmentation.labelimg import *
from skimage import io
import xml.etree.ElementTree as ET
from mltools.src import split_file_name


@UnfinishedFeature()
class LabelimgAugmentation(BaseAugmentation):
    def from_config(self, c: dict):
        return super().from_config(c)

    def append(self, imgPath):
        return super().append(imgPath)

    def __init__(
        self,
        imgs: List[str],
        labels: List[str],
        parallel: bool = False,
        savedPath: str = "",
        augNumber: int = 1,
        augMethods: List[str] = ...,
        optionalMethods: List[str] = ...,
    ) -> None:
        """imgs 和 labels 要一一对应"""
        super().__init__(
            imgs, parallel, savedPath, augNumber, augMethods, optionalMethods
        )
        self.augType = AugmentationTypes.LabelImg
        self.labels = labels

    def onlyRotate(self,):
        _imgCount = 0
        for i in range(0, len(self.imgs)):
            _imgCount += 1
            _img = io.imread(self.imgs[i])
            tree = ET.parse(self.labels[i])
            for j in range(0, self.augNumber):
                _angle = random.randint(-180, 180)
                _rotatedImg = img_rotation(_img, angle=_angle)
                io.imsave(
                    self.savedPath
                    + "rotation-{}-{}-{}-{}.jpg".format(
                        split_file_name(self.imgs[i]), _imgCount, j, _angle
                    ),
                    _rotatedImg,
                )
                _tree = deepcopy(tree)
                root = _tree.getroot()
                for box in root.iter("bndbox"):
                    xmin = float(box.find("xmin").text)
                    ymin = float(box.find("ymin").text)
                    xmax = float(box.find("xmax").text)
                    ymax = float(box.find("ymax").text)
                    x, y, w, h = rotate_xml(_rotatedImg, xmin, ymin, xmax, ymax, _angle)
                    box.find("xmin").text = str(x)
                    box.find("ymin").text = str(y)
                    box.find("xmax").text = str(x + w)
                    box.find("ymax").text = str(y + h)
                    box.set("updated", "yes")
                _tree.write(
                    self.savedPath
                    + "rotation-{}-{}-{}-{}.xml".format(
                        split_file_name(self.imgs[i]), _imgCount, j, _angle
                    )
                )

    def onlyFlip(self, flipList=[1, 0, -1]):
        _imgCount = 0
        for i in range(0, len(self.imgs)):
            _imgCount += 1
            _img = io.imread(self.imgs[i])
            tree = ET.parse(self.labels[i])

            _imgList = img_flip(_img, flipList=flipList)
            _flip_count = 0

            for j in range(0, len(_imgList)):
                _flip_count += 1
                io.imsave(
                    self.savedPath + "flip-{}-{}.jpg".format(_imgCount, _flip_count),
                    _imgList[j],
                )
                _tree = deepcopy(tree)
                root = _tree.getroot()

                for box in root.iter("bndbox"):
                    xmin = float(box.find("xmin").text)
                    ymin = float(box.find("ymin").text)
                    xmax = float(box.find("xmax").text)
                    ymax = float(box.find("ymax").text)
                    xmin, ymin, xmax, ymax = flip_xml(
                        _imgList[j], xmin, ymin, xmax, ymax, flipList[j]
                    )
                    # change the coord
                    box.find("xmin").text = str(int(xmin))
                    box.find("ymin").text = str(int(ymin))
                    box.find("xmax").text = str(int(xmax))
                    box.find("ymax").text = str(int(ymax))
                    box.set("updated", "yes")
                # write into new xml
                _tree.write(
                    self.savedPath + "flip-{}-{}.xml".format(_imgCount, _flip_count)
                )
