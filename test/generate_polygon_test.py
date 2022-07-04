import sys

sys.path.append("..")
from mltools.src.utils.generate_polygon import generatePolygon, generateRectangle
from skimage import io

mask = generatePolygon((255, 255), polygonPointCount=3)
mask2 = generateRectangle((255, 255, 3))

mask3 = generatePolygon((255, 255), polygonPointCount=12,convexHull=True)

io.imsave("polygon.jpg", mask)
io.imsave("rectangle.jpg", mask2)
io.imsave("convex.jpg", mask3)
