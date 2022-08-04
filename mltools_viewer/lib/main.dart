import 'package:flutter/material.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:taichi/taichi.dart' show TaichiDevUtils;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (TaichiDevUtils.isWeb) {
      return MaterialApp(
        debugShowCheckedModeBanner: false,
        routes: Routers.routers,
        initialRoute: Routers.pageMain,
      );
    }

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: "NotoSerifSC",
      ),
      routes: Routers.routers,
      initialRoute: Routers.pageMain,
    );
  }
}
