import 'package:taichi/taichi.dart' show TaichiDevUtils;
import 'package:desktop_multi_window/desktop_multi_window.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/no_label_aug_controller.dart';
import 'package:provider/provider.dart';
import 'package:showcaseview/showcaseview.dart';
import 'package:mltools_viewer/screens/image_labeling/image_labeling_screen.dart'
    deferred as imagelabeling;
import 'package:mltools_viewer/screens/main_screen.dart' deferred as main;
import 'package:mltools_viewer/screens/nlp_labeling/nlp_labeling_screen.dart'
    deferred as nlplabeling;
import 'package:mltools_viewer/widgets/future_builder.dart';
import 'package:mltools_viewer/screens/blank_page.dart' deferred as p404;
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/text_ner_screen.dart'
    deferred as ner;
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/custom_text_ner_screen.dart'
    deferred as customner;
import 'package:mltools_viewer/screens/mltools_screens/mltools_main_screen.dart'
    deferred as toolsmain show ToolsScreen;
import 'package:mltools_viewer/screens/mltools_screens/tools_screens/sift_screen.dart'
    deferred as sift;
import 'package:mltools_viewer/screens/mltools_screens/tools_screens/no_label_augmentation_screen.dart'
    deferred as nolabelaug;
import 'package:mltools_viewer/screens/nlp_labeling/classification/nlp_classification_screen.dart'
    deferred as classfication;
import 'package:mltools_viewer/screens/mltools_screens/tools_screens/dlib_screen.dart'
    deferred as dlib;
import 'package:mltools_viewer/screens/mltools_screens/tools_screens/noise_screen.dart'
    deferred as noise;
import 'package:mltools_viewer/screens/chat_bot/kashgari/chat_screen_using_classification.dart'
    deferred as kash;
import 'package:mltools_viewer/screens/nn_graph/vgg.dart' deferred as vgg;

class Routers {
  static const pageMain = "/pageMain";
  static const pageImageLabeling = "/pageImageLabeling";
  static const pageNlpLabeling = "/pageNlpLabeling";
  static const pageError = "/pageError";
  static const pageNer = "/pageNer";
  static const pageCustomNer = '/pageCustomNer';
  static const pageToolsMain = '/pageToolsMain';
  static const pageSift = '/pageSift';
  static const pageNolabelaug = '/pageNolabelaug';
  static const pageClassification = '/pageClassification';
  static const pageDlib = "/pageDlib";
  static const pageNoise = "/pageNoise";
  static const pageKash = "/pageKash";
  static const pageVgg = "/pageVgg";

  static Map<String, WidgetBuilder> routers = {
    /// 主页面
    pageMain: (context) => FutureLoaderWidget(
        builder: (context) {
          if (TaichiDevUtils.isWindows ||
              TaichiDevUtils.isLinux ||
              TaichiDevUtils.isMacOS) {
            return main.MainScreenDesktop(
              controller: WindowController.fromWindowId(0),
            );
          } else {
            return main.MainScreen();
          }
        },
        loadWidgetFuture: main.loadLibrary()),

    /// 图像标注
    pageImageLabeling: (context) => FutureLoaderWidget(
        builder: (context) => imagelabeling.ImageLabelingPage(),
        loadWidgetFuture: imagelabeling.loadLibrary()),

    /// nlp标注
    pageNlpLabeling: (context) => FutureLoaderWidget(
        builder: (context) => nlplabeling.NlpLabelingScreen(),
        loadWidgetFuture: nlplabeling.loadLibrary()),

    /// 暂未完成的页面
    pageError: (context) => FutureLoaderWidget(
        builder: (context) => p404.BlankScreen(),
        loadWidgetFuture: p404.loadLibrary()),

    /// NER标注页面
    pageNer: (context) => FutureLoaderWidget(
        builder: (context) => ShowCaseWidget(
                builder: Builder(
              builder: (ctx) => ner.TextAnnotationScreen(),
            )),
        loadWidgetFuture: ner.loadLibrary()),

    /// 自定义NER标注页面
    pageCustomNer: (context) => FutureLoaderWidget(
        builder: (context) => ShowCaseWidget(
                builder: Builder(
              builder: (ctx) => customner.CustomTextAnnotationScreen(),
            )),
        loadWidgetFuture: customner.loadLibrary()),

    /// 机器学习工具主页面
    pageToolsMain: (context) => FutureLoaderWidget(
          builder: (context) => toolsmain.ToolsScreen(),
          loadWidgetFuture: toolsmain.loadLibrary(),
        ),

    /// sift页面
    pageSift: (context) => FutureLoaderWidget(
        builder: (context) => sift.SiftScreen(),
        loadWidgetFuture: sift.loadLibrary()),

    /// 图像增广页面
    pageNolabelaug: (context) => FutureLoaderWidget(
        builder: (context) => MultiProvider(
              providers: [
                ChangeNotifierProvider(create: (_) => NolabelAugController())
              ],
              child: nolabelaug.NoLabelAugmentationScreen(),
            ),
        loadWidgetFuture: nolabelaug.loadLibrary()),

    /// 文本分类页面
    pageClassification: (context) => FutureLoaderWidget(
        builder: (context) => ShowCaseWidget(
            builder: Builder(
                builder: (ctx) => classfication.NlpClassificationScreen())),
        loadWidgetFuture: classfication.loadLibrary()),

    /// dlib 页面
    pageDlib: (context) => FutureLoaderWidget(
        builder: (context) => dlib.DlibScreen(),
        loadWidgetFuture: dlib.loadLibrary()),

    /// 加噪与去噪
    pageNoise: (context) => FutureLoaderWidget(
        builder: (context) => noise.NoiseScreen(),
        loadWidgetFuture: noise.loadLibrary()),

    /// kashgari
    pageKash: (context) => FutureLoaderWidget(
        builder: (context) => kash.KashgraiCharbotScreen(),
        loadWidgetFuture: kash.loadLibrary()),

    /// vgg demo
    pageVgg: (context) => FutureLoaderWidget(
        builder: (context) => vgg.VggScreen(),
        loadWidgetFuture: vgg.loadLibrary()),
  };

  /// 无context跳转
  static GlobalKey<NavigatorState> navigatorKey = GlobalKey();
}
