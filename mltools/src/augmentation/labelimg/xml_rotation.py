import numpy as np
import math


def rotate_xml(src, xmin, ymin, xmax, ymax, angle):
    w = src.shape[1]
    h = src.shape[0]

    _radian = math.radians(angle)

    _mat = [
        [
            math.cos(_radian),
            math.sin(_radian),
            -math.sin(_radian) * h * 0.5 + (1 - math.cos(_radian)) * w * 0.5,
        ],
        [
            -math.sin(_radian),
            math.cos(_radian),
            (1 - math.cos(_radian)) * h * 0.5 + math.sin(_radian) * w * 0.5,
        ],
    ]

    _mat = np.array(_mat)

    # calculate the move from the old center to the new center combined
    # with the rotation
    rot_move = np.dot(_mat, np.array([(w - w) * 0.5, (h - h) * 0.5, 0]))
    # the move only affects the translation, so update the translation
    # part of the transform
    _mat[0, 2] += rot_move[0]
    _mat[1, 2] += rot_move[1]
    # _mat: the final rot matrix
    # get the four center of edges in the initial martix，and convert the coord
    point1 = np.dot(_mat, np.array([(xmin + xmax) / 2, ymin, 1]))
    point2 = np.dot(_mat, np.array([xmax, (ymin + ymax) / 2, 1]))
    point3 = np.dot(_mat, np.array([(xmin + xmax) / 2, ymax, 1]))
    point4 = np.dot(_mat, np.array([xmin, (ymin + ymax) / 2, 1]))
    # concat np.array
    concat = np.vstack((point1, point2, point3, point4))
    # change type
    concat = concat.astype(np.int32)
    concat0 = concat[:, 0]
    concat1 = concat[:, 1]

    _min0 = np.min(concat0)
    _max0 = np.max(concat0)
    _min1 = np.min(concat1)
    _max1 = np.max(concat1)

    rx, ry, rw, rh = (
        _min0,
        _min1,
        _max0 - _min0 + 1,
        _max1 - _min1 + 1,
    )

    return rx, ry, rw, rh
