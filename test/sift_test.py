import sys

sys.path.append("..")
from skimage import io

from mltools.src.utils.sift import sift

img = io.imread("0.png")
img2 = io.imread("3.png")
print(sift(img, img2))
