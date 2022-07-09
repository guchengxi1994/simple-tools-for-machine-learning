import numpy as np
import math


def rotate_xml(src, xmin, ymin, xmax, ymax, angle, scale=1.0):
    w = src.shape[1]
    h = src.shape[0]
    rangle = np.deg2rad(angle)  # angle in radians
    # now calculate new image width and height
    # get width and heigh of changed image
    nw = (abs(np.sin(rangle) * h) + abs(np.cos(rangle) * w)) * scale
    nh = (abs(np.cos(rangle) * h) + abs(np.sin(rangle) * w)) * scale

    _radian = math.radians(angle)

    _mat = [
        [
            math.cos(_radian),
            math.sin(_radian),
            -math.sin(_radian) * nh * 0.5 + (1 - math.cos(_radian)) * nw * 0.5,
        ],
        [
            -math.sin(_radian),
            math.cos(_radian),
            (1 - math.cos(_radian)) * nh * 0.5 + math.sin(_radian) * nw * 0.5,
        ],
    ]

    _mat = np.array(_mat)

    # calculate the move from the old center to the new center combined
    # with the rotation
    rot_move = np.dot(_mat, np.array([(nw - w) * 0.5, (nh - h) * 0.5, 0]))
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
    return (
        concat[0][0],
        concat[0][1],
        concat[2][0] - concat[0][0] + 1,
        concat[2][1] - concat[0][1] + 1,
    )
