import os
import dlib
import numpy as np
import cv2
import copy

thisFilePath = os.path.abspath(__file__)

predictorPath = thisFilePath.replace("dlib.py", "shape_predictor_68_face_landmarks.dat")
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(predictorPath)


def find_face_with_dlib(imgData: np.ndarray):
    _imgData = copy.deepcopy(imgData)
    faces = detector(_imgData, 1)
    for i in faces:
        cv2.rectangle(
            _imgData, (i.left(), i.top()), (i.right(), i.bottom()), (255, 255, 255), 2
        )

    return _imgData


def render_face_with_dlib(imgData: np.ndarray):
    _imgData = copy.deepcopy(imgData)
    faces = detector(_imgData, 1)
    _color = [255, 255, 255]
    for i, _ in enumerate(faces):
        shape = predictor(_imgData, faces[i])
        for i in range(1, 18):  # 脸颊
            d = shape.parts()[i - 1]
            _imgData[d.y, d.x] = _color

            if i > 1:
                _d = shape.parts()[i - 2]
                cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)

        for i in range(18, 23):  # 左边眉毛
            d = shape.parts()[i - 1]
            _imgData[d.y, d.x] = _color

            if i > 18:
                _d = shape.parts()[i - 2]
                cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)

        for i in range(23, 28):  # 右边眉毛
            d = shape.parts()[i - 1]
            _imgData[d.y, d.x] = _color

            if i > 23:
                _d = shape.parts()[i - 2]
                cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)

        for i in range(28, 37):  # 鼻子
            d = shape.parts()[i - 1]
            _imgData[d.y, d.x] = _color

            if i > 28:
                _d = shape.parts()[i - 2]
                cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)
                if i == 36:
                    _d = shape.parts()[31 - 1]
                    cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)

        for i in range(37, 43):  # 左边眼睛
            d = shape.parts()[i - 1]
            _imgData[d.y, d.x] = _color

            if i > 37:
                _d = shape.parts()[i - 2]
                cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)
                if i == 42:
                    _d = shape.parts()[37 - 1]
                    cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)

        for i in range(43, 49):  # 左边眼睛
            d = shape.parts()[i - 1]
            _imgData[d.y, d.x] = _color

            if i > 43:
                _d = shape.parts()[i - 2]
                cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)
                if i == 48:
                    _d = shape.parts()[43 - 1]
                    cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)

        for i in range(49, 61):  # 外嘴唇
            d = shape.parts()[i - 1]
            _imgData[d.y, d.x] = _color

            if i > 49:

                _d = shape.parts()[i - 2]
                cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)
                if i == 60:
                    _d = shape.parts()[49 - 1]
                    cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)

        for i in range(61, 69):  # 内嘴唇
            d = shape.parts()[i - 1]
            _imgData[d.y, d.x] = _color

            if i > 61:
                _d = shape.parts()[i - 2]
                cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)
                if i == 68:
                    _d = shape.parts()[61 - 1]
                    cv2.line(_imgData, (d.x, d.y), (_d.x, _d.y), _color, 3)

    return _imgData
