import sys

sys.path.append("..")
from mltools.src.utils.json2mask.convert import convert_json_to_mask
from mltools.src.utils.json2mask.convert_with_lable_file import (
    convert_json_to_mask_with_label,
)


class TestConvertJson2Mask:
    def test_j2m(self):
        try:
            convert_json_to_mask(
                "D:/github_repo/simple-tools-for-machine-learning/test/3.json"
            )

            convert_json_to_mask_with_label(
                "D:/github_repo/simple-tools-for-machine-learning/test/3.json",
                "D:/github_repo/simple-tools-for-machine-learning/test/3.yaml",
            )
        except:
            print("file maybe not found")
