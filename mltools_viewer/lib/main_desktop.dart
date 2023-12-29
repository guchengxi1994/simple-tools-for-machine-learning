import 'package:flutter/material.dart';
import 'package:mltools_viewer/routers.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      navigatorKey: Routers.navigatorKey,
      routes: Routers.routers,
      initialRoute: Routers.pageMain,
    );
  }
}
