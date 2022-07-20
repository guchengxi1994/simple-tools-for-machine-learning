/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-17 09:41:02
 */
import 'package:flutter/material.dart';
import 'package:mltools_viewer/widgets/labelimg/labelimg_widget.dart';

enum AnnotationType { /*labelImg*/ rect, /*labelme*/ polygon }

/// [BoardController] provider of workboard,
/// controls widgets on workboard.
/// including:
/// ------
/// [boardWidgets] : a list of widgets, display all widgets on the workboard
///
/// [boxes] : a list of [RectBoxV2], which stands for `labelImg-like` bndboxes
///
/// [annotationType] : enum, including `rect` and `polygon`
///
/// [changeAnnotationType] : change annotation type for next annotation, if it is rect,
/// switch it to polygon,
/// if it is polygon, switch it to rect
///
/// [addWidget] : add a widget to workboard, if it is [RectBoxV2], then add it to boxes too
///
/// [getRectBoxesByImageName] : when switch images, get image,bndboxes by image name
///
/// [removeWidget] : remove a widget from workboard
class BoardController extends ChangeNotifier {
  List<Widget> boardWidgets = [];
  List<RectBoxV2> boxes = [];
  AnnotationType annotationType = AnnotationType.rect;
  changeAnnotationType(AnnotationType t) {
    annotationType = t;
    notifyListeners();
  }

  int get currentLabelImgIndex =>
      boardWidgets.whereType<RectBoxV2>().toList().length;

  addWidget(Widget w) {
    boardWidgets.add(w);
    if (w is RectBoxV2) {
      boxes.add(w);
    }
    notifyListeners();
  }

  List<Widget> getRectBoxesByImageName(String imgName) {
    List<Widget> ws = [];
    for (final i in boardWidgets) {
      if (i is RectBoxV2) {
        if ((i).imageName == imgName) {
          ws.add(i);
        }
      } else {
        ws.add(i);
      }
    }
    return ws;
  }

  removeWidget(Widget w) {
    boardWidgets.remove(w);
    notifyListeners();
  }
}
