import 'dart:io';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:taichi/taichi.dart' show TaichiDevUtils;

import 'toast_utils.dart';

Future<void> saveFile(
    {required String filename,
    required String data,
    required BuildContext? context,
    Object? path,
    Uint8List? byteData}) async {
  if (TaichiDevUtils.isWindows) {
    var dir = Directory.current;

    File newFile = File("${dir.path}/$filename");
    await newFile.writeAsString(data);
    if (context != null) {
      // ignore: use_build_context_synchronously
      ToastUtils(context).showToast("文件保存在 ${dir.path}/$filename");
    }
  } else {
    debugPrint("not supported yet");
  }
}
