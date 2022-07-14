import sys

sys.path.append("..")
from mltools.src.utils.split.split_img import reshape_ref_short_side
import skimage


class TestSplitXml:
    def test_reshape_img(self):
        img = skimage.io.imread("0.png")
        img = skimage.transform.resize(img, (600, 2000), preserve_range=True)
        img2 = reshape_ref_short_side(img)
        assert img2.shape == (648, 2592, 3)
