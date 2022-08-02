// ignore_for_file: unnecessary_new

class SiftReq {
  String? img1;
  String? img2;

  SiftReq({this.img1, this.img2});

  SiftReq.fromJson(Map<String, dynamic> json) {
    img1 = json['img1'];
    img2 = json['img2'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['img1'] = img1;
    data['img2'] = img2;
    return data;
  }
}

class SiftResp {
  int? code;
  String? message;
  Data? data;

  SiftResp({this.code, this.message, this.data});

  SiftResp.fromJson(Map<String, dynamic> json) {
    code = json['code'];
    message = json['message'];
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['code'] = code;
    data['message'] = message;
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    return data;
  }
}

class Data {
  int? kp1;
  int? kp2;
  List<dynamic>? matches;
  double? similarity;

  Data({this.kp1, this.kp2, this.matches, this.similarity});

  Data.fromJson(Map<String, dynamic> json) {
    kp1 = json['kp1'];
    kp2 = json['kp2'];
    if (json['matches'] != null) {
      matches = [];
      json['matches'].forEach((v) {
        matches!.add(v);
      });
    }
    similarity = json['similarity'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['kp1'] = kp1;
    data['kp2'] = kp2;
    if (matches != null) {
      data['matches'] = matches!.map((v) => v.toJson()).toList();
    }
    data['similarity'] = similarity;
    return data;
  }
}
