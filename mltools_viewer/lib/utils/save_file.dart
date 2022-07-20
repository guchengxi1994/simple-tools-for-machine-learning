import 'dart:io';

import 'package:flutter/material.dart';
import 'package:taichi/taichi.dart' show TaichiDevUtils;

Future<void> saveFile(
    {required String filename, required String data, Object? path}) async {
  if (TaichiDevUtils.isWindows) {
    var dir = Directory.current;

    File newFile = File("${dir.path}/$filename");
    await newFile.writeAsString(data);
  } else {
    debugPrint("not supported yet");
  }
}
