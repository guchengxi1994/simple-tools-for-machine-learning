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
    deferred as toolsmain;
import 'package:mltools_viewer/screens/mltools_screens/tools_screens/sift_screen.dart'
    deferred as sift;
import 'package:mltools_viewer/screens/mltools_screens/tools_screens/no_label_augmentation_screen.dart'
    deferred as nolabelaug;

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

  static Map<String, WidgetBuilder> routers = {
    pageMain: (context) => FutureLoaderWidget(
        builder: (context) => main.MainScreen(),
        loadWidgetFuture: main.loadLibrary()),
    pageImageLabeling: (context) => FutureLoaderWidget(
        builder: (context) => imagelabeling.ImageLabelingPage(),
        loadWidgetFuture: imagelabeling.loadLibrary()),
    pageNlpLabeling: (context) => FutureLoaderWidget(
        builder: (context) => nlplabeling.NlpLabelingScreen(),
        loadWidgetFuture: nlplabeling.loadLibrary()),
    pageError: (context) => FutureLoaderWidget(
        builder: (context) => p404.BlankScreen(),
        loadWidgetFuture: p404.loadLibrary()),
    pageNer: (context) => FutureLoaderWidget(
        builder: (context) => ShowCaseWidget(
                builder: Builder(
              builder: (ctx) => ner.TextAnnotationScreen(),
            )),
        loadWidgetFuture: ner.loadLibrary()),
    pageCustomNer: (context) => FutureLoaderWidget(
        builder: (context) => ShowCaseWidget(
                builder: Builder(
              builder: (ctx) => customner.CustomTextAnnotationScreen(),
            )),
        loadWidgetFuture: customner.loadLibrary()),
    pageToolsMain: (context) => FutureLoaderWidget(
        builder: (context) => toolsmain.MltoolsMainScreen(),
        loadWidgetFuture: toolsmain.loadLibrary()),
    pageSift: (context) => FutureLoaderWidget(
        builder: (context) => sift.SiftScreen(),
        loadWidgetFuture: sift.loadLibrary()),
    pageNolabelaug: (context) => FutureLoaderWidget(
        builder: (context) => MultiProvider(
              providers: [
                ChangeNotifierProvider(create: (_) => NolabelAugController())
              ],
              child: nolabelaug.NoLabelAugmentationScreen(),
            ),
        loadWidgetFuture: nolabelaug.loadLibrary()),
  };
}
