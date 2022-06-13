import sys

import pytest
sys.path.append("..")
from time import time

from mltools.src.augmentation.nolabel.img_flip import imgFlip
from skimage import io


class TestImageFlip():
    def test_flip(self):
        t1 = time()
        img = io.imread("0.png")
        results = imgFlip(img)
        i1, i2, i3 = results[0], results[1], results[2]

        for i in [0, 46, 178, 677]:

            print(img[i][i])
            print(i1[i][1023 - i])
            print(i2[1023 - i][i])
            print(i3[1023 - i][1023 - i])

            assert img[i][i][0] == i1[i][1023 - i][0]
            assert img[i][i][1] == i2[1023 - i][i][1]
            assert img[i][i][2] == i3[1023 - i][1023 - i][2]
        
        assert (time()-t1)<1
