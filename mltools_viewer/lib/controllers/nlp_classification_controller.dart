import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/extensions.dart';
import 'package:mltools_viewer/model/ner_file_info.dart';

import '_nlp_labeling_controller_mixin.dart';

class NlpClassificationData {
  /// 行号
  int id;

  /// 选中的类目名
  String? className;

  NlpClassificationData({this.className, required this.id});
}

class NlpClassificationController extends ChangeNotifier
    with NlpLabelingControllerMixin {
  /// 选择类目之后直接下一行
  bool nextWhenSelected = false;

  changeSelectedStatus(bool b) {
    nextWhenSelected = b;
    notifyListeners();
  }

  /// 类名
  List<String> classNames = ["国家大事", "小道消息"];

  addClassName(String s) {
    classNames.append(s);
    notifyListeners();
  }

  List<NlpClassificationData> labeledData = [];

  changeLabeledData(NlpClassificationData data) {
    if (nerFileInfo == null) {
      return;
    }
    labeledData[currentRowId] = data;
    notifyListeners();
  }

  @override
  void firstRow() {
    currentRowId = 0;
    notifyListeners();
  }

  setFileInfo(NerFileInfo info) {
    nerFileInfo = info;
    for (final i in nerFileInfo!.rowIndexs.entries) {
      labeledData.add(NlpClassificationData(id: i.key));
    }
    notifyListeners();
  }

  NlpClassificationData? getCurrentSelectedData() {
    if (nerFileInfo == null) {
      return null;
    }
    return labeledData[currentRowId];
  }

  @override
  void lastRow() {
    if (nerFileInfo == null) {
      return;
    }
    currentRowId = nerFileInfo!.rowIndexs.keys.length - 1;
    notifyListeners();
  }

  @override
  void nextRow() {
    if (nerFileInfo != null &&
        nerFileInfo!.rowIndexs.keys.last > currentRowId) {
      currentRowId += 1;
      notifyListeners();
    }
  }

  @override
  void previousRow() {
    if (currentRowId > 0) {
      currentRowId -= 1;
      notifyListeners();
    }
  }
}
