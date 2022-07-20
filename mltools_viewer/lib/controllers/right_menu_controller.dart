import 'package:flutter/material.dart';

/// [RightMenuController] provide of end side menu
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
