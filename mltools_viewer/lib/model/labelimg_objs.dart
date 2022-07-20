// ignore_for_file: no_leading_underscores_for_local_identifiers

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
