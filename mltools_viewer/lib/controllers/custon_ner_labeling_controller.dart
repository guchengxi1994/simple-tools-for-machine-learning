// ignore_for_file: prefer_final_fields

import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/_nlp_labeling_controller_mixin.dart';
import 'package:mltools_viewer/model/extensions.dart';
import 'package:mltools_viewer/model/ner_file_info.dart';
import 'package:mltools_viewer/model/ner_highlighted_offset.dart';

class CustomNerLabelingController extends ChangeNotifier
    with NlpLabelingControllerMixin {
  List<String> classNames = [];

  addClassName(String s) {
    classNames.append(s);
    notifyListeners();
  }

  removeClassName(String s) {
    classNames.remove(s);
    notifyListeners();
  }

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

  List<CustomNerHighlightedOffset> _offsets = [];
  List<CustomNerHighlightedOffset> getOffsetsByCurrentRowId() {
    return _offsets.where((element) => element.rowId == currentRowId).toList();
  }

  List<CustomNerHighlightedOffset> get allOffsets => _offsets;

  removeOffsetByContent(String s) {
    _offsets.removeWhere((element) => element.highlightedText == s);
    notifyListeners();
  }

  removeOffset(CustomNerHighlightedOffset offset) {
    _offsets.remove(offset);
    notifyListeners();
  }

  @Deprecated("unused feature")
  addLabeledString(String s) {
    labeledStrings.add(s);
    notifyListeners();
  }

  addAll(List<CustomNerHighlightedOffset> s) {
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
