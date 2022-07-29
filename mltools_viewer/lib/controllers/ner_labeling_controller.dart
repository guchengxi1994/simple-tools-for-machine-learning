import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/extensions.dart';
import 'package:mltools_viewer/model/ner_file_info.dart';
import 'package:mltools_viewer/model/ner_highlighted_offset.dart';

class NerLabelingController extends ChangeNotifier {
  bool isLoadingFile = false;

  // ignore: avoid_init_to_null
  late NerFileInfo? nerFileInfo = null;

  int get rowId => _currentRowId;

  bool get isLast => (nerFileInfo != null &&
      nerFileInfo!.rowIndexs.keys.last == _currentRowId);

  int _currentRowId = 0;
  String getCurrentRow() {
    if (nerFileInfo == null) {
      return "";
    } else {
      if (nerFileInfo!.rowIndexs == {}) {
        return "";
      }
      if (nerFileInfo!.rowIndexs.keys.contains(_currentRowId)) {
        return nerFileInfo!.fileData
            .substring(nerFileInfo!.rowIndexs[_currentRowId]!.item1,
                nerFileInfo!.rowIndexs[_currentRowId]!.item2)
            .replaceAll("\n", "");
      } else {
        return "";
      }
    }
  }

  nextRow() {
    if (nerFileInfo != null &&
        nerFileInfo!.rowIndexs.keys.last > _currentRowId) {
      _currentRowId += 1;
      notifyListeners();
    }
  }

  previousRow() {
    if (_currentRowId > 0) {
      _currentRowId -= 1;
      notifyListeners();
    }
  }

  setNerFileInfo(NerFileInfo info) {
    nerFileInfo = info;
    notifyListeners();
  }

  setLoadingFileStatus(bool b) {
    isLoadingFile = b;
    _currentRowId = 0;
    notifyListeners();
  }

  List<String> labeledStrings = [];
  // ignore: prefer_final_fields
  List<HighlightedOffset> _offsets = [];
  String text = "小明在2022年2月29日去位于常州的世界银行存储了100块津巴布韦，一看时间是17点56分，当时，股票涨了100个点。";

  @Deprecated("use `addAll` instead")
  addOffset(HighlightedOffset offset) {
    _offsets.add(offset);
    notifyListeners();
  }

  List<HighlightedOffset> getOffsetsByCurrentRowId() {
    return _offsets.where((element) => element.rowId == _currentRowId).toList();
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

  addLabeledString(String s) {
    labeledStrings.add(s);
    notifyListeners();
  }

  addAll(List<HighlightedOffset> s) {
    // _offsets = s;
    for (final i in s) {
      i.rowId = _currentRowId;
      _offsets.append(i);
    }
    labeledStrings = _offsets.map((e) => e.highlightedText).toList();
    notifyListeners();
  }

  removeLabeledString(String s) {
    labeledStrings.remove(s);
    notifyListeners();
  }
}
