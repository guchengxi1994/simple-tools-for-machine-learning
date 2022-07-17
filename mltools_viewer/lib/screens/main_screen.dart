/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-16 23:42:21
 */
// ignore_for_file: prefer_typing_uninitialized_variables

import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:mltools_viewer/controllers/menu_controller.dart';
import 'package:mltools_viewer/utils/common.dart';
import 'package:mltools_viewer/widgets/future_builder.dart';
import 'package:provider/provider.dart';
import 'package:mltools_viewer/widgets/sidemenu.dart' deferred as sidemenu;
import 'package:mltools_viewer/widgets/workboard_widget.dart'
    deferred as workboard;

class MainScreen extends StatefulWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  var loadSidemenuLib;
  var loadWorkboard;

  @override
  void initState() {
    super.initState();
    loadSidemenuLib = sidemenu.loadLibrary();
    loadWorkboard = workboard.loadLibrary();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (ScreenTypeUtils.isDesktop(context))
          Material(
            child: FutureLoaderWidget(
              loadWidgetFuture: loadSidemenuLib,
              builder: (context) => sidemenu.SideMenu(),
            ),
          ),
        Expanded(
            child: Scaffold(
          appBar: PreferredSize(
            preferredSize: const Size.fromHeight(AppStyle.appbarHeight),
            child: AppBar(
              elevation: 0,
              automaticallyImplyLeading: !ScreenTypeUtils.isDesktop(context),
              backgroundColor: AppStyle.lightBlue,
              title: apptitle(context),
              centerTitle: true,
            ),
          ),
          key: context.read<MenuController>().scaffoldKey,
          drawer: FutureLoaderWidget(
            loadWidgetFuture: loadSidemenuLib,
            builder: (context) => sidemenu.SideMenu(),
          ),
          body: Container(
            color: AppStyle.grey,
            padding: const EdgeInsets.all(AppStyle.defaultPadding),
            child: FutureLoaderWidget(
              loadWidgetFuture: loadWorkboard,
              builder: (context) => workboard.Workboard(
                boardHeight: MediaQuery.of(context).size.height,
                boardWidth: MediaQuery.of(context).size.width,
              ),
            ),
          ),
        ))
      ],
    );
  }

  Widget apptitle(BuildContext context) {
    String imageName =
        context.watch<ImageController>().image?.imageName ?? "Unknow Image";
    String s = (1 / context.watch<ImageController>().scale).toString();
    String scale;
    if (s.length <= 3) {
      scale = s;
    } else {
      scale = s.substring(0, 3);
    }

    return Text(
      "$imageName  scale:$scale",
      maxLines: 2,
    );
  }
}
