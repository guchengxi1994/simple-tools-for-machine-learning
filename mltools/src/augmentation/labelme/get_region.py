import numpy as np
from skimage.measure import find_contours, approximate_polygon

# from skimage.draw import polygon
# from skimage import io
from mltools.src.log.logger import logger


def get_multi_region(img_bin):
    # _img = np.zeros(img_bin.shape)
    contours = find_contours(img_bin)
    # print(len(contours))
    regions = []
    if len(contours) > 0:
        for i in contours:
            coords = approximate_polygon(i, tolerance=2.5)
            # print(coords.shape[0])
            if coords.shape[0] > 3:
                regions.append(coords)
                # rr, cc = polygon(coords[:, 0], coords[:, 1], img_bin.shape)
                # _img[rr, cc] = 255

        # io.imsave("dddd.jpg", _img)
    else:
        logger.info("no contours find")

    return regions
