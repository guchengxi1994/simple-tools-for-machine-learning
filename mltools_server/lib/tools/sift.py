import sys

from mltools_server.lib.exceptions import ImageError


sys.path.append("..")
from mltools.src.utils.sift import sift
from mltools.src.utils.json2mask.third_party import img_b64_to_arr
from pydantic import BaseModel


class SiftResult:
    def __init__(self, kp1: int, kp2: int, matches: list) -> None:
        """kp for key points"""
        self.kp1 = kp1
        self.kp2 = kp2
        self.matches = matches
        self.similarity = 0
        print(len(matches))
        if self.kp1 + self.kp2 > 0:
            self.similarity = round(2*len(matches) / (self.kp1 + self.kp2), 2)


class SiftReq(BaseModel):
    img1: str
    img2: str


def process_sift(req: SiftReq) -> SiftResult:
    imgArray1 = img_b64_to_arr(req.img1)
    shape1 = imgArray1.shape
 
    imgArray2 = img_b64_to_arr(req.img2)
    shape2 = imgArray2.shape

    if (len(shape1)!= 3 or shape1[2]!=3) or (len(shape2)!= 3 or shape2[2]!=3):
        print(shape1)
        print(shape2)
        raise ImageError()

    result = sift(imgArray1, imgArray2)
    return SiftResult(result[0], result[1], result[2])
