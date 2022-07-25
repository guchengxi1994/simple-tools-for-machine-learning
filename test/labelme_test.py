import os
import sys

sys.path.append("..")


from mltools.src.augmentation.labelme.get_multi_shapes import get_multiple_shapes
from mltools.src.augmentation.aug_labelme import LabelmeAugementation
from mltools.src import exists
from skimage import io
import shutil


class TestLabelme:
    def test_labelme_1(self):
        img = io.imread("3_mask.png")
        j = get_multiple_shapes(oriImgPath="3.png", maskFile=img, yamlPath="3.yaml")
        with open("3_json2.json", "w") as f:
            f.write(j)

        assert os.path.exists("3_json2.json")

    def test_labelme_2(self):
        try:
            shutil.rmtree("results")
        except:
            pass
        l = LabelmeAugementation(["3.png"], ["3.json"], "3.yaml")
        l.onlyFlip()
        assert os.path.exists("results")
        files = os.listdir("results")
        assert len(files) > 0 and exists("json", files)

    def test_labelme_4(self):
        try:
            shutil.rmtree("results")
        except:
            pass
        l = LabelmeAugementation(["3.png"], ["3.json"], "3.yaml")
        l.onlyNoise()
        assert os.path.exists("results")
        files = os.listdir("results")
        assert len(files) > 0 and exists("json", files)

    def test_labelme_3(self):
        try:
            shutil.rmtree("results")
        except:
            pass
        l = LabelmeAugementation(["3.png"], ["3.json"], "3.yaml")
        l.onlyRotate()
        assert os.path.exists("results")
        files = os.listdir("results")
        assert len(files) > 0 and exists("json", files)

    def test_labelme_4(self):
        try:
            shutil.rmtree("results")
        except:
            pass
        l = LabelmeAugementation(["3.png"], ["3.json"], "3.yaml")
        l.onlyTrans()
        assert os.path.exists("results")
        files = os.listdir("results")
        assert len(files) > 0 and exists("json", files)

    def test_labelme_5(self):
        try:
            shutil.rmtree("results")
        except:
            pass
        l = LabelmeAugementation(["3.png"], ["3.json"], "3.yaml")
        l.onlyZoom()
        assert os.path.exists("results")
        files = os.listdir("results")
        assert len(files) > 0 and exists("json", files)


# l = LabelmeAugementation(["3.png"], ["3.json"], "3.yaml")
# l.onlyZoom()
