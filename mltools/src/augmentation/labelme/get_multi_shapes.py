import copy
import json
import os
import numpy as np
from mltools.src.augmentation.labelme.get_binary import get_binary
from mltools.src.augmentation.labelme.get_region import get_multi_region
from mltools.src.augmentation.labelme.read_yaml import read_yaml
from mltools.src.utils.xml2json.xml2json import img_encode


def process(oriImg):
    img_bin = get_binary(oriImg)
    return get_multi_region(img_bin)


def get_multiple_shapes(
    oriImgPath: str,
    maskFile: np.ndarray,
    yamlPath: str = "",
    labelme_version: str = "4.2.9",
):
    label_img = copy.deepcopy(maskFile)

    if np.max(label_img) > 127:
        label_img[label_img > 127] = 255
        label_img[label_img != 255] = 0
        label_img = label_img / 255
    else:
        label_img[label_img > 0] = 1

    labelShape = label_img.shape
    labels = read_yaml(yamlPath, label_img)
    shapes = []
    obj = dict()
    obj["version"] = labelme_version
    obj["flags"] = {}

    for la in list(labels):

        if la[1] > 0:
            # print(la[0])
            img = copy.deepcopy(label_img)  # img = label_img.copy()
            img = img.astype(np.uint8)

            img[img == la[1]] = 255

            img[img != 255] = 0

            region = process(img.astype(np.uint8))

            if isinstance(region, np.ndarray):
                points = []
                for i in range(0, region.shape[0]):
                    # print(region[i][0])
                    tmp = region[i].tolist()
                    tmp.reverse()
                    points.append(tmp)
                shape = dict()
                shape["label"] = la[0]
                shape["points"] = points
                shape["group_id"] = "null"
                shape["shape_type"] = "polygon"
                shape["flags"] = {}
                shapes.append(shape)

            elif isinstance(region, list):
                # print(len(region))
                for subregion in region:
                    points = []
                    for i in range(0, subregion.shape[0]):
                        # points.append(subregion[i].tolist().reverse())
                        tmp = subregion[i].tolist()
                        tmp.reverse()
                        points.append(tmp)
                    shape = dict()
                    shape["label"] = la[0]
                    shape["points"] = points
                    shape["group_id"] = None
                    shape["shape_type"] = "polygon"
                    shape["flags"] = {}
                    shapes.append(shape)

    # print(len(shapes))
    obj["shapes"] = shapes
    # print(shapes)
    (_, imgname) = os.path.split(oriImgPath)
    obj["imagePath"] = imgname
    # print(obj['imagePath'])
    obj["imageData"] = str(img_encode(oriImgPath))

    obj["imageHeight"] = labelShape[0]
    obj["imageWidth"] = labelShape[1]

    j = json.dumps(obj, sort_keys=True, indent=4)

    return j
