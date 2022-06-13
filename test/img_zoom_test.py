import sys
sys.path.append("..")
import unittest
from time import time

from mltools.src.augmentation.nolabel.img_zoom import imgZoom
from skimage import io
from skimage.color import rgb2gray


class TestImageZoom(unittest.TestCase):
    def test_size_1_5(self):
        t1 = time()
        img = io.imread("0.png")
        r = imgZoom(img, 1.5)
        self.assertEqual(True, r.shape == img.shape)
        self.assertGreater(1, time() - t1)

    def test_size_0_5(self):
        t1 = time()
        img = io.imread("0.png")
        r = imgZoom(img, 0.5)
        self.assertEqual(True, r.shape == img.shape)
        self.assertGreater(1, time() - t1)

    def test_gray(self):
        t1 = time()
        img = io.imread("0.png")
        i = rgb2gray(img)
        r = imgZoom(i, 0.5)
        self.assertEqual(True, r.shape == img[:, :, 0].shape)
        self.assertGreater(1, time() - t1)


if __name__ == "__main__":
    unittest.main()