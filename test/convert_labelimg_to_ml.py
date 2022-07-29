import os
import sys

sys.path.append("..")
from mltools.src.utils.mlfiles_standardization.non_standardization import (
    labelImg_to_ml_file,
    labelme_to_ml_file,
)

img = "0.png"
xml = "0.xml"
json = "3.json"


class TestLabelImgToMl:
    def test_labelImg_to_ml(self):
        if os.path.exists("0.ml"):
            os.remove("0.ml")
        labelImg_to_ml_file(xml, img)
        assert os.path.exists("0.ml")

        if os.path.exists("3.ml"):
            os.remove("3.ml")
        labelme_to_ml_file(json)
        assert os.path.exists("3.ml")
