import os
import sys

sys.path.append("..")
from mltools.src.augmentation.aug_no_label import NoLabelAugmentation


class TestNolabelAugmentation:
    def test_no_label(self):
        n = NoLabelAugmentation(["0.png"], False, augNumber=3)
        # random augmentation
        n.go()
        # only flip
        n.onlyFlip()
        # only noise
        n.onlyNoise()
        # only rotation
        n.onlyRotation()
        # translation
        n.onlyTranslation()
        # zoom
        n.onlyZoom()
        # crop
        n.onlyCrop()
        # cutmix
        n.append("3.png")
        n.onlyCutmix()
        # distort
        n.onlyDistort()
        # inpaint
        n.onlyInpaint(reshape=True)
        # mosaic
        n.onlyMosaic()
        # resize
        n.onlyResize()

        assert os.path.exists("results")
