// ignore_for_file: prefer_final_fields

import 'package:mltools_viewer/model/ner_file_info.dart';

mixin NlpLabelingControllerMixin {
  // ignore: avoid_init_to_null
  late NerFileInfo? nerFileInfo = null;
  int currentRowId = 0;
  // int get rowId => currentRowId;
  bool get isLast =>
      (nerFileInfo != null && nerFileInfo!.rowIndexs.keys.last == currentRowId);

  String getCurrentRow() {
    if (nerFileInfo == null) {
      return "";
    } else {
      if (nerFileInfo!.rowIndexs == {}) {
        return "";
      }
      if (nerFileInfo!.rowIndexs.keys.contains(currentRowId)) {
        return nerFileInfo!.fileData
            .substring(nerFileInfo!.rowIndexs[currentRowId]!.item1,
                nerFileInfo!.rowIndexs[currentRowId]!.item2)
            .replaceAll("\n", "");
      } else {
        return "";
      }
    }
  }

  @Deprecated("unused feature")
  List<String> labeledStrings = [];

  void nextRow();
  void previousRow();
  void lastRow();
  void firstRow();
}
