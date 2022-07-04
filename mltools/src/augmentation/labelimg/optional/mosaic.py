import copy
import datetime
import os
import random
import skimage
from mltools.src.log.logger import logger
from mltools.src.augmentation.nolabel.optional.mosaic import mosiac_img_no_reshape
from mltools.src.utils.img2xml.multi_object_process import img2xml_multiobj
from .resize import resizeScript

try:
    import defusedxml.ElementTree as ET
except:
    import xml.etree.ElementTree as ET
from xml.etree.ElementTree import Element


def getName(xmls: list):
    s = str(datetime.datetime.now())
    for i in xmls:
        s += i
    return str(abs(hash(s)))


def mosiacScript_no_reshape(imgs: list, xmls: list, savePath: str, flag=False):
    heightFactor = random.uniform(0.1, 0.5)
    widthFactor = random.uniform(0.1, 0.5)

    img1, img2, img3, img4 = imgs[0], imgs[1], imgs[2], imgs[3]

    if not type(imgs) is list or not type(xmls) is list:
        logger.error('Input must be list!')
        return

    imgname = getName(xmls)
    folder = savePath
    mosiacImg, res, _, _ = mosiac_img_no_reshape(imgs, heightFactor,
                                                 widthFactor)
    front = res[0]

    heightFactor = min(heightFactor, 1 - heightFactor)
    widthFactor = min(widthFactor, 1 - widthFactor)

    tree1 = ET.parse(xmls[0])
    tree2 = resizeScript(img2,
                         xmls[1],
                         heightFactor=img1.shape[0] / img2.shape[0],
                         widthFactor=img1.shape[1] / img2.shape[1],
                         flag=False)

    tree3 = resizeScript(img3,
                         xmls[2],
                         heightFactor=img1.shape[0] / img3.shape[0],
                         widthFactor=img1.shape[1] / img3.shape[1],
                         flag=False)

    tree4 = resizeScript(img4,
                         xmls[3],
                         heightFactor=img1.shape[0] / img4.shape[0],
                         widthFactor=img1.shape[1] / img4.shape[1],
                         flag=False)

    root1 = tree1.getroot()
    root2 = tree2.getroot()
    for box in root2.iter('bndbox'):
        xmin = float(box.find('xmin').text)
        ymin = float(box.find('ymin').text)
        xmax = float(box.find('xmax').text)
        ymax = float(box.find('ymax').text)
        box.find('xmin').text = str(
            int(xmin + widthFactor * mosiacImg.shape[1]))
        box.find('xmax').text = str(
            int(xmax + widthFactor * mosiacImg.shape[1]))

    root3 = tree3.getroot()
    for box in root3.iter('bndbox'):
        xmin = float(box.find('xmin').text)
        ymin = float(box.find('ymin').text)
        xmax = float(box.find('xmax').text)
        ymax = float(box.find('ymax').text)
        box.find('ymin').text = str(
            int(ymin + heightFactor * mosiacImg.shape[0]))
        box.find('ymax').text = str(
            int(ymax + heightFactor * mosiacImg.shape[0]))

    root4 = tree4.getroot()
    for box in root4.iter('bndbox'):
        xmin = float(box.find('xmin').text)
        ymin = float(box.find('ymin').text)
        xmax = float(box.find('xmax').text)
        ymax = float(box.find('ymax').text)
        box.find('xmin').text = str(
            int(xmin + widthFactor * mosiacImg.shape[1]))
        box.find('xmax').text = str(
            int(xmax + widthFactor * mosiacImg.shape[1]))
        box.find('ymin').text = str(
            int(ymin + heightFactor * mosiacImg.shape[0]))
        box.find('ymax').text = str(
            int(ymax + heightFactor * mosiacImg.shape[0]))
    boxes = []

    r1, r2, r3, r4 = getBoxes(front,
                              root1,
                              root2,
                              root3,
                              root4,
                              mosiacImg.shape,
                              heightFactor=heightFactor,
                              widthFactor=widthFactor)

    for box in r1.iter('object'):
        boxes.append(box)

    for box in r2.iter('object'):
        boxes.append(box)

    for box in r3.iter('object'):
        boxes.append(box)

    for box in r4.iter('object'):
        boxes.append(box)
    # print(len(boxes))
    imgshape = mosiacImg.shape
    objs = []
    for o in boxes:
        obj = dict()
        name = o.find('name').text
        difficult = 0
        xmlbox = o.find('bndbox')
        b = (float(xmlbox.find('xmin').text), float(xmlbox.find('xmax').text),
             float(xmlbox.find('ymin').text), float(xmlbox.find('ymax').text))
        tmp = dict()
        tmp['xmin'] = str(int(b[0]))
        tmp['ymin'] = str(int(b[2]))
        tmp['xmax'] = str(int(b[1]))
        tmp['ymax'] = str(int(b[3]))
        # print(tmp)
        if not (int(tmp['xmin']) == 0 and int(tmp['xmax']) == 0
                and int(tmp['ymin']) == 0 and int(tmp['ymax']) == 0):
            obj['name'] = name
            obj['difficult'] = difficult
            obj['bndbox'] = tmp
            objs.append(obj)
        del tmp
    # print(len(objs))
    tmpPath = savePath + os.sep + imgname + '.xml'
    filepath = tmpPath.replace('.xml', '.jpg')
    filename = imgname + '.jpg'
    img2xml_multiobj(tmpPath, tmpPath, folder, filename, filepath, imgshape[1],
                     imgshape[0], objs)

    logger.info('Saved to {}.'.format(tmpPath))

    if flag:
        skimage.io.imsave(filepath, mosiacImg)


def getBoxes(front: int, root1: Element, root2: Element, root3: Element,
             root4: Element, imgShape: tuple, heightFactor: float,
             widthFactor: float):
    root1_ = copy.deepcopy(root1)
    root2_ = copy.deepcopy(root2)
    root3_ = copy.deepcopy(root3)
    root4_ = copy.deepcopy(root4)

    if front == 1:
        # 1

        # 2
        for o in root2_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            # if ymin >= heightFactor * imgShape[0] or xmax <= imgShape[1] * (
            #         1 - widthFactor):
            if xmax <= imgShape[1] * (1 - widthFactor):
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)

            else:
                # if ymin < heightFactor * imgShape[0]:
                #     if ymax > heightFactor * imgShape[0]:
                #         box.find('ymax').text = str(int(heightFactor *
                #                                         imgShape[0]))

                if xmax > imgShape[1] * (1 - widthFactor):
                    if xmin < imgShape[1] * (1 - widthFactor):
                        box.find('xmin').text = str(
                            int(imgShape[1] * (1 - widthFactor)))

        # 3
        for o in root3_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)
            # if ymax <= (1-heightFactor) * imgShape[
            #         0] or xmin >= widthFactor * imgShape[1]:
            if ymax <= (1 - heightFactor) * imgShape[0]:
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)
            else:
                if ymax > imgShape[0] * (1 - heightFactor):
                    if ymin < imgShape[0] * (1 - heightFactor):
                        box.find('ymin').text = str(
                            int(imgShape[0] * (1 - heightFactor)))

                # if xmin < widthFactor * imgShape[1]:
                #     if xmax > widthFactor * imgShape[1]:
                #         box.find('xmax').text = str(int(widthFactor * imgShape[1]))

        # 4
        for o in root4_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            if xmax <= imgShape[1] * (1 - widthFactor) or ymax <= imgShape[
                    0] * (1 - heightFactor):
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)
            else:
                if ymax > imgShape[0] * (1 - heightFactor):
                    if ymin < imgShape[0] * (1 - heightFactor):
                        box.find('ymin').text = str(
                            int(imgShape[0] * (1 - heightFactor)))

                if xmax > imgShape[1] * (1 - widthFactor):
                    if xmin < imgShape[1] * (1 - widthFactor):
                        box.find('xmin').text = str(
                            int(imgShape[1] * (1 - widthFactor)))

    if front == 2:
        # 1
        for o in root1_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            if ymin >= (1 - heightFactor
                        ) * imgShape[0] or xmin >= widthFactor * imgShape[1]:

                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)

            else:
                if ymin < (1 - heightFactor) * imgShape[0]:
                    if ymax > (1 - heightFactor) * imgShape[0]:
                        box.find('ymax').text = str(
                            int((1 - heightFactor) * imgShape[0]))

                if xmin < widthFactor * imgShape[1]:
                    if xmax > widthFactor * imgShape[1]:
                        box.find('xmax').text = str(
                            int(widthFactor * imgShape[1]))

        # 2

        # 3
        for o in root3_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)
            # if ymax <= (1-heightFactor) * imgShape[
            #         0] or xmin >= widthFactor * imgShape[1]:
            if ymax <= (1 - heightFactor) * imgShape[0]:
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)
            else:
                if ymax > imgShape[0] * (1 - heightFactor):
                    if ymin < imgShape[0] * (1 - heightFactor):
                        box.find('ymin').text = str(
                            int(imgShape[0] * (1 - heightFactor)))

                # if xmin < widthFactor * imgShape[1]:
                #     if xmax > widthFactor * imgShape[1]:
                #         box.find('xmax').text = str(int(widthFactor * imgShape[1]))

        # 4
        for o in root4_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            if xmax <= imgShape[1] * (1 - widthFactor) or ymax <= imgShape[
                    0] * (1 - heightFactor):
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)
            else:
                if ymax > imgShape[0] * (1 - heightFactor):
                    if ymin < imgShape[0] * (1 - heightFactor):
                        box.find('ymin').text = str(
                            int(imgShape[0] * (1 - heightFactor)))

                if xmax > imgShape[1] * (1 - widthFactor):
                    if xmin < imgShape[1] * (1 - widthFactor):
                        box.find('xmin').text = str(
                            int(imgShape[1] * (1 - widthFactor)))

    if front == 3:
        # 1
        for o in root1_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            if ymin >= heightFactor * imgShape[0] or xmin >= (
                    1 - widthFactor) * imgShape[1]:

                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)

            else:
                if ymin < heightFactor * imgShape[0]:
                    if ymax > heightFactor * imgShape[0]:
                        box.find('ymax').text = str(
                            int(heightFactor * imgShape[0]))

                if xmin < widthFactor * (1 - imgShape[1]):
                    if xmax > widthFactor * (1 - imgShape[1]):
                        box.find('xmax').text = str(
                            int(widthFactor * (1 - imgShape[1])))

        # 2
        for o in root2_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            # if ymin >= heightFactor * imgShape[0] or xmax <= imgShape[1] * (
            #         1 - widthFactor):
            if xmax <= imgShape[1] * (1 - widthFactor):
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)

            else:
                # if ymin < heightFactor * imgShape[0]:
                #     if ymax > heightFactor * imgShape[0]:
                #         box.find('ymax').text = str(int(heightFactor *
                #                                         imgShape[0]))

                if xmax > imgShape[1] * (1 - widthFactor):
                    if xmin < imgShape[1] * (1 - widthFactor):
                        box.find('xmin').text = str(
                            int(imgShape[1] * (1 - widthFactor)))

        # 3

        # 4
        for o in root4_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            if xmax <= imgShape[1] * (1 - widthFactor) or ymax <= imgShape[
                    0] * (1 - heightFactor):
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)
            else:
                if ymax > imgShape[0] * (1 - heightFactor):
                    if ymin < imgShape[0] * (1 - heightFactor):
                        box.find('ymin').text = str(
                            int(imgShape[0] * (1 - heightFactor)))

                if xmax > imgShape[1] * (1 - widthFactor):
                    if xmin < imgShape[1] * (1 - widthFactor):
                        box.find('xmin').text = str(
                            int(imgShape[1] * (1 - widthFactor)))

    if front == 4:
        # 1
        for o in root1_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            if ymin >= heightFactor * imgShape[
                    0] or xmin >= widthFactor * imgShape[1]:

                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)

            else:
                if ymin < heightFactor * imgShape[0]:
                    if ymax > heightFactor * imgShape[0]:
                        box.find('ymax').text = str(
                            int(heightFactor * imgShape[0]))

                if xmin < widthFactor * imgShape[1]:
                    if xmax > widthFactor * imgShape[1]:
                        box.find('xmax').text = str(
                            int(widthFactor * imgShape[1]))

        # 2
        for o in root2_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)

            # if ymin >= heightFactor * imgShape[0] or xmax <= imgShape[1] * (
            #         1 - widthFactor):
            if xmax <= imgShape[
                    1] * widthFactor or ymin >= heightFactor * imgShape[0]:
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)

            else:
                if ymin < heightFactor * imgShape[0]:
                    if ymax > heightFactor * imgShape[0]:
                        box.find('ymax').text = str(
                            int(heightFactor * imgShape[0]))

                if xmax > imgShape[1] * widthFactor:
                    if xmin < imgShape[1] * widthFactor:
                        box.find('xmin').text = str(
                            int(imgShape[1] * widthFactor))

        # 3
        for o in root3_.iter('object'):
            box = o.find('bndbox')
            xmin = float(box.find('xmin').text)
            ymin = float(box.find('ymin').text)
            xmax = float(box.find('xmax').text)
            ymax = float(box.find('ymax').text)
            # if ymax <= (1-heightFactor) * imgShape[
            #         0] or xmin >= widthFactor * imgShape[1]:
            if ymax <= heightFactor * imgShape[
                    0] or xmin >= widthFactor * imgShape[1]:
                box.find('xmin').text = str(0)
                box.find('xmax').text = str(0)
                box.find('ymin').text = str(0)
                box.find('ymax').text = str(0)
            else:
                if ymax > imgShape[0] * heightFactor:
                    if ymin < imgShape[0] * heightFactor:
                        box.find('ymin').text = str(
                            int(imgShape[0] * heightFactor))

                if xmin < widthFactor * imgShape[1]:
                    if xmax > widthFactor * imgShape[1]:
                        box.find('xmax').text = str(
                            int(widthFactor * imgShape[1]))

        # 4

    return root1_, root2_, root3_, root4_