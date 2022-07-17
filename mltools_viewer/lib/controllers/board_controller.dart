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

class BoardController extends ChangeNotifier {
  List<Widget> boardWidgets = [];
  List<RectBox> boxes = [];

  double _lastScale = 1.0;

  addWidget(Widget w) {
    boardWidgets.add(w);
    if (w is RectBox) {
      boxes.add(w);
    }
    notifyListeners();
  }

  whenScaleChanged(double scale) {
    debugPrint("[scale]:$scale");
    if (boxes.isEmpty) {
      _lastScale = scale;
      return;
    }
    for (final box in boxes) {
      if (box.rectKey.currentState != null) {
        box.rectKey.currentState!.changeScale(scale / _lastScale);
      }
    }
    _lastScale = scale;
  }

  removeWidget(Widget w) {
    boardWidgets.remove(w);
    notifyListeners();
  }
}
