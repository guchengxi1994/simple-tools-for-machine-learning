import 'package:flutter/material.dart';

class RightMenuController extends ChangeNotifier {
  bool defaultLabelSelected = false;
  changeLabelSelectedStatus() {
    defaultLabelSelected = !defaultLabelSelected;
    notifyListeners();
  }

  String defaultLabelName = "";
  changeDefaultLabelName(String s) {
    defaultLabelName = s;
    notifyListeners();
  }
}
