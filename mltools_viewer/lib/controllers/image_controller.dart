/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-17 17:06:42
 */
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/image_model.dart';

/// [ImageController] provider of [ImageView]
/// including:
/// ------
/// [images] : a list of [MltoolImage], which is nullable
///
/// [scale] : image scale
///
/// [stackKey] : the child of [ImageView] is a [Stack], this is
/// the [GlobalKey] of the [Stack]
///
/// [bndboxPreviewWidth] : width of [BndBoxPreviewWidget]
///
/// [bndboxPreviewHeight] : height of [BndBoxPreviewWidget]
///
/// [currentImageName] : get the image name
///
/// [currentImageIndex] : get the image index(if multiple files are selected)
///
/// [currentImageData] : Uint8List of the image
///
/// [changeCurrentIndex] : change image index by index
///
/// [changeBndboxPreviewWidth] : change [BndBoxPreviewWidget] width
///
/// [changeBndboxPreviewHeight] : change [BndBoxPreviewWidget] height
///
/// [changeImage] : select single image
///
/// [changeImages] : select multiple images
///
/// [zoomIn] : zoom in image by multiply 1.2 each time
///
/// [zoomOut] : zoom out image by divide 1.2 each time
///
/// [reset] : reset [scale] to `1.0`
///
/// [changeScale] : change scale with a specific number
class ImageController extends ChangeNotifier {
  List<MltoolImage?> images = [];
  double scale = 1.0;
  final GlobalKey stackKey = GlobalKey();
  double bndboxPreviewWidth = 0;
  double bndboxPreviewHeight = 0;

  String? get currentImageName =>
      images.isEmpty ? null : images[_currentImageIndex]!.imageName;

  int _currentImageIndex = 0;

  int get currentImageIndex => _currentImageIndex;

  Uint8List get currentImageData => images[_currentImageIndex]!.imageData!;

  changeCurrentIndex(int index) {
    _currentImageIndex = index;
    notifyListeners();
  }

  changeBndboxPreviewWidth(double w) {
    if (w > 0) {
      bndboxPreviewWidth = w;
      notifyListeners();
    }
  }

  changeBndboxPreviewHeight(double h) {
    if (h > 0) {
      bndboxPreviewHeight = h;
      notifyListeners();
    }
  }

  bndReset() {
    bndboxPreviewHeight = 0;
    bndboxPreviewWidth = 0;
    notifyListeners();
  }

  changeImage(MltoolImage? image) {
    scale = 1.0;
    images = [image];
    _currentImageIndex = 0;
    notifyListeners();
  }

  changeImages(List<MltoolImage?> images) {
    scale = 1.0;
    this.images = images;
    _currentImageIndex = 0;
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

  changeScale(double s) {
    scale = s;
    notifyListeners();
  }
}
