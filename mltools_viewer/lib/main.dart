import 'package:flutter/material.dart';
import 'package:mltools_viewer/routers.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      navigatorKey: Routers.navigatorKey,
      debugShowCheckedModeBanner: false,
      routes: Routers.routers,
      initialRoute: Routers.pageMain,
    );
  }
}
