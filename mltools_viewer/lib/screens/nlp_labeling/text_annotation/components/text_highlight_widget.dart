// ignore_for_file: prefer_const_constructors_in_immutables, must_be_immutable

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
import 'package:mltools_viewer/controllers/ner_labeling_controller.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/text_selection_controls.dart';
import 'package:provider/provider.dart';

/// modified from
/// https://github.com/vilashraj/selectable_text_highlighter/blob/main/lib/text_highlighter_dart

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

class NerSelectableHighlightText extends StatelessWidget {
  NerSelectableHighlightText(
      {Key? key, this.onHighlightedCallback, required this.text})
      : super(key: key);

  final OnHighlightedCallback? onHighlightedCallback;
  final String text;

  late Offset clickedPosition = const Offset(0, 0);

  final LayerLink layerLink = LayerLink();

  OverlayEntry? _overlayEntry;
  bool show = false;

  int tempBaseOffset = 0;
  int tempExtentOffset = 0;

  void _toggleOverlay(BuildContext context) {
    // debugPrint("_toggleOverlay");

    if (!show) {
      // debugPrint("_toggleOverlay");
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
                              var lastElement = HighlightedOffset(
                                  tempBaseOffset,
                                  tempExtentOffset,
                                  text.substring(
                                    tempBaseOffset,
                                    tempExtentOffset,
                                  ),
                                  highlightStyles[NerToolBarItemControl.name]!,
                                  NerToolBarItemControl.name);
                              switch (e) {
                                case NerToolBarItemControl.name:
                                  minimize(context, lastElement);
                                  break;
                                case NerToolBarItemControl.institution:
                                  lastElement.highlightStyle = highlightStyles[
                                      NerToolBarItemControl.institution]!;
                                  lastElement.control =
                                      NerToolBarItemControl.institution;

                                  minimize(context, lastElement);
                                  break;
                                case NerToolBarItemControl.location:
                                  lastElement.highlightStyle = highlightStyles[
                                      NerToolBarItemControl.location]!;

                                  lastElement.control =
                                      NerToolBarItemControl.location;
                                  minimize(context, lastElement);
                                  break;
                                case NerToolBarItemControl.time:
                                  lastElement.highlightStyle = highlightStyles[
                                      NerToolBarItemControl.time]!;
                                  lastElement.control =
                                      NerToolBarItemControl.time;

                                  minimize(context, lastElement);
                                  break;
                                case NerToolBarItemControl.date:
                                  lastElement.highlightStyle = highlightStyles[
                                      NerToolBarItemControl.date]!;

                                  lastElement.control =
                                      NerToolBarItemControl.date;

                                  minimize(context, lastElement);
                                  break;
                                case NerToolBarItemControl.money:
                                  lastElement.highlightStyle = highlightStyles[
                                      NerToolBarItemControl.money]!;

                                  lastElement.control =
                                      NerToolBarItemControl.money;

                                  minimize(context, lastElement);
                                  break;
                                case NerToolBarItemControl.percent:
                                  lastElement.highlightStyle = highlightStyles[
                                      NerToolBarItemControl.percent]!;

                                  lastElement.control =
                                      NerToolBarItemControl.percent;

                                  minimize(context, lastElement);
                                  break;
                                case NerToolBarItemControl.none:
                                  lastElement.highlightStyle = highlightStyles[
                                      NerToolBarItemControl.none]!;
                                  lastElement.control =
                                      NerToolBarItemControl.none;

                                  minimize(context, lastElement,
                                      control: NerToolBarItemControl.none);
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
    // print("-----------------------------rebuild------------------------------");
    return CompositedTransformTarget(
        link: layerLink,
        child: GestureDetector(
          onPanDown: (details) {
            // debugPrint("[details down]:$details");
            clickedPosition = details.localPosition;
          },
          child: SelectableText.rich(
            TextSpan(children: getTextSpanList(context)),
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

  void minimize(BuildContext context, HighlightedOffset lastElement,
      {NerToolBarItemControl? control}) {
    List<HighlightedOffset> offsets =
        context.read<NerLabelingController>().offsets;

    if (control != NerToolBarItemControl.none) {
      if (offsets.isEmpty) {
        context.read<NerLabelingController>().addAll([lastElement]);
        return;
      }

      for (final i in offsets) {
        /// situation 1
        /// ------------
        ///      -----------
        if (i.start <= lastElement.start &&
            i.end <= lastElement.end &&
            i.end >= lastElement.start) {
          if (i.highlightStyle == lastElement.highlightStyle) {
            i.end = lastElement.end;
            i.highlightedText = text.substring(i.start, i.end);
          } else {
            i.end = lastElement.start;
            i.highlightedText = text.substring(i.start, i.end);
            offsets.append(lastElement);
          }
        }

        /// situation 2
        ///      ---------
        /// --------
        if (i.start <= lastElement.end &&
            i.start >= lastElement.start &&
            i.end >= lastElement.end) {
          if (i.highlightStyle == lastElement.highlightStyle) {
            i.start = lastElement.start;
            i.highlightedText = text.substring(i.start, i.end);
          } else {
            i.start = lastElement.end;
            i.highlightedText = text.substring(i.start, i.end);
            offsets.append(lastElement);
          }
        }

        /// situation 3
        /// -------------
        ///     -----
        if (i.start <= lastElement.start &&
            i.end >= lastElement.end &&
            i.length > lastElement.length) {
          if (i.highlightStyle != lastElement.highlightStyle) {
            offsets.remove(i);
            HighlightedOffset e1 = HighlightedOffset(
                i.start,
                lastElement.start,
                text.substring(i.start, lastElement.start),
                i.highlightStyle,
                i.control);

            HighlightedOffset e2 = HighlightedOffset(
                lastElement.end,
                i.end,
                text.substring(lastElement.end, i.end),
                i.highlightStyle,
                i.control);

            offsets.append(e1);
            offsets.append(lastElement);
            offsets.append(e2);
          }
        }

        /// situation 4
        ///      ------
        /// -----------------
        /// situation 5
        ///      ------
        ///      ------
        if (i.start >= lastElement.start && i.end <= lastElement.end) {
          offsets.remove(i);
          // print("=============================");
          // print(offsets.length);
          offsets.append(lastElement);
          // print(offsets.length);
          // print("=============================");
          break;
        }

        /// situation 6
        ///      ------
        ///            ------
        /// situation 7
        ///            ------
        ///      ------
        if (i.end <= lastElement.start || lastElement.end <= i.start) {
          offsets.append(lastElement);
          break;
        }
      }
      offsets.sort((a, b) => a.start.compareTo(b.start));

      context.read<NerLabelingController>().addAll(offsets);
    } else {
      if (offsets.isEmpty) {
        return;
      }
      for (final i in offsets) {
        /// situation 1
        /// ------------
        ///      -----------
        if (i.start <= lastElement.start &&
            i.end <= lastElement.end &&
            i.end >= lastElement.start) {
          i.end = lastElement.start;
          i.highlightedText = text.substring(i.start, i.end);
        }

        /// situation 2
        /// ---------------------
        ///       --------
        if (i.start <= lastElement.start && i.end >= lastElement.end) {
          HighlightedOffset appendElement = HighlightedOffset(
              lastElement.end,
              i.end,
              text.substring(lastElement.end, i.end),
              i.highlightStyle,
              i.control);
          i.end = lastElement.start;
          i.highlightedText = text.substring(i.start, i.end);
          offsets.append(appendElement);
        }

        /// situation 3
        ///        -----------------
        ///  -----------
        if (i.start <= lastElement.end &&
            i.start >= lastElement.start &&
            i.end >= lastElement.end) {
          i.start = lastElement.end;
          i.highlightedText = text.substring(i.start, i.end);
        }

        /// situation 4
        ///       ----------
        ///  --------------------
        if (i.start >= lastElement.start && i.end <= lastElement.end) {
          offsets.remove(i);
        }
      }

      offsets.sort((a, b) => a.start.compareTo(b.start));

      context.read<NerLabelingController>().addAll(offsets);
    }
  }

  List<TextSpan> getTextSpanList(BuildContext context) {
    List<HighlightedOffset> offsets =
        context.watch<NerLabelingController>().offsets;

    List<TextSpan> list = [];
    if (offsets.isEmpty) {
      return [
        TextSpan(text: text, style: highlightStyles[NerToolBarItemControl.none])
      ];
    }
    list.add(TextSpan(
        text: text.substring(0, offsets.first.start),
        style: highlightStyles[NerToolBarItemControl.none]));

    for (int i = 0; i < offsets.length; i++) {
      HighlightedOffset element = offsets[i];
      if (i == 0) {
        list.add(TextSpan(
            text: text.substring(element.start, element.end),
            style: element.highlightStyle));
      } else {
        list.add(TextSpan(
          text: text.substring(offsets[i - 1].end, element.start),
          style: highlightStyles[NerToolBarItemControl.none],
        ));
        list.add(TextSpan(
            text: text.substring(element.start, element.end),
            style: element.highlightStyle));
      }
    }

    list.add(TextSpan(
        text: text.substring(offsets.last.end, text.length),
        style: highlightStyles[NerToolBarItemControl.none]));
    return list;
  }
}
