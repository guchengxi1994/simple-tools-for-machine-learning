import json
import sys

sys.path.append("..")
from mltools.src.utils.xml2createML.xml2createML import xml2createML


class TestXmlToCreateML:
    def test(self):
        r = xml2createML("0.xml")
        r2 = json.load(open("0.json", encoding="utf-8"))
        assert r == r2
