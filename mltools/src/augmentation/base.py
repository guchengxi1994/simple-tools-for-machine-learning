from abc import ABC, abstractmethod
import os
from typing import List


class BaseAugmentation(ABC):
    @abstractmethod
    def from_config(self, c: dict):
        self.config = c

    @abstractmethod
    def append(self, imgPath):
        self.imgs.append(imgPath)

    @abstractmethod
    def __init__(
        self,
        imgs: List[str],
        parallel: bool = False,
        savedPath: str = "",
        augNumber: int = 1,
        augMethods: List[str] = ["noise", "rotation", "trans", "flip", "zoom"],
        optionalMethods: List[str] = [],
    ) -> None:
        """
        @ imgs : 增广图片数组
        @ parallel : 是否并行（多进程）
        @ savedPath : 结果保存路径，可不填
        @ augNumber : 增广数量
        @ augMethods : 增广用到的方法，默认的有 "noise", "rotation", "trans", "flip", "zoom"
        @ optionalMethods : 增广用到的可选方法，默认为空数组,包括 crop, cutmix, cutout, distort, inpaint,
                            mixup, mosaic, resize
        """
        self.imgs = imgs
        self.parallel = parallel
        self.savedPath = savedPath
        self.augNumber = augNumber
        self.augMethods = augMethods
        self.optionalMethods = optionalMethods
        self.config = {}
        self.__prepare()

    def __prepare(self):
        if self.savedPath != "":
            if os.path.exists(self.savedPath):
                pass
            else:
                if not os.path.exists(self.savedPath):
                    os.mkdir(self.savedPath)
        else:
            if not os.path.exists("results"):
                os.mkdir("results")
            self.savedPath = "./results/"
