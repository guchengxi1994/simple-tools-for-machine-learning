import 'package:dio/dio.dart';
import 'package:taichi/taichi.dart';
import 'package:universal_html/html.dart' as html;
import 'dart:io' show Directory;

abstract class _DownloadService {
  Future<void> download({required String url});
}

class WebDownloadService implements _DownloadService {
  @override
  Future<void> download({required String url}) async {
    html.window.open(url, "_blank");
  }
}

class DesktopDownloadService implements _DownloadService {
  @override
  Future<void> download({required String url}) async {
    var dir = Directory.current;
    String fileName = 'result.zip';
    Dio dio = Dio();
    await dio.download(url, "${dir.path}/$fileName");
  }
}

class DownloadService {
  static final DownloadService _instance = DownloadService._internal();
  factory DownloadService() => _instance;

  // ignore: library_private_types_in_public_api
  _DownloadService? service;

  DownloadService._internal() {
    if (TaichiDevUtils.isWeb) {
      service = WebDownloadService();
    } else if (TaichiDevUtils.isWindows ||
        TaichiDevUtils.isMacOS ||
        TaichiDevUtils.isLinux) {
      service = DesktopDownloadService();
    }
  }
  download({required String url}) async {
    return service!.download(url: url);
  }
}
