import os
import sys

sys.path.append("..")
from mltools.src.augmentation.aug_labelimg import LabelimgAugmentation
from mltools.src import exists


class TestLabelimgAugmentation:
    def test_labelimg(self):
        l = LabelimgAugmentation(["0.png"], ["0.xml"])
        # flip
        l.onlyFlip()
        # rotate
        l.onlyRotate()
        # translation
        l.onlyTrans()
        # zoom
        l.onlyZoom()
        # noise
        l.onlyNoise()
        # mosaic
        l.append("3.png", "3.xml")
        l.onlyMosaic()
        # resize
        l.onlyResize()

        assert os.path.exists("results")
        files = os.listdir("results")
        assert len(files) > 0 and exists("xml",files)
