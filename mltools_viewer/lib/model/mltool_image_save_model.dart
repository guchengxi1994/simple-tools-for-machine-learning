import 'dart:convert';

import 'package:mltools_viewer/model/labelimg_objs.dart';
import 'package:mltools_viewer/utils/save_file.dart'
    if (dart.library.html) 'package:mltools_viewer/utils/save_file_on_web.dart';
import 'package:tuple/tuple.dart';

extension ToFile on MltoolsSaveModel {
  Future toFile(String filename) async {
    await saveFile(filename: filename, data: jsonEncode(toJson()));
  }
}

class MltoolsSaveModel {
  static const String extension = ".ml";
  String? imageName;

  /// base64 string
  String? imageData;

  /// image scale
  double? scale;

  /// saved class names
  List<String>? savedClassNames;

  /// annotations
  List<Annotation>? annotations;

  MltoolsSaveModel(
      {required this.imageData,
      required this.imageName,
      this.scale = 1.0,
      this.savedClassNames = const [],
      this.annotations = const []});

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data["imageName"] = imageName;
    data["imageData"] = imageData;
    data["scale"] = scale;
    data["savedClassNames"] = savedClassNames;
    if (annotations != null) {
      data["annotations"] = annotations!.map((e) => e.toJson()).toList();
    }

    return data;
  }

  MltoolsSaveModel.fromJson(Map<String, dynamic> json) {
    imageData = json['imageData'];
    imageName = json['imageName'];
    scale = json['scale'];
    savedClassNames = json["savedClassNames"];
    if (json['annotations'] != null) {
      annotations = json['annotations'].foreach((v) {
        annotations!.add(Annotation.fromJson(v));
      });
    }
  }
}

class Annotation {
  /// annotation type [rect] or [polygon]
  String? annotationType;

  Bndbox? bndbox;

  String? labelName;

  List<Tuple2<double, double>>? polygon;

  Annotation(
      {this.annotationType = "rect",
      this.bndbox,
      required this.labelName,
      this.polygon});

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['annotationType'] = annotationType;
    data['labelName'] = labelName;
    if (bndbox != null) {
      data['bndbox'] = bndbox!.toJson();
    } else {
      data['bndbox'] = null;
    }

    if (polygon != null) {
      data['polygon'] = polygon!.map((e) => e.toList()).toList();
    } else {
      data['polygon'] = null;
    }

    return data;
  }

  Annotation.fromJson(Map<String, dynamic> json) {
    annotationType = json['annotationType'];
    labelName = json['labelName'];
    bndbox = json['bndbox'] != null ? Bndbox.fromJson(json['bndbox']) : null;
    polygon = json['polygon'] != null
        ? (json['polygon'] as List)
            .map((e) => Tuple2<double, double>.fromList(e))
            .toList()
        : null;
  }
}
