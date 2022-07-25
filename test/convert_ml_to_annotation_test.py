import os
import sys

sys.path.append("..")

from mltools.src.utils.mlfiles_standardization.standardization import standardization


class TestMlFilesStandardization:
    def test_standardization(self):
        filePath = "test.ml"
        standardization(filePath)

        assert os.path.exists("微信图片_20220630154449.jpg")
        assert os.path.exists("微信图片_20220630154449.xml")
        assert os.path.exists("微信图片_20220630154449.json")
