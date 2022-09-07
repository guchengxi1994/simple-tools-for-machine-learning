import json
import os
import traceback
from mltools.src.log.logger import logger
from mltools.src.utils.json2mask.third_party import *
from mltools.src.utils.json2mask.third_party_draw import *
import yaml


def convert_json_to_mask(jsonPath: str, saveFile: bool = True):
    parent_path = os.path.dirname(jsonPath) + os.sep
    try:
        data = json.load(open(jsonPath, encoding="utf-8"))
        img = img_b64_to_arr(data["imageData"])
        lbl, lbl_names = labelme_shapes_to_label(img.shape, data["shapes"])
        captions = ["%d: %s" % (l, name) for l, name in enumerate(lbl_names)]
        lbl_viz = draw_label(lbl, img, captions)

        # if np.max(lbl) == 255 or np.max(lbl) == 1:
        lbl[lbl > 0] = 255

        lbl = np.array(lbl, dtype=np.uint8)
        if saveFile:
            out_dir = os.path.basename(jsonPath).split(".json")[0]
            save_file_name = out_dir
            if not os.path.exists(parent_path + "mask"):
                os.mkdir(parent_path + "mask")
            maskdir = parent_path + "mask"
            if not os.path.exists(parent_path + "mask_viz"):
                os.mkdir(parent_path + "mask_viz")
            maskvizdir = parent_path + "mask_viz"
            out_dir1 = maskdir
            PIL.Image.fromarray(lbl).save(out_dir1 + os.sep + save_file_name + ".png")
            PIL.Image.fromarray(lbl_viz).save(
                maskvizdir + os.sep + save_file_name + "_label_viz.png"
            )
            with open(osp.join(out_dir1, "label_names.txt"), "w") as f:
                for lbl_name in lbl_names:
                    f.write(lbl_name + "\n")

            info = dict(label_names=lbl_names)
            with open(osp.join(out_dir1, "info.yaml"), "w") as f:
                yaml.safe_dump(info, f, default_flow_style=False)

            logger.info("Saved to: %s" % out_dir1)

        else:
            return lbl

    except:
        logger.error("=====    Exception     =====")
        traceback.print_exc()
