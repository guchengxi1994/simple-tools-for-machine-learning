import sys

sys.path.append("..")
from mltools.src.augmentation.aug_no_label import NoLabelAugmentation

n = NoLabelAugmentation(["0.png"], False, augNumber=3)

n.append("3.png")

print(n.imgs)
