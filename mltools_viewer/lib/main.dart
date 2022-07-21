import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:mltools_viewer/controllers/board_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:mltools_viewer/controllers/menu_controller.dart';
import 'package:mltools_viewer/controllers/right_menu_controller.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:mltools_viewer/screens/image_labeling/components/image_view.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => MenuController()),
        ChangeNotifierProvider(create: (_) => ImageController()),
        ChangeNotifierProvider(
            create: (_) => BoardController()..addWidget(const ImageView())),
        ChangeNotifierProvider(create: (_) => RightMenuController()),
        ChangeNotifierProvider(create: (_) => LabelImgAnnotationController()),
        ChangeNotifierProvider(create: (_) => LabelmeAnnotationController()),
      ],
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        // home: ImageLabelingMainScreen(),
        routes: Routers.routers,
        initialRoute: Routers.pageMain,
      ),
    );
  }
}
