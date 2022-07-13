import json
import os
import PIL.Image

import numpy as np
import yaml
from mltools.src.log.logger import logger
import traceback
from skimage.draw import polygon as spolygon
from mltools.src.utils.json2mask.third_party import *
from mltools.src.utils.json2mask.third_party_draw import *

from mltools.src.utils.labels2yaml import labels2yaml


def convert_json_to_mask_with_label(jsonPath, yamlPath, saveFile: bool = True):
    parent_path = os.path.dirname(jsonPath) + os.sep
    try:
        data = json.load(open(jsonPath, encoding="utf-8"))
        img = img_b64_to_arr(data["imageData"])
        mask = generate_mask_file(data, yamlPath)
        res = mask.copy()

        if saveFile:
            lbl_names = get_yaml_keys(yamlPath)
            captions = []
            for k, v in lbl_names.items():
                captions.append("{}:{}".format(v, k))
            lbl_viz = draw_label(mask, img, captions)
            out_dir = os.path.basename(jsonPath).split(".json")[0]
            save_file_name = out_dir

            if not os.path.exists(parent_path + "masks_"):
                os.mkdir(parent_path + "masks_")

            if not os.path.exists(parent_path + "masks_" + os.sep + "mask"):
                os.mkdir(parent_path + "masks_" + os.sep + "mask")
            maskdir = parent_path + "masks_" + os.sep + "mask"

            if not os.path.exists(parent_path + "masks_" + os.sep + "mask_viz"):
                os.mkdir(parent_path + "masks_" + os.sep + "mask_viz")
            maskvizdir = parent_path + "masks_" + os.sep + "mask_viz"

            out_dir1 = maskdir
            PIL.Image.fromarray(mask).save(out_dir1 + "/" + save_file_name + ".png")
            PIL.Image.fromarray(lbl_viz).save(
                maskvizdir + "/" + save_file_name + "_label_viz.png"
            )

            with open(os.path.join(out_dir1, "label_names.txt"), "w") as f:
                for lbl_name in lbl_names:
                    f.write(lbl_name + "\n")

            info = dict(label_names=lbl_names)
            with open(os.path.join(out_dir1, "info.yaml"), "w") as f:
                yaml.safe_dump(info, f, default_flow_style=False)
            logger.info("Saved to " + parent_path + "masks_")
        else:
            return res
    except:
        logger.error("=====    Exception     =====")
        traceback.print_exc()


def generate_mask_file(data, yamlFile):
    imageHeight = data["imageHeight"]
    imageWidth = data["imageWidth"]
    mask = np.zeros((imageHeight, imageWidth)).astype(np.uint8)
    yamlInfomation = read_yaml_file(yamlFile)
    print(yamlInfomation)
    try:
        shapes = data["shapes"]
        # print(shapes)
        for i in shapes:
            k = i["label"]
            # print(k)
            v = read_yaml_file_vals(yamlInfomation, k)
            # print(v)
            polygon = i["points"]
            if v != 0:
                # print('lllllllllllllllllll')
                mask = draw_mask(polygon, mask, int(v))
        # print("<==================>".format(np.max(mask)))
        return mask

    except Exception as e:
        logger.error(e)


def read_yaml_file(yamlFile):
    if isinstance(yamlFile, str) and os.path.exists(yamlFile):
        if yamlFile.endswith(".yaml"):
            f = open(yamlFile, "r", encoding="utf-8")
            # x = yaml.load(f.read(), Loader=yaml.FullLoader)
            x = yaml.safe_load(f.read())
            try:
                res = x["label_names"]
                return res
            except:
                return None
            finally:
                f.close()
        elif yamlFile.endswith(".txt"):
            with open(yamlFile, "r", encoding="utf-8") as f:
                classList = f.readlines()
            res = labels2yaml(classList, savefile=False)
            return res["label_names"]

    elif isinstance(yamlFile, dict):
        try:
            res = yamlFile["label_names"]
            return res
        except:
            return None
    else:
        logger.error(
            'input type error. must be a .txt file or .yaml file or a dict like \{"label_names":["classA":1,...,"classN":10]\}'
        )


def read_yaml_file_vals(classInfomation: dict, k: str):
    return classInfomation.get(k, 0)


def draw_mask(polygon, mask: np.ndarray, val: int):
    area = np.array(polygon, dtype=np.int32)
    rr, cc = spolygon(area[:, 1], area[:, 0])
    mask[rr, cc] = val
    mask = np.array(mask, dtype=np.uint8)
    return mask


def get_yaml_keys(yamlFile):
    f = open(yamlFile, "r", encoding="utf-8")
    if yamlFile.endswith(".yaml"):
        # x = yaml.load(f.read(), Loader=yaml.FullLoader)
        x = yaml.safe_load(f.read())
        f.close()
        return x["label_names"]
    else:
        lis = f.readlines()
        f.close()
        return labels2yaml(lis, savefile=False)["label_names"]
