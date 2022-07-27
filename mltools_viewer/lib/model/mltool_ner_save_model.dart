import 'enums.dart';
import 'ner_models.dart';

// ignore: constant_identifier_names
const Labels = NerItems.values;

class NerAnnotation {
  int? start;
  int? end;
  int? labelId;
  String? content;

  NerAnnotation({this.start, this.end, this.labelId, this.content});

  NerAnnotation.fromJson(Map<String, dynamic> json) {
    start = json['start'];
    end = json['end'];
    labelId = json['labelId'];
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['start'] = start;
    data['end'] = end;
    data['labelId'] = labelId;
    data['content'] = content;
    return data;
  }
}

class NerSaveModel {
  static const String extension = ".ml";
  String? fileName;
  String? fileHash;
  List<NerAnnotation>? annotations;
  MltoolType? mltoolType;
  List<String> labels = Labels.map((e) => e.toStr()).toList();

  NerSaveModel(
      {this.fileHash, this.fileName, this.annotations, this.mltoolType});

  NerSaveModel.fromJson(Map<String, dynamic> json) {
    mltoolType =
        json['mltoolType'] == "image" ? MltoolType.forImage : MltoolType.forNlp;
    fileName = json['fileName'];
    fileHash = json['fileHash'];
    if (json['annotations'] != null) {
      annotations = json['annotations'].foreach((v) {
        annotations!.add(NerAnnotation.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data["fileName"] = fileName;
    data["fileHash"] = fileHash;
    data["mltoolType"] = mltoolType == MltoolType.forImage ? "image" : "nlp";
    if (annotations != null) {
      data["annotations"] = annotations!.map((e) => e.toJson()).toList();
    }

    return data;
  }

  @override
  bool operator ==(Object other) {
    if (other is! NerSaveModel) {
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
