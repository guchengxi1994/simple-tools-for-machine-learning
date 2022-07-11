import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.crop import *
from skimage import io

img = io.imread("0.png")

result = polygon_crop(img, noise=True)
io.imsave("crop.jpg", result)


result2 = multi_polygon_crop(img, noise=True)
io.imsave("crop2.jpg", result2)
