import os
import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.inpaint import (
    rectangle_inpaint,
    polygon_inpaint,
)

from skimage import io
from skimage.transform import resize


class TestInpaint:
    def test_inpaint(self):
        img = io.imread("0.png")
        img = resize(img, (256, 256), preserve_range=True)

        res1 = rectangle_inpaint(img)
        io.imsave("inpaint1.jpg", res1)

        res2 = polygon_inpaint(img)
        io.imsave("inpaint2.jpg", res2)
        assert os.path.exists("inpaint1.jpg")
        assert os.path.exists("inpaint2.jpg")
