import 'package:flutter/material.dart';

/// [LabelImgAnnotationDetails]
///
/// [className] : string
///
/// [imageName] : string, on web, it is a string like `xxx.ext`,
/// on other platforms, it is a string like `xxx/xxx/xxx.ext`
///
/// [xmin] : double
///
/// [xmax] : double
///
/// [ymin] : double
///
/// [ymax] : double
///
/// (xmin,ymin) is the left-top point of the bndbox
///
/// (xmin,ymax) is the left-bottom point of the bndbox
///
/// (xmax,ymin) is the right-top point of the bndbox
///
/// (xmax,ymax) is the right-bottom point of the bndbox
///
/// [id] : int, the index of the bndbox
///
/// [enabled] : bool, if false, this bndbox will not be displayed on the board
/// and will not be saved
///
/// [visible] : bool, if false, this bndbox will not be displayed on the board
///
/// [scale] : double, the scale of the image
class LabelImgAnnotationDetails {
  String className;
  String imageName;
  double xmin;
  double xmax;
  double ymin;
  double ymax;
  int id;
  bool enabled;
  bool visible;
  double scale;
  LabelImgAnnotationDetails(
      {required this.id,
      required this.imageName,
      this.className = "未定义",
      this.xmax = 100,
      this.xmin = 0,
      this.ymax = 100,
      this.ymin = 0,
      this.enabled = true,
      this.visible = true,
      this.scale = 1.0});
}

/// [LabelImgAnnotationController] provider of labelImg-like annotations
/// including:
/// ------
/// [changeLabelName] change annotation name by id
///
/// [whenScaleChanged] change annotation position, size when [scale] changed
///
/// [changeBndBoxPosition] change annotation position when dragging bndbox by id
///
/// [changeBndBoxByRightBottomPosition] change annotation when dragging `right-bottom` point by id
///
/// [changeBndBoxByLeftTopPosition] change annotation when dragging `left-top` point by id
///
/// [changeBndBoxByRightTopPosition] change annotation when dragging `right-top` point by id
///
/// [getHeightById] get a bndbox height by id
///
/// [getWidthById] get a bndbox width by id
///
/// [details] : a list of  [LabelImgAnnotationDetails]
///
/// [getStatusById] get a bndbox `enabled && visible` by id
///
/// [getDetailsById] get [LabelImgAnnotationDetails] from [details] by id
///
/// [addDetail] push a [LabelImgAnnotationDetails] into [details]
///
/// [removeDetail] set some of [details] `enabled = false` by id
///
/// [showAll] set all of [details] `visible = true`
///
/// [hideAll] set all of [details] `visible = false`
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
    // debugPrint("[scale]:$scale");
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

  /// rect annotation details
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

class LabelmeAnnotationDetails {
  String className;
  String imageName;
  int polygonId;
  double scale;
  List<PointDetails> points;
  Path? path;

  LabelmeAnnotationDetails(
      {required this.imageName,
      required this.points,
      required this.polygonId,
      this.scale = 1.0,
      this.className = "未定义",
      this.path});
}

class PointDetails {
  double left;
  double top;
  int id;
  PointDetails({required this.left, required this.top, required this.id});
}

enum PolygonOperationType { create, edit }

/// [LabelmeAnnotationController] provider of labelme-like annotations
/// including:
/// ------
class LabelmeAnnotationController extends ChangeNotifier {
  List<LabelmeAnnotationDetails> details = [];
  List<String> savedClassNames = [];
  double _lastScale = 1.0;
  int _currentPolygonIndex = 0;

  int get currentPolygonIndex => _currentPolygonIndex;

  changePolygonClassName(String s, int polygonId) {
    details[polygonId].className = s;
    if (!savedClassNames.contains(s)) {
      notifyListeners();
    }
    savedClassNames.add(s);
  }

  @Deprecated("will be removed")
  addSavedClassName(String s) {
    if (!savedClassNames.contains(s)) {
      savedClassNames.add(s);
      notifyListeners();
    }
  }

  @Deprecated("will be removed")
  addOne() {
    _currentPolygonIndex += 1;
    notifyListeners();
  }

  whenScaleChanged(double scale) {
    if (details.isEmpty) {
      return;
    }
    for (final i in details) {
      for (final p in i.points) {
        p.left = scale / _lastScale * p.left;
        p.top = scale / _lastScale * p.top;
      }
    }
    _lastScale = scale;
    notifyListeners();
  }

  bool exists(int polygonId) {
    return details.map((e) => e.polygonId).toList().contains(polygonId);
  }

  initAPolygon(
    int polygonId,
    String imageName, {
    double scale = 1.0,
  }) {
    details.add(LabelmeAnnotationDetails(
        polygonId: polygonId, imageName: imageName, points: []));
  }

  updatePath(int polygonId, Path p) {
    details[polygonId].path = p;
  }

  addPolygonPoint(int polygonId, PointDetails point) {
    details[polygonId].points.add(point);
    notifyListeners();
  }

  getCurrentPolygonListLength(int polygonId) {
    return details[polygonId].points.length;
  }

  PolygonOperationType operationType = PolygonOperationType.create;

  switchTypeToCreate() {
    operationType = PolygonOperationType.create;
    _currentPolygonIndex += 1;
    notifyListeners();
  }

  switchOperationType() {
    if (operationType == PolygonOperationType.create) {
      operationType = PolygonOperationType.edit;
    } else {
      operationType = PolygonOperationType.create;
    }
    notifyListeners();
  }

  changePolygonPointPosition(DragUpdateDetails d, int polygonId, int pointId) {
    details[polygonId].points[pointId].left += d.delta.dx;
    details[polygonId].points[pointId].top += d.delta.dy;
    notifyListeners();
  }

  changePolygonPosition(DragUpdateDetails d, int polygonId) {
    for (int i = 0; i < details[polygonId].points.length; i++) {
      changePolygonPointPosition(d, polygonId, i);
    }
  }

  getPointLeft(int polygonId, int pointId) {
    return details[polygonId].points[pointId].left;
  }

  getPointTop(int polygonId, int pointId) {
    return details[polygonId].points[pointId].top;
  }
}
