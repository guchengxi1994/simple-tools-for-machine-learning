import sys

sys.path.append("..")
from time import time

from mltools.src.augmentation.nolabel.img_rotation import img_rotation
from skimage import io


class Testimg_rotation:
    def test_rotation(self):
        t1 = time()
        img = io.imread("0.png")
        result = img_rotation(img, resize=False)
        io.imsave("rotation.jpg", result)
        assert (time() - t1) < 1
