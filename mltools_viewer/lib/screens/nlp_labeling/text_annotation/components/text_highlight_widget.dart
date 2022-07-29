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
import 'package:mltools_viewer/model/extensions.dart';
import 'package:mltools_viewer/model/ner_highlighted_offset.dart';
import 'package:mltools_viewer/model/ner_models.dart';
import 'package:provider/provider.dart';

/// modified from
/// https://github.com/vilashraj/selectable_text_highlighter/blob/main/lib/text_highlighter_dart

Map<NerItems, TextStyle> highlightStyles = {
  NerItems.name: TextStyle(
    backgroundColor: NerItems.name.getColor(),
    fontSize: 16,
  ),
  NerItems.institution: TextStyle(
    backgroundColor: NerItems.institution.getColor(),
    fontSize: 16,
  ),
  NerItems.location: TextStyle(
    backgroundColor: NerItems.location.getColor(),
    fontSize: 16,
  ),
  NerItems.time: TextStyle(
    backgroundColor: NerItems.time.getColor(),
    fontSize: 16,
  ),
  NerItems.date: TextStyle(
    backgroundColor: NerItems.date.getColor(),
    fontSize: 16,
  ),
  NerItems.money: TextStyle(
    backgroundColor: NerItems.money.getColor(),
    fontSize: 16,
  ),
  NerItems.percent: TextStyle(
    backgroundColor: NerItems.percent.getColor(),
    fontSize: 16,
  ),
  NerItems.none: const TextStyle(
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
                    children: NerItems.values
                        .map((e) => ElevatedButton(
                            onPressed: () {
                              var lastElement = HighlightedOffset(
                                  tempBaseOffset,
                                  tempExtentOffset,
                                  text.substring(
                                    tempBaseOffset,
                                    tempExtentOffset,
                                  ),
                                  highlightStyles[NerItems.name]!,
                                  NerItems.name);
                              switch (e) {
                                case NerItems.name:
                                  minimize(context, lastElement);
                                  break;
                                case NerItems.institution:
                                  lastElement.highlightStyle =
                                      highlightStyles[NerItems.institution]!;
                                  lastElement.itemType = NerItems.institution;

                                  minimize(context, lastElement);
                                  break;
                                case NerItems.location:
                                  lastElement.highlightStyle =
                                      highlightStyles[NerItems.location]!;

                                  lastElement.itemType = NerItems.location;
                                  minimize(context, lastElement);
                                  break;
                                case NerItems.time:
                                  lastElement.highlightStyle =
                                      highlightStyles[NerItems.time]!;
                                  lastElement.itemType = NerItems.time;

                                  minimize(context, lastElement);
                                  break;
                                case NerItems.date:
                                  lastElement.highlightStyle =
                                      highlightStyles[NerItems.date]!;

                                  lastElement.itemType = NerItems.date;

                                  minimize(context, lastElement);
                                  break;
                                case NerItems.money:
                                  lastElement.highlightStyle =
                                      highlightStyles[NerItems.money]!;

                                  lastElement.itemType = NerItems.money;

                                  minimize(context, lastElement);
                                  break;
                                case NerItems.percent:
                                  lastElement.highlightStyle =
                                      highlightStyles[NerItems.percent]!;

                                  lastElement.itemType = NerItems.percent;

                                  minimize(context, lastElement);
                                  break;
                                case NerItems.none:
                                  lastElement.highlightStyle =
                                      highlightStyles[NerItems.none]!;
                                  lastElement.itemType = NerItems.none;

                                  minimize(context, lastElement,
                                      itemType: NerItems.none);
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
      {NerItems? itemType}) {
    List<HighlightedOffset> offsets =
        context.read<NerLabelingController>().getOffsetsByCurrentRowId();

    if (itemType != NerItems.none) {
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
                i.itemType);

            HighlightedOffset e2 = HighlightedOffset(
                lastElement.end,
                i.end,
                text.substring(lastElement.end, i.end),
                i.highlightStyle,
                i.itemType);

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
              i.itemType);
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
        context.watch<NerLabelingController>().getOffsetsByCurrentRowId();

    List<TextSpan> list = [];
    if (offsets.isEmpty) {
      return [TextSpan(text: text, style: highlightStyles[NerItems.none])];
    }
    list.add(TextSpan(
        text: text.substring(0, offsets.first.start),
        style: highlightStyles[NerItems.none]));

    for (int i = 0; i < offsets.length; i++) {
      HighlightedOffset element = offsets[i];
      if (i == 0) {
        list.add(TextSpan(
            text: text.substring(element.start, element.end),
            style: element.highlightStyle));
      } else {
        list.add(TextSpan(
          text: text.substring(offsets[i - 1].end, element.start),
          style: highlightStyles[NerItems.none],
        ));
        list.add(TextSpan(
            text: text.substring(element.start, element.end),
            style: element.highlightStyle));
      }
    }

    list.add(TextSpan(
        text: text.substring(offsets.last.end, text.length),
        style: highlightStyles[NerItems.none]));
    return list;
  }
}
