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

    def to_json(self) -> dict:
        return {
            "annotationType": self.annotationType,
            "labelName": self.labelName,
            "polygon": self.polygon,
            "bndbox": self.bndbox,
        }

    def standardize(self, imgHeight, imgWidth) -> dict:
        if self.annotationType == "rect":
            labelImgObj = {}
            labelImgObj["name"] = self.labelName
            labelImgObj["difficult"] = 0
            if self.bndbox["xmax"] > imgHeight:
                self.bndbox["xmax"] = imgHeight
            if self.bndbox["xmin"] < 0:
                self.bndbox["xmin"] = 0
            if self.bndbox["ymax"] > imgWidth:
                self.bndbox["ymax"] = imgWidth
            if self.bndbox["ymin"] < 0:
                self.bndbox["ymin"] = 0
            labelImgObj["bndbox"] = self.bndbox
            return labelImgObj
        else:
            labelmeObj = {}
            labelmeObj["flags"] = {}
            labelmeObj["group_id"] = None
            labelmeObj["label"] = self.labelName
            for p in self.polygon:
                if p[0] < 0:
                    p[0] = 0
                if p[0] > imgHeight:
                    p[0] = imgHeight
                if p[1] < 0:
                    p[1] = 0
                if p[1] > imgWidth:
                    p[1] = imgWidth
            labelmeObj["points"] = self.polygon
            return labelmeObj
