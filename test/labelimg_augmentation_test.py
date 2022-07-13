import sys

sys.path.append("..")
from mltools.src.augmentation.aug_labelimg import LabelimgAugmentation

l = LabelimgAugmentation(["0.png"], ["0.xml"])

if __name__ == "__main__":
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
