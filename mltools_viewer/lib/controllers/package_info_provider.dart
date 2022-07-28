import 'package:flutter/material.dart';
import 'package:package_info_plus/package_info_plus.dart';

class PackageInfoProvider extends ChangeNotifier {
  PackageInfo _packageInfo = PackageInfo(
    appName: 'Unknown',
    packageName: 'Unknown',
    version: 'Unknown',
    buildNumber: 'Unknown',
    buildSignature: 'Unknown',
  );
  Future init() async {
    _packageInfo = await PackageInfo.fromPlatform();
    notifyListeners();
  }

  PackageInfo get packageInfo => _packageInfo;
}
