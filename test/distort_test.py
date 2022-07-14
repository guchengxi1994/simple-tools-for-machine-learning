import os
import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.distort import img_distort
from skimage import io


class TestDistort:
    def test_distort(self):
        img = io.imread("0.png")
        result = img_distort(img)
        io.imsave("distort.jpg", result)
        assert os.path.exists("distort.jpg")
