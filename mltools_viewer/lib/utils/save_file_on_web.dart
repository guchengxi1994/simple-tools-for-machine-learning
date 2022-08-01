import 'dart:convert';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import 'package:flutter/material.dart';

import 'toast_utils.dart';

Future<void> saveFile({
  required String filename,
  required String data,
  Object? path,
  required BuildContext? context,
}) async {
  final bytes = utf8.encode(data);
  final blob = html.Blob([bytes]);
  final url = html.Url.createObjectUrlFromBlob(blob);
  final anchor = html.document.createElement('a') as html.AnchorElement
    ..href = url
    ..style.display = 'none'
    ..download = filename;
  html.document.body?.children.add(anchor);
  // download
  anchor.click();

// cleanup
  html.document.body?.children.remove(anchor);
  html.Url.revokeObjectUrl(url);

  if (context != null) {
    // ignore: use_build_context_synchronously
    ToastUtils(context).showToast("文件下载完成");
  }
}
