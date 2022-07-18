import 'package:flutter/material.dart';

class LabelImgAnnotationDetails {
  String? className;
  int? xmin;
  int? xmax;
  int? ymin;
  int? ymax;
  int id;
  bool enabled;
  LabelImgAnnotationDetails(
      {required this.id,
      this.className,
      this.xmax,
      this.xmin,
      this.ymax,
      this.ymin,
      this.enabled = true});
}

class LabelImgAnnotationController extends ChangeNotifier {
  List<String> savedClassNames = [];
  addClassNames(String s) {
    if (s != "" && !savedClassNames.contains(s)) {
      savedClassNames.add(s);
      notifyListeners();
    }
  }
}
