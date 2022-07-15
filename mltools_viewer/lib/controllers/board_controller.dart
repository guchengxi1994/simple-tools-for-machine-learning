import 'package:flutter/material.dart';

class BoardController extends ChangeNotifier {
  List<Widget> boardWidgets = [];

  addWidget(Widget w) {
    boardWidgets.add(w);
    notifyListeners();
  }

  removeWidget(Widget w) {
    boardWidgets.remove(w);
    notifyListeners();
  }
}
