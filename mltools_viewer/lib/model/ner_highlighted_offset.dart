import 'package:flutter/material.dart';
import 'mltool_ner_save_model.dart';
import 'ner_models.dart';

class HighlightedOffset {
  int start;
  int end;
  String highlightedText;
  TextStyle highlightStyle;
  NerItems itemType;
  int rowId;
  HighlightedOffset(this.start, this.end, this.highlightedText,
      this.highlightStyle, this.itemType,
      {this.rowId = 1});

  int get length => (end - start).abs();

  @override
  bool operator ==(Object other) {
    if (other is! HighlightedOffset) {
      return false;
    }
    return other.end == end &&
        other.start == start &&
        other.highlightStyle == highlightStyle &&
        rowId == other.rowId;
  }

  @override
  int get hashCode => start.hashCode + end.hashCode;

  NerAnnotation toAnnotation() {
    return NerAnnotation(
        start: start,
        end: end,
        content: highlightedText,
        rowId: rowId,
        labelId: NerItems.values.indexOf(itemType));
  }
}

class CustomNerHighlightedOffset {
  int start;
  int end;
  String highlightedText;
  int rowId;
  TextStyle highlightStyle;
  String className;

  CustomNerHighlightedOffset(this.start, this.end, this.highlightedText,
      this.highlightStyle, this.className,
      {this.rowId = 1});
  int get length => (end - start).abs();

  @override
  bool operator ==(Object other) {
    if (other is! CustomNerHighlightedOffset) {
      return false;
    }
    return other.end == end &&
        other.start == start &&
        other.highlightStyle == highlightStyle &&
        className == other.className &&
        rowId == other.rowId;
  }

  @override
  int get hashCode => start.hashCode + end.hashCode;

  NerAnnotation toAnnotation(List<String> savedClassNames) {
    return NerAnnotation(
        start: start,
        end: end,
        content: highlightedText,
        rowId: rowId,
        labelId: savedClassNames.indexOf(className));
  }
}
