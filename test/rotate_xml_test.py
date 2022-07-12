import sys

sys.path.append("..")
from skimage import io
from mltools.src.augmentation.labelimg.xml_rotation import rotate_xml

img = io.imread("0.png")

print(rotate_xml(img, 45, 30, 80, 150, 30))
