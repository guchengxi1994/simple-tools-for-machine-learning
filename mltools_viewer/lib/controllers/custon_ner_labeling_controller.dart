import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/extensions.dart';

class CustomNerLabelingController extends ChangeNotifier {
  List<String> classNames = [];

  addClassName(String s) {
    classNames.append(s);
    notifyListeners();
  }

  removeClassName(String s) {
    classNames.remove(s);
    notifyListeners();
  }
}
