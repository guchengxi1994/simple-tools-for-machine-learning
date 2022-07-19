import 'package:flutter/material.dart';
import 'package:mltools_viewer/widgets/labelme/polygon_point.dart'
    show PolygonEntity, PolygonPoint, PolygonPointState;

class LabelImgAnnotationDetails {
  String? className;
  int? xmin;
  int? xmax;
  int? ymin;
  int? ymax;
  int id;

  /// if not enable,
  /// will not be added to
  /// xml files
  bool enabled;
  bool visible;
  LabelImgAnnotationDetails(
      {required this.id,
      this.className,
      this.xmax,
      this.xmin,
      this.ymax,
      this.ymin,
      this.enabled = true,
      this.visible = true});
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

class LabelmeAnnotationController extends ChangeNotifier {
  List<PolygonEntity> polygons = [];
  addPolygon(PolygonEntity p) {
    polygons.add(p);
    notifyListeners();
  }

  addPoint(PolygonPoint point, GlobalKey<PolygonPointState> key) {
    polygons.last.pList.add(point);
    polygons.last.keyList.add(key);

    notifyListeners();
  }
}
