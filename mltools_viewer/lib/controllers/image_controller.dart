import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/image_model.dart';

class ImageController extends ChangeNotifier {
  MltoolImage? image;
  double scale = 1.0;

  changeImage(MltoolImage? image) {
    scale = 1.0;
    this.image = image;
    notifyListeners();
  }

  zoomIn() {
    scale = scale / 1.2;
    notifyListeners();
  }

  zoomOut() {
    scale = scale * 1.2;
    notifyListeners();
  }

  reset() {
    scale = 1.0;
    notifyListeners();
  }
}
