import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.distort import imgDistort
from skimage import io

img = io.imread("0.png")
result = imgDistort(img)
io.imsave("distort.jpg", result)
