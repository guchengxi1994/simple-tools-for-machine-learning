import json
import os
import traceback
from typing import List
import copy

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

                oriImgList = img_flip(_img, flipList=[1, 0, -1])
                maskImgList = img_flip(mask, flipList=[1, 0, -1])
                _savePath = self.savedPath + "jsons_"
                if os.path.exists(_savePath):
                    pass
                else:
                    os.makedirs(_savePath)

                fileName = self.labels[_imgCount].split(os.sep)[-1].replace(".json", "")
                io.imsave(_savePath + os.sep + fileName + "_h.jpg", oriImgList[0])
                io.imsave(_savePath + os.sep + fileName + "_v.jpg", oriImgList[1])
                io.imsave(_savePath + os.sep + fileName + "_both.jpg", oriImgList[2])

                jsonH = get_multiple_shapes(
                    _savePath + os.sep + fileName + "_h.jpg",
                    maskFile=maskImgList[0],
                    yamlPath=self.yamlPath,
                )

                jsonV = get_multiple_shapes(
                    _savePath + os.sep + fileName + "_v.jpg",
                    maskFile=maskImgList[1],
                    yamlPath=self.yamlPath,
                )

                jsonBoth = get_multiple_shapes(
                    _savePath + os.sep + fileName + "_both.jpg",
                    maskFile=maskImgList[2],
                    yamlPath=self.yamlPath,
                )

                with open(_savePath + os.sep + fileName + "_h.json", "w") as f:
                    f.write(jsonH)

                with open(_savePath + os.sep + fileName + "_v.json", "w") as f:
                    f.write(jsonV)

                with open(_savePath + os.sep + fileName + "_both.json", "w") as f:
                    f.write(jsonBoth)

                _imgCount += 1
        except:
            logger.error("=====    Exception     =====")
            traceback.format_exc()

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
                _jsonData["imagePath"] = self.savedPath + "noise-{}-{}.json".format(_imgCount + 1, j)
                _jsonData["imageData"] = b64.decode()
                with open(self.savedPath + "noise-{}-{}.json".format(_imgCount + 1, j), "w") as f:
                    json.dump(_jsonData,f,indent=3,ensure_ascii=False,sort_keys=True)

            _imgCount += 1
    

    def onlyRotate(self):...

    def onlyTrans(self):...

    def onlyZoom(self):...
