import random
import xml.etree.ElementTree as ET
from copy import deepcopy
from typing import List

from mltools.src import split_file_name
from mltools.src.augmentation import AugmentationTypes
from mltools.src.augmentation.base import BaseAugmentation
from mltools.src.augmentation.labelimg import *
from mltools.src.augmentation.nolabel import *
from mltools.src.decorators.incomplete_feature import IncompleteFeature
from mltools.src.decorators.unfully_test_feature import UnFullyTestedFeature
from skimage import io


@IncompleteFeature()
@UnFullyTestedFeature
class LabelimgAugmentation(BaseAugmentation):
    def from_config(self, c: dict):
        return super().from_config(c)

    def append(self, imgPath, xmlPath):
        super().append(imgPath)
        self.labels.append(xmlPath)

    def __init__(
        self,
        imgs: List[str],
        labels: List[str],
        parallel: bool = False,
        savedPath: str = "",
        augNumber: int = 1,
        augMethods: List[str] = ["noise", "rotation", "trans", "flip", "zoom"],
        optionalMethods: List[str] = [],
    ) -> None:
        """imgs 和 labels 要一一对应"""
        super().__init__(
            imgs, parallel, savedPath, augNumber, augMethods, optionalMethods
        )
        self.augType = AugmentationTypes.LabelImg
        self.labels = labels

    def onlyTrans(self):
        _imgCount = 0
        for i in self.imgs:
            _img = io.imread(i)
            imgShape = _img.shape
            tree = ET.parse(self.labels[_imgCount])
            for j in range(0, self.augNumber):
                trans_h = random.randint(0, int(0.5 * imgShape[1]))
                trans_v = random.randint(0, int(0.5 * imgShape[0]))
                _transImg = img_translation(_img, trans_h, trans_v)
                io.imsave(
                    self.savedPath
                    + "translation-{}-{}-{}-h{}-v{}.jpg".format(
                        split_file_name(self.imgs[_imgCount]),
                        _imgCount + 1,
                        j,
                        trans_h,
                        trans_v,
                    ),
                    _transImg,
                )
                _tree = deepcopy(tree)
                root = _tree.getroot()
                for box in root.iter("bndbox"):
                    xmin = float(box.find("xmin").text)
                    ymin = float(box.find("ymin").text)
                    xmax = float(box.find("xmax").text)
                    ymax = float(box.find("ymax").text)
                    xmin, xmax, ymin, ymax = trans_xml(
                        _transImg, xmin, ymin, xmax, ymax, trans_h, trans_v
                    )
                    box.find("xmin").text = str(xmin)
                    box.find("ymin").text = str(ymin)
                    box.find("xmax").text = str(xmax)
                    box.find("ymax").text = str(ymax)
                    box.set("updated", "yes")
                root.find("filename").text = "translation-{}-{}-{}-h{}-v{}.jpg".format(
                    split_file_name(self.imgs[_imgCount]),
                    _imgCount + 1,
                    j,
                    trans_h,
                    trans_v,
                )
                root.find(
                    "path"
                ).text = self.savedPath + "translation-{}-{}-{}-h{}-v{}.jpg".format(
                    split_file_name(self.imgs[_imgCount]),
                    _imgCount + 1,
                    j,
                    trans_h,
                    trans_v,
                )
                _tree.write(
                    self.savedPath
                    + "translation-{}-{}-{}-h{}-v{}.xml".format(
                        split_file_name(self.imgs[_imgCount]),
                        _imgCount + 1,
                        j,
                        trans_h,
                        trans_v,
                    )
                )
            _imgCount += 1

    def onlyZoom(self):
        _imgCount = 0
        for i in self.imgs:
            _img = io.imread(i)
            tree = ET.parse(self.labels[_imgCount])
            zoomfactor = random.uniform(0.8, 1.8)
            zoomfactor = round(zoomfactor, 2)
            for j in range(0, self.augNumber):
                _zoomedImg = img_zoom(_img, size=zoomfactor)
                io.imsave(
                    self.savedPath
                    + "zoom-{}-{}-{}-{}.jpg".format(
                        split_file_name(self.imgs[_imgCount]),
                        _imgCount + 1,
                        j,
                        zoomfactor,
                    ),
                    _zoomedImg,
                )
                _tree = deepcopy(tree)
                root = _tree.getroot()
                for box in root.iter("bndbox"):
                    xmin = float(box.find("xmin").text)
                    ymin = float(box.find("ymin").text)
                    xmax = float(box.find("xmax").text)
                    ymax = float(box.find("ymax").text)
                    xmin, xmax, ymin, ymax = zoom_xml(
                        _zoomedImg, zoomfactor, xmin, ymin, xmax, ymax
                    )
                    box.find("xmin").text = str(xmin)
                    box.find("ymin").text = str(ymin)
                    box.find("xmax").text = str(xmax)
                    box.find("ymax").text = str(ymax)
                    box.set("updated", "yes")

            root.find("filename").text = "zoom-{}-{}-{}-{}.jpg".format(
                split_file_name(self.imgs[_imgCount]),
                _imgCount + 1,
                j,
                zoomfactor,
            )
            root.find("path").text = self.savedPath + "zoom-{}-{}-{}-{}.jpg".format(
                split_file_name(self.imgs[_imgCount]),
                _imgCount + 1,
                j,
                zoomfactor,
            )

            _tree.write(
                self.savedPath
                + "zoom-{}-{}-{}-{}.xml".format(
                    split_file_name(self.imgs[_imgCount]),
                    _imgCount + 1,
                    j,
                    zoomfactor,
                )
            )
            _imgCount += 1

    def onlyMosaic(self):
        if len(self.imgs) == 0:
            return

        num = list(range(0, len(self.imgs)))

        for i in range(0, self.augNumber):
            i1 = random.sample(num, k=1)[0]
            i2 = random.sample(num, k=1)[0]
            i3 = random.sample(num, k=1)[0]
            i4 = random.sample(num, k=1)[0]
            img1 = io.imread(self.imgs[i1])
            img2 = io.imread(self.imgs[i2])
            img3 = io.imread(self.imgs[i3])
            img4 = io.imread(self.imgs[i4])
            xml1 = self.labels[i1]
            xml2 = self.labels[i2]
            xml3 = self.labels[i3]
            xml4 = self.labels[i4]
            mosaic_xml(
                [img1, img2, img3, img4],
                [xml1, xml2, xml3, xml4],
                self.savedPath,
                "mosaic-{}-{}-{}-{}-{}.jpg".format(
                    split_file_name(self.imgs[i1]),
                    split_file_name(self.imgs[i2]),
                    split_file_name(self.imgs[i3]),
                    split_file_name(self.imgs[i4]),
                    i,
                ),
            )

    def onlyResize(self):
        _imgCount = 0
        for i in self.imgs:
            for j in range(0, self.augNumber):
                f1 = random.uniform(0.1, 0.9)
                f2 = random.uniform(0.1, 0.9)
                resize_xml(
                    io.imread(i),
                    self.labels[_imgCount],
                    f1,
                    f2,
                    self.savedPath,
                    "resize-{}-{}-{}-{}-{}.jpg".format(
                        split_file_name(i), _imgCount, j, f1, f2
                    ),
                )

            _imgCount += 1

    def onlyNoise(self):
        _imgCount = 0
        for i in self.imgs:
            _img = io.imread(i)
            tree = ET.parse(self.labels[_imgCount])
            for j in range(0, self.augNumber):
                _noisedImg = img_noise(_img)
                io.imsave(
                    self.savedPath + "noise-{}-{}.jpg".format(_imgCount + 1, j),
                    _noisedImg,
                )
            root = tree.getroot()
            root.find("filename").text = "noise-{}-{}.jpg".format(_imgCount + 1, j)
            root.find("path").text = self.savedPath + "noise-{}-{}.jpg".format(
                _imgCount + 1, j
            )
            tree.write(self.savedPath + "noise-{}-{}.xml".format(_imgCount + 1, j))

            _imgCount += 1

    def onlyRotate(self):
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

                root.find("filename").text = "rotation-{}-{}-{}-{}.jpg".format(
                    split_file_name(self.imgs[i]), _imgCount, j, _angle
                )
                root.find(
                    "path"
                ).text = self.savedPath + "rotation-{}-{}-{}-{}.jpg".format(
                    split_file_name(self.imgs[i]), _imgCount, j, _angle
                )

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
                root.find("filename").text = "flip-{}-{}.jpg".format(
                    _imgCount, _flip_count
                )
                root.find("path").text = self.savedPath + "flip-{}-{}.jpg".format(
                    _imgCount, _flip_count
                )
                _tree.write(
                    self.savedPath + "flip-{}-{}.xml".format(_imgCount, _flip_count)
                )
