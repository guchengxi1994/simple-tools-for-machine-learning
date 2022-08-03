import 'dart:typed_data';

import 'package:flutter/material.dart';

class AugImgInfo {
  String augType;
  Uint8List? imgData;

  AugImgInfo({required this.augType, required this.imgData});
}

class NolabelAugController extends ChangeNotifier {
  List<AugImgInfo> imgInfo = [];

  add(AugImgInfo info) {
    imgInfo.add(info);
    notifyListeners();
  }

  addAll(List<AugImgInfo> info) {
    imgInfo.clear();
    imgInfo.addAll(info);
    notifyListeners();
  }

  changeInfo(AugImgInfo info, int index) {
    imgInfo[index] = info;
    notifyListeners();
  }

  AugImgInfo findByName(String augType) {
    return imgInfo
        .where((element) => element.augType == augType)
        .toList()
        .first;
  }
}
