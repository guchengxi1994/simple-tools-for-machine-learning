import sys

sys.path.append("..")
from mltools.src.augmentation.aug_no_label import NoLabelAugmentation

n = NoLabelAugmentation(["0.png"], False, augNumber=3)

if __name__ == "__main__":
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
    n.onlyMosiac()
    # resize
    n.onlyResize()
