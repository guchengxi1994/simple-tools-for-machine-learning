import sys

sys.path.append("..")
from time import time

from mltools.src.augmentation.nolabel.img_rotation import imgRotation
from skimage import io


class TestImgRotation():
    def test_rotation(self):
        t1 = time()
        img = io.imread("0.png")
        result = imgRotation(img, resize=False)
        io.imsave("rotation.jpg", result)
        assert (time() - t1) < 1
