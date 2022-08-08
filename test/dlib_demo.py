import sys

sys.path.append("..")

from skimage import io

img = io.imread("0.png")

from mltools_extra.dlib import find_face_with_dlib, render_face_with_dlib

i = find_face_with_dlib(img)
io.imsave("dlib.jpg", i)

i2 = render_face_with_dlib(img)
io.imsave("dlib2.jpg", i2)
