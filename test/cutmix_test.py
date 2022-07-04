import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.cutmix import cutmix

from skimage import io

img = io.imread("0.png")
img1 = io.imread("3.png")

result = cutmix(img, img1)
io.imsave("cutmix.jpg", result)