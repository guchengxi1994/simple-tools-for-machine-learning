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

  // @Deprecated("use `LabelImgAnnotationController.whenScaleChanged` instead")
  // whenScaleChanged(double scale) {
  //   debugPrint("[scale]:$scale");
  //   if (boxes.isEmpty) {
  //     _lastScale = scale;
  //     return;
  //   }
  //   for (final box in boxes) {
  //     if (box.rectKey.currentState != null) {
  //       box.rectKey.currentState!.changeScale(scale / _lastScale);
  //     }
  //   }
  //   _lastScale = scale;
  // }

  removeWidget(Widget w) {
    boardWidgets.remove(w);
    notifyListeners();
  }
}
