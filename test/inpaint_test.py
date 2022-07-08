import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.inpaint import (
    rectangleInpaint,
    polygonInpaint,
)

from skimage import io
from skimage.transform import resize

img = io.imread("0.png")

img = resize(img, (256, 256), preserve_range=True)

res1 = rectangleInpaint(img)
io.imsave("inpaint1.jpg", res1)

res2 = polygonInpaint(img)
io.imsave("inpaint2.jpg", res2)
