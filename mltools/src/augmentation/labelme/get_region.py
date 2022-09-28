import cv2
import numpy as np


def get_approx(contour, length_p=0.1):
    """获取逼近多边形
    :param img: 处理图片
    :param contour: 连通域
    :param length_p: 逼近长度百分比
    """
    # 逼近长度计算
    epsilon = length_p * cv2.arcLength(contour, True)
    # 获取逼近多边形
    approx = cv2.approxPolyDP(contour, epsilon, True)
    return approx


def get_multi_region(img_bin):
    contours, _ = cv2.findContours(img_bin, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    regions = []
    if len(contours) >= 1:
        for i in range(0, len(contours)):
            if contours[i] != []:
                region = get_approx(contours[i], 0.002)
                if region.shape[0] > 3:
                    _r = []
                    for j in region:
                        _r.append(j[0])
                    regions.append(np.array(_r))

    return regions
