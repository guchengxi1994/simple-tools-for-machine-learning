import 'dart:typed_data';

class MltoolImage {
  Uint8List? imageData;
  String? imageName;
  int? imageHeight;
  int? imageWidth;

  MltoolImage(
      {this.imageData, this.imageHeight, this.imageName, this.imageWidth});
}
