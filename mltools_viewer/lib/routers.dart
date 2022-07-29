import 'package:flutter/material.dart';
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

class Routers {
  static const pageMain = "/pageMain";
  static const pageImageLabeling = "/pageImageLabeling";
  static const pageNlpLabeling = "/pageNlpLabeling";
  static const pageError = "/pageError";
  static const pageNer = "/pageNer";
  static const pageCustomNer = '/pageCustomNer';

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
        builder: (context) => ner.TextAnnotationScreen(),
        loadWidgetFuture: ner.loadLibrary()),
    pageCustomNer: (context) => FutureLoaderWidget(
        builder: (context) => customner.CustomTextAnnotationScreen(),
        loadWidgetFuture: customner.loadLibrary())
  };
}
