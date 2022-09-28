import json
import os
import random
import traceback
from typing import List
import copy
import numpy as np

from mltools.src import split_file_name
from mltools.src.augmentation import AugmentationTypes
from mltools.src.augmentation.base import BaseAugmentation
from mltools.src.augmentation.labelme.get_multi_shapes import get_multiple_shapes
from mltools.src.augmentation.nolabel import *
from mltools.src.augmentation.nolabel.img_flip import img_flip
from mltools.src.decorators.incomplete_feature import IncompleteFeature
from mltools.src.decorators.unfully_test_feature import UnFullyTestedFeature
from mltools.src.log.logger import logger
from mltools.src.utils.json2mask.convert import convert_json_to_mask
from mltools.src.utils.json2mask.convert_with_lable_file import (
    convert_json_to_mask_with_label,
)
from skimage import io

from mltools.src.utils.json2mask.third_party import img_arr_to_b64


@IncompleteFeature()
@UnFullyTestedFeature
class LabelmeAugementation(BaseAugmentation):
    def from_config(self, c: dict):
        return super().from_config(c)

    def append(self, imgPath):
        return super().append(imgPath)

    def __init__(
        self,
        imgs: List[str],
        labels: List[str],
        yamlPath: str = "",
        parallel: bool = False,
        savedPath: str = "",
        augNumber: int = 1,
        augMethods: List[str] = ["noise", "rotation", "trans", "flip", "zoom"],
        optionalMethods: List[str] = [],
    ) -> None:
        super().__init__(
            imgs, parallel, savedPath, augNumber, augMethods, optionalMethods
        )
        self.augType = AugmentationTypes.Labelme
        self.labels = labels
        self.yamlPath = yamlPath

    def onlyFlip(self):
        _imgCount = 0
        try:
            for i in self.imgs:
                _img = io.imread(i)
                if os.path.exists(self.yamlPath):
                    mask = convert_json_to_mask_with_label(
                        self.labels[_imgCount], self.yamlPath, saveFile=False
                    )
                else:
                    mask = convert_json_to_mask(self.labels[_imgCount], saveFile=False)
                    # print(np.max(mask))

                oriImgList = img_flip(_img, flipList=[1, 0, -1])
                maskImgList = img_flip(mask, flipList=[1, 0, -1])
                _savePath = self.savedPath

                fileName = self.labels[_imgCount].split(os.sep)[-1].replace(".json", "")
                io.imsave(_savePath + fileName + "_h.jpg", oriImgList[0])
                io.imsave(_savePath + fileName + "_v.jpg", oriImgList[1])
                io.imsave(_savePath + fileName + "_both.jpg", oriImgList[2])
                # print(_savePath + fileName + "_both.jpg")

                jsonH = get_multiple_shapes(
                    _savePath + fileName + "_h.jpg",
                    maskFile=maskImgList[0],
                    yamlPath=self.yamlPath,
                )

                jsonV = get_multiple_shapes(
                    _savePath + fileName + "_v.jpg",
                    maskFile=maskImgList[1],
                    yamlPath=self.yamlPath,
                )

                jsonBoth = get_multiple_shapes(
                    _savePath + fileName + "_both.jpg",
                    maskFile=maskImgList[2],
                    yamlPath=self.yamlPath,
                )

                with open(_savePath + fileName + "_h.json", "w") as f:
                    f.write(jsonH)

                with open(_savePath + fileName + "_v.json", "w") as f:
                    f.write(jsonV)

                with open(_savePath + fileName + "_both.json", "w") as f:
                    f.write(jsonBoth)

                _imgCount += 1
        except:
            logger.error("=====    Exception     =====")
            print(traceback.format_exc())

    def onlyNoise(self):
        _imgCount = 0
        for i in self.imgs:
            _img = io.imread(i)
            jsonData = json.load(open(self.labels[_imgCount]))
            # print(type(jsonData))
            for j in range(0, self.augNumber):
                _noisedImg = img_noise(_img)
                io.imsave(
                    self.savedPath + "noise-{}-{}.jpg".format(_imgCount + 1, j),
                    _noisedImg,
                )
                b64 = img_arr_to_b64(_noisedImg)
                _jsonData = copy.deepcopy(jsonData)
                _jsonData["imagePath"] = self.savedPath + "noise-{}-{}.json".format(
                    _imgCount + 1, j
                )
                _jsonData["imageData"] = b64.decode()
                with open(
                    self.savedPath + "noise-{}-{}.json".format(_imgCount + 1, j), "w"
                ) as f:
                    json.dump(
                        _jsonData, f, indent=3, ensure_ascii=False, sort_keys=True
                    )

            _imgCount += 1

    def onlyRotate(self):
        _imgCount = 0
        try:
            for i in self.imgs:
                _img = io.imread(i)
                if os.path.exists(self.yamlPath):
                    mask = convert_json_to_mask_with_label(
                        self.labels[_imgCount], self.yamlPath, saveFile=False
                    )
                else:
                    mask = convert_json_to_mask(self.labels[_imgCount], saveFile=False)
                fileName = self.labels[_imgCount].split(os.sep)[-1].replace(".json", "")
                for j in range(0, self.augNumber):
                    _angle = random.randint(-180, 180)
                    _rotatedImg = img_rotation(_img, angle=_angle)
                    _rotatedMask = img_rotation(mask, angle=_angle)
                    io.imsave(
                        self.savedPath + fileName + "_{}_{}.jpg".format(j, _angle),
                        _rotatedImg,
                    )
                    jsonMask = get_multiple_shapes(
                        self.savedPath + fileName + "_{}_{}.jpg".format(j, _angle),
                        _rotatedMask,
                        yamlPath=self.yamlPath,
                    )
                    with open(
                        self.savedPath + fileName + "_{}_{}.json".format(j, _angle), "w"
                    ) as f:
                        f.write(jsonMask)
                _imgCount += 1

        except:
            logger.error("=====    Exception     =====")
            print(traceback.format_exc())

    def onlyTrans(self):
        _imgCount = 0
        try:
            for i in self.imgs:
                _img = io.imread(i)
                if os.path.exists(self.yamlPath):
                    mask = convert_json_to_mask_with_label(
                        self.labels[_imgCount], self.yamlPath, saveFile=False
                    )
                else:
                    mask = convert_json_to_mask(self.labels[_imgCount], saveFile=False)
                imgShape = _img.shape
                for j in range(0, self.augNumber):
                    trans_h = random.randint(0, int(0.5 * imgShape[1]))
                    trans_v = random.randint(0, int(0.5 * imgShape[0]))

                    _transImg = img_translation(_img, trans_h, trans_v)
                    _transMask = img_translation(mask, trans_h, trans_v)

                    filename = self.savedPath + "translation-{}-{}-{}-h{}-v{}".format(
                        split_file_name(i),
                        _imgCount + 1,
                        j,
                        trans_h,
                        trans_v,
                    )
                    io.imsave(
                        filename + ".jpg",
                        _transImg,
                    )
                    jsonMask = get_multiple_shapes(
                        filename + ".jpg",
                        maskFile=_transMask,
                        yamlPath=self.yamlPath,
                    )

                    with open(filename + ".json", "w") as f:
                        f.write(jsonMask)
                _imgCount += 1
        except:
            logger.error("=====    Exception     =====")
            print(traceback.format_exc())

    def onlyZoom(self):
        _imgCount = 0
        for i in self.imgs:
            _img = io.imread(i)
            zoomfactor = random.uniform(0.8, 1.8)
            if os.path.exists(self.yamlPath):
                mask = convert_json_to_mask_with_label(
                    self.labels[_imgCount], self.yamlPath, saveFile=False
                )
            else:
                mask = convert_json_to_mask(self.labels[_imgCount], saveFile=False)
            for j in range(0, self.augNumber):
                _zoomedImg = img_zoom(_img, size=zoomfactor)
                _zoomedmask = img_zoom(mask, size=zoomfactor)
                filename = self.savedPath + "zoom-{}-{}-{}-{}".format(
                    split_file_name(self.imgs[_imgCount]),
                    _imgCount + 1,
                    j,
                    zoomfactor,
                )
                io.imsave(
                    filename + ".jpg",
                    _zoomedImg,
                )
                jsonMask = get_multiple_shapes(
                    filename + ".jpg",
                    maskFile=_zoomedmask,
                    yamlPath=self.yamlPath,
                )

                with open(filename + ".json", "w") as f:
                    f.write(jsonMask)
            _imgCount += 1
