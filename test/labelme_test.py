import os
import sys


sys.path.append("..")


from mltools.src.augmentation.labelme.get_multi_shapes import get_multiple_shapes
from mltools.src.augmentation.aug_labelme import LabelmeAugementation
from skimage import io


class TestLabelme:
    def test_labelme_1(self):
        img = io.imread("3_mask.png")
        j = get_multiple_shapes(oriImgPath="3.png", maskFile=img, yamlPath="3.yaml")
        with open("3_json2.json", "w") as f:
            f.write(j)

        assert os.path.exists("3_json2.json")

    def test_labelme_2(self):
        l = LabelmeAugementation(["3.png"], ["3.json"], "3.yaml")
        l.onlyFlip()
        assert os.path.exists("results/jsons_")

        l.onlyNoise()

l = LabelmeAugementation(["3.png"], ["3.json"], "3.yaml")
l.onlyNoise()
