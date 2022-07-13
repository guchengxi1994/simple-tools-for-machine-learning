import sys

sys.path.append("..")
from mltools.src.augmentation.nolabel.optional.mosaic import *
from skimage import io

img = io.imread("0.png")

result = mosaic_img([img])
io.imsave("mosaic.jpg", result)

result2, _, _, _ = mosaic_img_no_reshape(
    [img, img, img, img], heightFactor=0.6, widthFactor=0.3
)
io.imsave("mosaic2.jpg", result2)
