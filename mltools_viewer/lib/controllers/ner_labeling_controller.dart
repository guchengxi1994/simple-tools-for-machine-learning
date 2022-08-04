import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/extensions.dart';
import 'package:mltools_viewer/model/ner_file_info.dart';
import 'package:mltools_viewer/model/ner_highlighted_offset.dart';

import '_nlp_labeling_controller_mixin.dart';

class NerLabelingController extends ChangeNotifier
    with NlpLabelingControllerMixin {
  @Deprecated("unused variable")
  bool isLoadingFile = false;

  @override
  nextRow() {
    if (nerFileInfo != null &&
        nerFileInfo!.rowIndexs.keys.last > currentRowId) {
      currentRowId += 1;
      notifyListeners();
    }
  }

  @override
  previousRow() {
    if (currentRowId > 0) {
      currentRowId -= 1;
      notifyListeners();
    }
  }

  @override
  lastRow() {
    if (nerFileInfo == null) {
      return;
    }
    currentRowId = nerFileInfo!.rowIndexs.keys.length - 1;
    notifyListeners();
  }

  @override
  firstRow() {
    currentRowId = 0;
    notifyListeners();
  }

  setNerFileInfo(NerFileInfo info) {
    nerFileInfo = info;
    notifyListeners();
  }

  @Deprecated("unused function")
  setLoadingFileStatus(bool b) {
    isLoadingFile = b;
    currentRowId = 0;
    notifyListeners();
  }

  // ignore: prefer_final_fields
  List<HighlightedOffset> _offsets = [];

  @Deprecated("unused variable")
  String text = "小明在2022年2月29日去位于常州的世界银行存储了100块津巴布韦，一看时间是17点56分，当时，股票涨了100个点。";

  @Deprecated("use `addAll` instead")
  addOffset(HighlightedOffset offset) {
    _offsets.add(offset);
    notifyListeners();
  }

  List<HighlightedOffset> getOffsetsByCurrentRowId() {
    return _offsets.where((element) => element.rowId == currentRowId).toList();
  }

  List<HighlightedOffset> get allOffsets => _offsets;

  removeOffsetByContent(String s) {
    _offsets.removeWhere((element) => element.highlightedText == s);
    notifyListeners();
  }

  removeOffset(HighlightedOffset offset) {
    _offsets.remove(offset);
    notifyListeners();
  }

  @Deprecated("unused feature")
  addLabeledString(String s) {
    labeledStrings.add(s);
    notifyListeners();
  }

  addAll(List<HighlightedOffset> s) {
    // _offsets = s;
    for (final i in s) {
      i.rowId = currentRowId;
      _offsets.append(i);
    }
    // ignore: deprecated_member_use_from_same_package
    labeledStrings = _offsets.map((e) => e.highlightedText).toList();
    notifyListeners();
  }

  @Deprecated("unused feature")
  removeLabeledString(String s) {
    labeledStrings.remove(s);
    notifyListeners();
  }
}
