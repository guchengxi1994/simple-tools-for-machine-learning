import traceback
import xml.etree.ElementTree as ET
from mltools.src.log.logger import logger


def xml2createML(xmlPath):
    """this function is used to convert xml files (labelimg) to createML files (json)"""
    obj = dict()
    tree = ET.parse(xmlPath)
    root = tree.getroot()
    filename = root.find("filename").text
    entities = []
    try:
        for o in root.iter("object"):
            label = o.find("name").text
            bndbox = o.find("bndbox")
            xmin = bndbox.find("xmin").text
            xmax = bndbox.find("xmax").text
            ymin = bndbox.find("ymin").text
            ymax = bndbox.find("ymax").text

            x = 0.5 * (int(xmin) + int(xmax))
            y = 0.5 * (int(ymax) + int(ymin))
            width = int(xmax) - int(xmin)
            height = int(ymax) - int(ymin)
            entities.append(
                {
                    "label": label,
                    "coordinates": {"x": x, "y": y, "width": width, "height": height},
                }
            )
    except Exception:
        logger.error("=====    Exception     =====")
        traceback.print_exc()

    obj["image"] = filename
    obj["annotations"] = entities

    print(obj)
    return [obj]
