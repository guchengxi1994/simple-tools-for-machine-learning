""" This script is just using for server test
"""

import numpy as np
from skimage.color import rgb2gray
from skimage.feature import match_descriptors, SIFT


def sift(img1: np.ndarray, img2: np.ndarray):
    greyImg1 = rgb2gray(img1)
    greyImg2 = rgb2gray(img2)

    descriptor_extractor = SIFT()
    descriptor_extractor.detect_and_extract(greyImg1)
    keypoints1 = descriptor_extractor.keypoints
    descriptors1 = descriptor_extractor.descriptors

    descriptor_extractor.detect_and_extract(greyImg2)
    keypoints2 = descriptor_extractor.keypoints
    descriptors2 = descriptor_extractor.descriptors

    matches12:list = match_descriptors(
        descriptors1, descriptors2, max_ratio=0.6, cross_check=True
    )

    points = []
    for i in matches12:
        p1 = keypoints1[i[0]]
        p2 = keypoints2[i[1]]
        points.append([p1.tolist(),p2.tolist()])

    # print(matches12)
    return len(descriptors1), len(descriptors2), points
