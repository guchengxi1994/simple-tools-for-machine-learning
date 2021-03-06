// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/text_selection_controls.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Home(),
    );
  }
}

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GestureDetector(
        behavior: HitTestBehavior.deferToChild,
        onPanDown: (details) {
          debugPrint("[details down]:$details");
        },
        // onTapUp: (details) {
        //   debugPrint("[details up]:${details.localPosition}");
        // },
        onHorizontalDragEnd: (details) {
          debugPrint("[details DragEnd]:${details.velocity}");
        },
        child: Container(
          color: Colors.grey,
          child: Center(
            child: SelectableText(
              "小明在2022年2月29日去世界银行存储了100块津巴布韦，一看时间是17点56分，当时，股票涨了100个点。",
              maxLines: null,
              onSelectionChanged: (selection, cause) {
                // debugPrint("selection end:${selection.end}");
              },
              toolbarOptions: ToolbarOptions(copy: true),
              selectionControls: NlpAnnotationTextSelectionControls(
                  toolBarItems: NerToolBarItemControl.values
                      .map((e) => NerToolBarItem(
                            item: Text(e.toStr()),
                            itemControl: e,
                          ))
                      .toList()),
            ),
          ),
        ),
      ),
    );
  }
}
