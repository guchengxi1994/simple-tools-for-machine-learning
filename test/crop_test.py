import os
import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.crop import *
from skimage import io


class TestCrop:
    def test_crop(self):
        img = io.imread("0.png")

        result = polygon_crop(img, noise=True)
        io.imsave("crop.jpg", result)
        assert os.path.exists("crop.jpg")

        result2 = multi_polygon_crop(img, noise=True)
        io.imsave("crop2.jpg", result2)
        assert os.path.exists("crop2.jpg")
