import 'package:flutter/material.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/text_selection_controls.dart';

class HighlightedOffset {
  int start;
  int end;
  String highlightedText;
  TextStyle highlightStyle;
  NerToolBarItemControl control;
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

class NerLabelingController extends ChangeNotifier {
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
