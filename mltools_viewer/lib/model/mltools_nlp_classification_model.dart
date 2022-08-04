import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/enums.dart';
import 'package:mltools_viewer/utils/save_file_on_web.dart';

extension ToFile on NlpClassificationSaveModel {
  Future toFile(String filename, BuildContext? context) async {
    await saveFile(
        filename: filename, data: jsonEncode(toJson()), context: context);
  }
}

class NlpClassificationSaveModel {
  static const String extension = ".ml";
  String? fileName;
  String? fileHash;
  MltoolType? mltoolType;
  List<Annotations>? annotations;

  NlpClassificationSaveModel(
      {this.mltoolType = MltoolType.nlpClassification,
      this.fileHash,
      this.fileName,
      this.annotations});

  NlpClassificationSaveModel.fromJson(Map<String, dynamic> json) {
    fileName = json['fileName'];
    fileHash = json['fileHash'];
    if (json['annotations'] != null) {
      annotations = <Annotations>[];
      json['annotations'].forEach((v) {
        annotations!.add(Annotations.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['fileName'] = fileName;
    data['fileHash'] = fileHash;
    if (annotations != null) {
      data['annotations'] = annotations!.map((v) => v.toJson()).toList();
    }
    data['mltoolType'] = "nlp_classification";
    return data;
  }

  @override
  bool operator ==(Object other) {
    if (other is! NlpClassificationSaveModel) {
      return false;
    }
    if (fileHash == null || other.fileHash == null) {
      return false;
    }
    return fileHash == other.fileHash;
  }

  @override
  int get hashCode => fileHash.hashCode;
}

class Annotations {
  int? rowId;
  String? className;

  Annotations({this.rowId, this.className});

  Annotations.fromJson(Map<String, dynamic> json) {
    rowId = json['rowId'];
    className = json['className'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['rowId'] = rowId;
    data['className'] = className;
    return data;
  }
}
