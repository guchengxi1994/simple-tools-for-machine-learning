// ignore_for_file: prefer_const_constructors_in_immutables

/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-23 19:47:35
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-23 22:36:14
 */

import 'dart:math';

import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/text_selection_controls.dart';

/// modified from
/// https://github.com/vilashraj/selectable_text_highlighter/blob/main/lib/text_highlighter_widget.dart

class HighlightedOffset {
  int start;
  int end;
  String highlightedText;
  TextStyle highlightStyle;
  HighlightedOffset(
      this.start, this.end, this.highlightedText, this.highlightStyle);
}

Map<NerToolBarItemControl, TextStyle> highlightStyles = {
  NerToolBarItemControl.name: TextStyle(
    backgroundColor: NerToolBarItemControl.name.getColor(),
    fontSize: 16,
  ),
  NerToolBarItemControl.institution: TextStyle(
    backgroundColor: NerToolBarItemControl.institution.getColor(),
    fontSize: 16,
  ),
  NerToolBarItemControl.location: TextStyle(
    backgroundColor: NerToolBarItemControl.location.getColor(),
    fontSize: 16,
  ),
  NerToolBarItemControl.time: TextStyle(
    backgroundColor: NerToolBarItemControl.time.getColor(),
    fontSize: 16,
  ),
  NerToolBarItemControl.date: TextStyle(
    backgroundColor: NerToolBarItemControl.date.getColor(),
    fontSize: 16,
  ),
  NerToolBarItemControl.money: TextStyle(
    backgroundColor: NerToolBarItemControl.money.getColor(),
    fontSize: 16,
  ),
  NerToolBarItemControl.percent: TextStyle(
    backgroundColor: NerToolBarItemControl.percent.getColor(),
    fontSize: 16,
  ),
  NerToolBarItemControl.none: const TextStyle(
    fontSize: 16,
  ),
};

typedef OnHighlightedCallback = void Function(
    List<HighlightedOffset> updatedHighlightedOffsetsList);

class NerSelectableHighlightText extends StatefulWidget {
  NerSelectableHighlightText(
      {Key? key, this.onHighlightedCallback, required this.text})
      : super(key: key);

  final OnHighlightedCallback? onHighlightedCallback;
  final String text;

  @override
  State<NerSelectableHighlightText> createState() =>
      _NerSelectableHighlightTextState();
}

class _NerSelectableHighlightTextState
    extends State<NerSelectableHighlightText> {
  int tempBaseOffset = 0;
  int tempExtentOffset = 0;
  List<HighlightedOffset> offsets = [];

  late Offset clickedPosition = const Offset(0, 0);

  final LayerLink layerLink = LayerLink();

  OverlayEntry? _overlayEntry;
  bool show = false;

  void _toggleOverlay(BuildContext context) {
    // debugPrint("_toggleOverlay");
    if (!show) {
      debugPrint("_toggleOverlay");

      _overlayEntry = OverlayEntry(builder: (c) {
        return UnconstrainedBox(
          child: CompositedTransformFollower(
            link: layerLink,

            ///主体的位置
            followerAnchor: Alignment.bottomCenter,

            ///这个是浮窗的位置
            targetAnchor: Alignment.topLeft,
            offset: Offset(clickedPosition.dx + 0.5 * AppStyle.sidemenuWidth,
                clickedPosition.dy + 20 + 150),
            child: Card(
              elevation: 4,
              child: SizedBox(
                width: 300,
                child: Padding(
                  padding: const EdgeInsets.all(20),
                  child: Wrap(
                    //主轴间距
                    spacing: 8,
                    //纵轴间距
                    runSpacing: 4,
                    //布局方向
                    direction: Axis.horizontal,
                    children: NerToolBarItemControl.values
                        .map((e) => ElevatedButton(
                            onPressed: () {
                              switch (e) {
                                case NerToolBarItemControl.name:
                                  setState(() {
                                    offsets.add(HighlightedOffset(
                                        tempBaseOffset,
                                        tempExtentOffset,
                                        widget.text.substring(
                                          tempBaseOffset,
                                          tempExtentOffset,
                                        ),
                                        highlightStyles[
                                            NerToolBarItemControl.name]!));
                                    minimize(offsets);
                                  });
                                  break;
                                case NerToolBarItemControl.institution:
                                  setState(() {
                                    offsets.add(HighlightedOffset(
                                        tempBaseOffset,
                                        tempExtentOffset,
                                        widget.text.substring(
                                          tempBaseOffset,
                                          tempExtentOffset,
                                        ),
                                        highlightStyles[NerToolBarItemControl
                                            .institution]!));
                                    minimize(offsets);
                                  });
                                  break;
                                case NerToolBarItemControl.location:
                                  setState(() {
                                    offsets.add(HighlightedOffset(
                                        tempBaseOffset,
                                        tempExtentOffset,
                                        widget.text.substring(
                                          tempBaseOffset,
                                          tempExtentOffset,
                                        ),
                                        highlightStyles[
                                            NerToolBarItemControl.location]!));
                                    minimize(offsets);
                                  });
                                  break;
                                case NerToolBarItemControl.time:
                                  setState(() {
                                    offsets.add(HighlightedOffset(
                                        tempBaseOffset,
                                        tempExtentOffset,
                                        widget.text.substring(
                                          tempBaseOffset,
                                          tempExtentOffset,
                                        ),
                                        highlightStyles[
                                            NerToolBarItemControl.time]!));
                                    minimize(offsets);
                                  });
                                  break;
                                case NerToolBarItemControl.date:
                                  setState(() {
                                    offsets.add(HighlightedOffset(
                                        tempBaseOffset,
                                        tempExtentOffset,
                                        widget.text.substring(
                                          tempBaseOffset,
                                          tempExtentOffset,
                                        ),
                                        highlightStyles[
                                            NerToolBarItemControl.date]!));
                                    minimize(offsets);
                                  });
                                  break;
                                case NerToolBarItemControl.money:
                                  setState(() {
                                    offsets.add(HighlightedOffset(
                                        tempBaseOffset,
                                        tempExtentOffset,
                                        widget.text.substring(
                                          tempBaseOffset,
                                          tempExtentOffset,
                                        ),
                                        highlightStyles[
                                            NerToolBarItemControl.money]!));
                                    minimize(offsets);
                                  });
                                  break;
                                case NerToolBarItemControl.percent:
                                  setState(() {
                                    offsets.add(HighlightedOffset(
                                        tempBaseOffset,
                                        tempExtentOffset,
                                        widget.text.substring(
                                          tempBaseOffset,
                                          tempExtentOffset,
                                        ),
                                        highlightStyles[
                                            NerToolBarItemControl.percent]!));
                                    minimize(offsets);
                                  });
                                  break;
                                case NerToolBarItemControl.none:
                                  setState(() {
                                    offsets.add(HighlightedOffset(
                                        tempBaseOffset,
                                        tempExtentOffset,
                                        widget.text.substring(
                                          tempBaseOffset,
                                          tempExtentOffset,
                                        ),
                                        highlightStyles[
                                            NerToolBarItemControl.none]!));
                                    minimize(offsets);
                                  });
                                  break;
                              }

                              _hideOverlay();
                              show = !show;
                            },
                            child: Padding(
                              padding: const EdgeInsets.all(3),
                              child: Text(e.toStr()),
                            )))
                        .toList(),
                  ),
                ),
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
    return CompositedTransformTarget(
        link: layerLink,
        child: GestureDetector(
          onPanDown: (details) {
            debugPrint("[details down]:$details");
            clickedPosition = details.localPosition;
          },
          child: SelectableText.rich(
            TextSpan(children: getTextSpanList()),
            maxLines: null,
            onSelectionChanged: (selection, cause) {
              if ((selection.end - selection.start) != 0) {
                tempBaseOffset =
                    min(selection.baseOffset, selection.extentOffset);
                tempExtentOffset =
                    max(selection.baseOffset, selection.extentOffset);
                _toggleOverlay(context);
              }
            },
          ),
        ));
  }

  void minimize(List<HighlightedOffset> list) {
    list.sort((a, b) => a.start.compareTo(b.start));
    List<HighlightedOffset> stack = [];
    for (var i in list) {
      if (stack.isEmpty) {
        stack.add(i);
      } else {
        HighlightedOffset top = stack.last;
        if (top.end < i.start) {
          stack.add(i);
        } else if (top.end < i.end) {
          top.end = i.end;
          stack.removeLast();
          stack.add(top);
        }
      }
    }
    offsets = stack;
  }

  List<TextSpan> getTextSpanList() {
    List<TextSpan> list = [];
    if (offsets.isEmpty) {
      return [
        TextSpan(
            text: widget.text,
            style: highlightStyles[NerToolBarItemControl.none])
      ];
    }
    list.add(TextSpan(
        text: widget.text.substring(0, offsets.first.start),
        style: highlightStyles[NerToolBarItemControl.none]));

    for (int i = 0; i < offsets.length; i++) {
      HighlightedOffset element = offsets[i];
      if (i == 0) {
        list.add(TextSpan(
            text: widget.text.substring(element.start, element.end),
            style: element.highlightStyle));
      } else {
        list.add(TextSpan(
          text: widget.text.substring(offsets[i - 1].end, element.start),
          style: highlightStyles[NerToolBarItemControl.none],
        ));
        list.add(TextSpan(
            text: widget.text.substring(element.start, element.end),
            style: element.highlightStyle));
      }
    }

    list.add(TextSpan(
        text: widget.text.substring(offsets.last.end, widget.text.length),
        style: highlightStyles[NerToolBarItemControl.none]));
    return list;
  }
}
