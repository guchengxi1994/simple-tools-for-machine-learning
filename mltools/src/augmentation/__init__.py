"""
Descripttion: 
version: 
Author: xiaoshuyui
email: guchengxi1994@qq.com
Date: 2022-06-12 13:29:45
LastEditors: xiaoshuyui
LastEditTime: 2022-06-12 18:11:18
"""

# image augmentation libaray
from enum import Enum
from typing import TypeVar

from mltools import __auglib_version__


# enum
class AugmentationTypes(Enum):
    """
    `LabelImg` 目标识别

    `Labelme` 目标分割

    `NoLabel` 只增广图片，不增广标注文件
    """

    LabelImg = 1
    Labelme = 2
    NoLabel = 3


from numpy import ndarray

NullableNdArray = TypeVar("NullableNdArray", None, ndarray)
PathOrNdarray = TypeVar("PathOrNdarray", str, ndarray)
