import 'package:flutter/material.dart';
import 'package:mltools_viewer/widgets/labelme/polygon_point.dart'
    show PolygonEntity, PolygonPoint, PolygonPointState;

class LabelImgAnnotationDetails {
  String className;
  String imageName;
  double xmin;
  double xmax;
  double ymin;
  double ymax;
  int id;

  /// if not enable,
  /// will not be added to
  /// xml files
  bool enabled;
  bool visible;
  double scale;
  LabelImgAnnotationDetails(
      {required this.id,
      required this.imageName,
      this.className = "",
      this.xmax = 100,
      this.xmin = 0,
      this.ymax = 100,
      this.ymin = 0,
      this.enabled = true,
      this.visible = true,
      this.scale = 1.0});
}

/// rect annotation details
class LabelImgAnnotationController extends ChangeNotifier {
  List<String> savedClassNames = [];
  addClassNames(String s) {
    if (s != "" && !savedClassNames.contains(s)) {
      savedClassNames.add(s);
      notifyListeners();
    }
  }

  double _lastScale = 1.0;

  changeLabelName(int index, String labelName) {
    details[index].className = labelName;
    notifyListeners();
  }

  whenScaleChanged(double scale) {
    debugPrint("[scale]:$scale");
    if (details.isEmpty) {
      _lastScale = scale;
      return;
    }
    for (final i in details) {
      i.xmin = scale / _lastScale * i.xmin;
      i.xmax = scale / _lastScale * i.xmax;
      i.ymin = scale / _lastScale * i.ymin;
      i.ymax = scale / _lastScale * i.ymax;
      i.scale = scale;
    }
    _lastScale = scale;
    notifyListeners();
  }

  changeBndBoxPosition(int index, DragUpdateDetails d) {
    details[index].xmin += d.delta.dx;
    details[index].ymin += d.delta.dy;
    details[index].xmax += d.delta.dx;
    details[index].ymax += d.delta.dy;

    if (details[index].xmin < 0) {
      details[index].xmin = 0;
    }

    if (details[index].ymin < 0) {
      details[index].ymin = 0;
    }
    notifyListeners();
  }

  changeBndBoxByRightBottomPosition(int index, DragUpdateDetails d) {
    details[index].xmax += d.delta.dx;
    details[index].ymax += d.delta.dy;
    notifyListeners();
  }

  changeBndBoxByLeftTopPosition(int index, DragUpdateDetails d) {
    details[index].xmin += d.delta.dx;
    details[index].ymin += d.delta.dy;

    if (details[index].xmin < 0) {
      details[index].xmin = 0;
    }

    if (details[index].ymin < 0) {
      details[index].ymin = 0;
    }
    notifyListeners();
  }

  changeBndBoxByRightTopPosition(int index, DragUpdateDetails d) {
    details[index].xmax += d.delta.dx;
    details[index].ymin += d.delta.dy;

    if (details[index].ymin < 0) {
      details[index].ymin = 0;
    }
    notifyListeners();
  }

  changeBndBoxByLeftBottomPosition(int index, DragUpdateDetails d) {
    details[index].xmin += d.delta.dx;
    details[index].ymax += d.delta.dy;

    if (details[index].xmin < 0) {
      details[index].xmin = 0;
    }
    notifyListeners();
  }

  double getHeightById(int id) {
    return details[id].ymax - details[id].ymin;
  }

  double getWidthById(int id) {
    return details[id].xmax - details[id].xmin;
  }

  List<LabelImgAnnotationDetails> details = [];

  bool getStatusById(int index) {
    return details[index].visible && details[index].enabled;
  }

  LabelImgAnnotationDetails getDetailsById(int index) {
    return details[index];
  }

  addDetail(LabelImgAnnotationDetails d) {
    details.add(d);
    notifyListeners();
  }

  removeDetail(int index) {
    details[index].enabled = false;
    notifyListeners();
  }

  showAll() {
    for (final i in details) {
      i.visible = true;
    }
    notifyListeners();
  }

  hideAll() {
    for (final i in details) {
      i.visible = false;
    }
    notifyListeners();
  }
}

/// polygon annotation details
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
