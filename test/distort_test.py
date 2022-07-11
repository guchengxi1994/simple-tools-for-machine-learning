import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.distort import img_distort
from skimage import io

img = io.imread("0.png")
result = img_distort(img)
io.imsave("distort.jpg", result)
