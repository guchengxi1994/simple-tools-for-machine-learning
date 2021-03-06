import os
import sys

sys.path.append("..")
from mltools.src.utils.generate_polygon import generate_polygon, generate_rectangle
from skimage import io


class TestGeneratePolygon:
    def test_generate_polygon(self):
        mask = generate_polygon((255, 255), polygonPointCount=3)
        mask2 = generate_rectangle((255, 255, 3))

        mask3 = generate_polygon((255, 255), polygonPointCount=12, convexHull=True)

        io.imsave("polygon.jpg", mask)
        io.imsave("rectangle.jpg", mask2)
        io.imsave("convex.jpg", mask3)
        assert os.path.exists("polygon.jpg")
        assert os.path.exists("rectangle.jpg")
        assert os.path.exists("convex.jpg")
