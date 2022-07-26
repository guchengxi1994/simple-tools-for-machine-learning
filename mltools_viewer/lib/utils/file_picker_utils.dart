import 'dart:io';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:taichi/taichi.dart' show TaichiDevUtils;

class CustomFilePickerResult {
  Uint8List? fileData;
  String? fileName;

  Future pickAFile({List<String> extensions = const []}) async {
    FilePickerResult? result;
    if (extensions == []) {
      result = await FilePicker.platform.pickFiles();
    } else {
      result = await FilePicker.platform.pickFiles(
        type: FileType.custom,
        allowedExtensions: extensions,
      );
    }

    if (result != null) {
      if (TaichiDevUtils.isWeb) {
        fileData = result.files.first.bytes;
      } else {
        File file = File(result.files.single.path!);
        fileData = file.readAsBytesSync();
      }
    }

    if (fileData != null) {
      fileName = result!.files.first.name;
    }
  }
}
