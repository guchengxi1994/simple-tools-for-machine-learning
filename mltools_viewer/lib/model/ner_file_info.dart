import 'dart:typed_data';

import 'package:tuple/tuple.dart';

class NerFileInfo {
  Map<int, Tuple2<int, int>> rowIndexs;
  String fileName;
  String fileData;
  int dataLength;
  Uint8List fileUint8Data;

  NerFileInfo(
      {required this.dataLength,
      required this.fileData,
      required this.fileName,
      required this.rowIndexs,
      required this.fileUint8Data});
}
