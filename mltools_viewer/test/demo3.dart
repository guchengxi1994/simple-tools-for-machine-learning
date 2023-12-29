// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/text_highlight_widget.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Home2(),
    );
  }
}

class Home2 extends StatelessWidget {
  const Home2({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: NerSelectableHighlightText(
            text:
                "小明在2022年2月29日去位于常州的世界银行存储了100块津巴布韦，一看时间是17点56分，当时，股票涨了100个点。"),
      ),
    );
  }
}

class Home extends StatelessWidget {
  Home({super.key});
  final LayerLink layerLink = LayerLink();

  OverlayEntry? _overlayEntry;
  bool show = false;

  void _toggleOverlay(BuildContext context) {
    debugPrint("_toggleOverlay");
    if (!show) {
      // _showOverlay(context);
      _overlayEntry = OverlayEntry(builder: (c) {
        return UnconstrainedBox(
          child: CompositedTransformFollower(
            link: layerLink,

            ///主体的位置
            followerAnchor: Alignment.bottomCenter,

            ///这个是浮窗的位置
            targetAnchor: Alignment.center,
            offset: const Offset(0, 0),
            child: Material(
              // color: Colors.amber,
              child: InkWell(
                child: const SizedBox(
                    child: Center(
                  child: Text("click"),
                )),
                onTap: () {
                  _hideOverlay();
                  show = !show;
                },
              ),
            ),
          ),
        );
      });

      OverlayState? overlayState = Navigator.of(context).overlay;
      // debugPrint("overlayState $overlayState");
      overlayState?.insert(_overlayEntry!);
      show = !show;
    }
  }

  void _hideOverlay() {
    try {
      _overlayEntry?.remove();
    } catch (e, s) {
      debugPrint(s.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CompositedTransformTarget(
        link: layerLink,
        child: GestureDetector(
          onPanDown: (details) {
            debugPrint("[details down]:$details");
          },
          child: Container(
            color: Colors.grey,
            child: Center(
              child: SelectableText(
                "小明在2022年2月29日去世界银行存储了100块津巴布韦，一看时间是17点56分，当时，股票涨了100个点。",
                maxLines: null,
                onSelectionChanged: (selection, cause) {
                  // debugPrint("selection end:${selection.end}");

                  if ((selection.end - selection.start) != 0) {
                    _toggleOverlay(context);
                  }
                },
              ),
            ),
          ),
        ),
      ),
    );
  }
}
