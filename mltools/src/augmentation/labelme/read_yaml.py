import os
import numpy as np
import yaml
from skimage import measure


def rs(st: str):
    s = st.replace("\n", "").strip()
    return s


def read_yaml(filepath: str, labeledImg=None):
    if os.path.exists(filepath):
        if filepath.endswith(".yaml"):
            f = open(filepath)
            y = yaml.load(f, Loader=yaml.FullLoader)
            f.close()
            # print(y)
            tmp = y["label_names"]
            objs = zip(tmp.keys(), tmp.values())
            return sorted(objs)
        elif filepath.endswith(".txt"):
            f = open(filepath, "r", encoding="utf-8")
            classList = f.readlines()
            f.close()
            l3 = [rs(i) for i in classList]
            l = list(range(1, len(classList) + 1))
            objs = zip(l3, l)
            return sorted(objs)
    elif labeledImg is not None and filepath == "":
        """
        should make sure your label is correct!!!
        """
        labeledImg = np.array(labeledImg, dtype=np.uint8)

        labeledImg[labeledImg > 0] = 255
        labeledImg[labeledImg != 255] = 0

        # _, labels, stats, centroids = cv2.connectedComponentsWithStats(
        #     labeledImg)
        blobs_labels = measure.label(labeledImg, background=0)

        labels = np.max(blobs_labels) + 1
        labels = [x for x in range(1, labels)]

        classes = []
        for i in range(0, len(labels)):
            classes.append("class{}".format(i))

        return zip(classes, labels)
    else:
        raise FileExistsError("file not found")
