import cv2
import numpy as np


class TemplateMatchModel:
    def __init__(self, resultImg: np.ndarray, similatity: str) -> None:
        self.resultImg = resultImg
        self.similarity = similatity


def template_match(
    imgData: np.ndarray, template: np.ndarray, method: int
) -> TemplateMatchModel:
    res = cv2.matchTemplate(imgData, template, method)
    _, max_val, min_loc, max_loc = cv2.minMaxLoc(res)
    w, h = template.shape[1], template.shape[0]
    if method == 4 or method == 5:
        top_left = min_loc
    else:
        top_left = max_loc
    bottom_right = (top_left[0] + w, top_left[1] + h)

    point = (
        int(0.5 * (top_left[0] + bottom_right[0])),
        int(0.5 * (top_left[1] + bottom_right[1])),
    )

    cv2.circle(imgData, point, color=(255, 0, 0), radius=5, thickness=5)
    if method == 0 or method == 2 or method == 4:
        similarity = "invalid"
    else:
        similarity = str(max_val)
    return TemplateMatchModel(imgData, similarity)

def get_template_match_code()->str:
    return """
import cv2

# img 和 template 的类型是numpy.ndarray
# 但是可以是一维向量，所以可以用这种方法计算两个向量之间的相关系数

img = cv2.imread("path/to/img")
template = cv2.imread("path/to/template")


# 一般都是用这个计算相似度（皮尔逊系数）
res = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED) 

# 函数签名里返回值是 Tuple[float, float, Tuple[int, int], Tuple[int, int]]，前两个参数是最大以及最小相似度，后面两个是对应的坐标
min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res) 
"""
