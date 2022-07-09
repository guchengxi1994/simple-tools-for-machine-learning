"""
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-07-09 08:43:17
LastEditors: xiaoshuyui
LastEditTime: 2022-07-09 09:15:33
"""
from typing import List
from mltools.src.augmentation import AugmentationTypes


class Augmentation:
    def __init__(
        self,
        augType: AugmentationTypes,
        imgs: List[str],
        parallel: bool = False,
        savedPath: str = "",
        augNumber: int = 1,
    ) -> None:
        self.augType = augType
        self.imgs = imgs
        self.parallel = parallel
        self.savedPath = savedPath
        self.augNumber = augNumber

    def __prepare(self):
        ...

    def go(self, *args, **kwargs):
        """本来想命名为 `process` 的，但是因为和很多函数名冲突，就改为`go`了"""
        pass
