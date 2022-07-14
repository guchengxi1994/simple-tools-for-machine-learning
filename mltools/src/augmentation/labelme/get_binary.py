import numpy as np
from skimage.color import rgb2gray
from skimage.measure import label, regionprops

# from skimage import  io


def get_binary(i: np.ndarray, minConnectedArea=20):
    if len(i.shape) == 3:
        img_gray = rgb2gray(i)
        img_gray = img_gray * 255
    else:
        img_gray = i

    if np.min(img_gray) < 127:
        img_gray[img_gray > 0] = 255
    else:
        img_gray[img_gray > 127] = 255
        img_gray[img_gray != 255] = 0

    # io.imsave("dddd.jpg",img_gray)

    img_bin = img_gray
    label_img = label(img_bin, connectivity=2, background=0)

    props = regionprops(label_img)
    for p in props:
        # 去除面积小于 `minConnectedArea` 的连通域
        if p.area < minConnectedArea:
            label_img[label_img == p.label] = 0

    label_img[label_img != 0] = 1

    label_img = np.array(img_bin * label_img).astype(np.uint8)
    # io.imsave("dddd.jpg",label_img)
    return img_bin
