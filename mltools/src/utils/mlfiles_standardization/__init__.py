class Annotation:
    def __init__(
        self,
        annotationType: str = "",
        labelName: str = "",
        bndbox: dict = None,
        polygon: list = None,
    ) -> None:
        self.annotationType = annotationType
        self.labelName = labelName
        self.bndbox = bndbox
        self.polygon = polygon

    def from_json(self, d: dict):
        self.annotationType = d.get("annotationType", "")
        self.labelName = d.get("labelName", "")
        self.polygon = d.get("polygon", None)
        self.bndbox = d.get("bndbox", None)

    def standardize(self) -> dict:
        if self.annotationType == "rect":
            labelImgObj = {}
            labelImgObj["name"] = self.labelName
            labelImgObj["difficult"] = 0
            labelImgObj["bndbox"] = self.bndbox
            return labelImgObj
        else:
            labelmeObj = {}
            labelmeObj["flags"] = {}
            labelmeObj["group_id"] = None
            labelmeObj["label"] = self.labelName
            labelmeObj["points"] = self.polygon
            return labelmeObj
