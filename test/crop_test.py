import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.crop import *
from skimage import io

img = io.imread("0.png")

result = polygonCrop(img,noise=True)
io.imsave("crop.jpg", result)