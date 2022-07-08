import sys

sys.path.append("..")
from time import time

from mltools.src.augmentation.nolabel.img_translation import img_translation
from skimage import io


class Testimg_rotation:
    def test_rotation(self):
        t1 = time()
        img = io.imread("0.png")
        result = img_translation(img, th=-200, tv=100)
        io.imsave("translation.jpg", result)
        assert (time() - t1) < 1
