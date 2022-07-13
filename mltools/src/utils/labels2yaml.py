import os

import yaml
from mltools.src.log.logger import logger


def labels2yaml(labels: list, savePath="", savefile=True):
    if "_background_" not in labels:
        labels.append("_background_")

    tmp = dict()
    tmp["_background_"] = 0
    classId = 1
    for i in range(0, len(labels)):
        x = labels[i].replace("\n", "").strip()
        if x != "_background_":
            tmp[x] = classId
            classId += 1
    data = dict()
    data["label_names"] = tmp
    del tmp

    if savefile:
        try:
            with open(savePath + os.sep + "info.yaml", "w", encoding="utf-8") as f:
                yaml.dump(data, f, allow_unicode=True)
            logger.info(
                "successfully convert labels to yaml, see {}".format(
                    savePath + os.sep + "info.yaml"
                )
            )
        except Exception as e:
            logger.error(e)

    return data
