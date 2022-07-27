import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/ner_models.dart';
import 'package:tuple/tuple.dart';

class HighlightedOffset {
  int start;
  int end;
  String highlightedText;
  TextStyle highlightStyle;
  NerItems control;
  HighlightedOffset(this.start, this.end, this.highlightedText,
      this.highlightStyle, this.control);

  int get length => (end - start).abs();

  @override
  bool operator ==(Object other) {
    if (other is! HighlightedOffset) {
      return false;
    }
    return other.end == end &&
        other.start == start &&
        other.highlightStyle == highlightStyle;
  }

  @override
  int get hashCode => start.hashCode + end.hashCode;
}

class NerFileInfo {
  Map<int, Tuple2<int, int>> rowIndexs;
  String fileName;
  String fileData;
  int dataLength;
  Uint8List fileUint8Data;

  NerFileInfo(
      {required this.dataLength,
      required this.fileData,
      required this.fileName,
      required this.rowIndexs,
      required this.fileUint8Data});
}

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
  List<HighlightedOffset> offsets = [];
  String text = "小明在2022年2月29日去位于常州的世界银行存储了100块津巴布韦，一看时间是17点56分，当时，股票涨了100个点。";

  addOffset(HighlightedOffset offset) {
    offsets.add(offset);
    notifyListeners();
  }

  removeOffsetByContent(String s) {
    offsets.removeWhere((element) => element.highlightedText == s);
    notifyListeners();
  }

  removeOffset(HighlightedOffset offset) {
    offsets.remove(offset);
    notifyListeners();
  }

  addLabeledString(String s) {
    labeledStrings.add(s);
    notifyListeners();
  }

  addAll(List<HighlightedOffset> s) {
    offsets = s;
    labeledStrings = offsets.map((e) => e.highlightedText).toList();
    notifyListeners();
  }

  removeLabeledString(String s) {
    labeledStrings.remove(s);
    notifyListeners();
  }
}

extension Append on List<HighlightedOffset> {
  void append(HighlightedOffset h) {
    if (!contains(h)) {
      add(h);
    }
  }
}
