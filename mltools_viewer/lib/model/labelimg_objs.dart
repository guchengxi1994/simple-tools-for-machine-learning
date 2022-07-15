// ignore_for_file: no_leading_underscores_for_local_identifiers

import 'package:xml/xml.dart';

class ImageObjs {
  Annotation? annotation;

  ImageObjs({this.annotation});

  ImageObjs.fromJson(Map<String, dynamic> json) {
    annotation = json['annotation'] != null
        ? Annotation.fromJson(json['annotation'])
        : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    if (annotation != null) {
      data['annotation'] = annotation!.toJson();
    }
    return data;
  }

  String toXmlStr() {
    if (null != annotation) {
      final builder = XmlBuilder();
      builder.element("annotation", nest: () {
        builder.element("folder", nest: annotation!.folder);
        builder.element("filename", nest: annotation!.filename);
        builder.element("path", nest: annotation!.path);
        builder.element("source", nest: () {
          builder.element("database", nest: annotation!.source!.database);
        });
        builder.element("size", nest: () {
          builder.element("width", nest: annotation!.size!.width);
          builder.element("height", nest: annotation!.size!.height);
          builder.element("depth", nest: annotation!.size!.depth);
        });
        builder.element("segmented", nest: 0);
        if (null != annotation!.object) {
          // List objs = this.annotation!.object!;
          for (var i in annotation!.object!) {
            // print(i.toJson());
            builder.element("object", nest: () {
              builder.element("name", nest: i.name);
              builder.element("difficult", nest: i.difficult);
              builder.element("bndbox", nest: () {
                builder.element("xmin", nest: i.bndbox!.xmin);
                builder.element("xmax", nest: i.bndbox!.xmax);
                builder.element("ymin", nest: i.bndbox!.ymin);
                builder.element("ymax", nest: i.bndbox!.ymax);
              });
            });
          }
        }
      });

      var _xml = builder.buildDocument();
      return _xml.toXmlString();
    }

    return "";
  }
}

class Annotation {
  String? folder;
  String? filename;
  String? path;
  Source? source;
  ClassSize? size;
  int? segmented;
  List<ClassObject>? object;

  Annotation(
      {this.folder = "TEST",
      this.filename,
      this.path,
      this.source,
      this.size,
      this.segmented,
      this.object});

  Annotation.fromJson(Map<String, dynamic> json) {
    folder = json['folder'];
    filename = json['filename'];
    path = json['path'];
    source = json['source'] != null ? Source.fromJson(json['source']) : null;
    size = json['size'] != null ? ClassSize.fromJson(json['size']) : null;
    segmented = json['segmented'];
    if (json['object'] != null) {
      object = [];
      json['object'].forEach((v) {
        object!.add(ClassObject.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['folder'] = folder;
    data['filename'] = filename;
    data['path'] = path;
    if (source != null) {
      data['source'] = source!.toJson();
    }
    if (size != null) {
      data['size'] = size!.toJson();
    }
    data['segmented'] = segmented;
    if (object != null) {
      data['object'] = object!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Source {
  String? database;

  Source({this.database = "Unknown"});

  Source.fromJson(Map<String, dynamic> json) {
    database = json['database'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['database'] = database;
    return data;
  }
}

class ClassSize {
  int? width;
  int? height;
  int? depth;

  ClassSize({this.width, this.height, this.depth});

  ClassSize.fromJson(Map<String, dynamic> json) {
    width = json['width'];
    height = json['height'];
    depth = json['depth'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['width'] = width;
    data['height'] = height;
    data['depth'] = depth;
    return data;
  }
}

class ClassObject {
  String? name;
  int? difficult;
  Bndbox? bndbox;

  ClassObject({this.name, this.difficult = 0, this.bndbox});

  ClassObject.fromJson(Map<String, dynamic> json) {
    name = json['name'];
    difficult = json['difficult'];
    bndbox = json['bndbox'] != null ? Bndbox.fromJson(json['bndbox']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['name'] = name;
    data['difficult'] = difficult;
    if (bndbox != null) {
      data['bndbox'] = bndbox!.toJson();
    }
    return data;
  }
}

class Bndbox {
  int? xmin;
  int? ymin;
  int? xmax;
  int? ymax;

  Bndbox({this.xmin, this.ymin, this.xmax, this.ymax});

  Bndbox.fromJson(Map<String, dynamic> json) {
    xmin = json['xmin'];
    ymin = json['ymin'];
    xmax = json['xmax'];
    ymax = json['ymax'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['xmin'] = xmin;
    data['ymin'] = ymin;
    data['xmax'] = xmax;
    data['ymax'] = ymax;
    return data;
  }
}
