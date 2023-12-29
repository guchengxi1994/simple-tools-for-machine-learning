// ignore_for_file: unused_local_variable

import 'package:flutter/material.dart';
// ignore: implementation_imports
import 'package:flutter/src/foundation/change_notifier.dart';
import 'dart:math' as math;

import 'package:mltools_viewer/model/ner_models.dart';

/// modified from
/// https://github.com/moneyeSir/flutter_text_selection_controls/blob/master/text_selection_controls/lib/text_selection_controls.dart

const double _kHandleSize = 22.0;

@Deprecated("only works on mobiles")
class NlpAnnotationTextSelectionControls extends TextSelectionControls {
  NlpAnnotationTextSelectionControls(
      {required this.toolBarItems,
      this.horizontalPadding = 16,
      this.verticalPadding = 10})
      : assert(toolBarItems.isNotEmpty);

  final List<NerToolBarItem> toolBarItems;

  /// This controls the amount of horizontal space between each tool bar item
  final double horizontalPadding;

  /// This controls the amount of vertical space between each tool bar item and the text selection tool bar
  final double verticalPadding;

  // This controlls the padding between the toolbar and the anchor.
  static const double _kToolbarContentDistanceBelow = 20.0;
  static const double _kToolbarContentDistance = 8.0;

  void _onItemSelected(
      {required NerToolBarItem item,
      required TextSelectionDelegate delegate,
      required ValueListenable<ClipboardStatus> clipboardStatus}) {
    if (item.itemControl != null) {
      final NerItems control = item.itemControl!;
      switch (control) {
        case NerItems.name:
          debugPrint("${control.getColor()}");
          break;
        case NerItems.institution:
          debugPrint("${control.getColor()}");
          break;
        case NerItems.location:
          debugPrint("${control.getColor()}");
          break;
        case NerItems.time:
          debugPrint("${control.getColor()}");
          break;
        case NerItems.date:
          debugPrint("${control.getColor()}");
          break;
        case NerItems.money:
          debugPrint("${control.getColor()}");
          break;
        case NerItems.none:
          debugPrint("${control.getColor()}");
          break;
        case NerItems.percent:
          debugPrint("${control.getColor()}");
          break;
      }
    }

    final TextEditingValue value = delegate.textEditingValue;
    String highlighted =
        value.text.substring(value.selection.start, value.selection.end);
    delegate.userUpdateTextEditingValue(
      TextEditingValue(
        text: value.text,
        selection: TextSelection.collapsed(offset: value.selection.end),
      ),
      SelectionChangedCause.toolbar,
    );
    delegate.hideToolbar();

    // print(highlighted);
  }

  @override
  Widget buildToolbar(
      BuildContext context,
      Rect globalEditableRegion,
      double textLineHeight,
      Offset selectionMidpoint,
      List<TextSelectionPoint> endpoints,
      TextSelectionDelegate delegate,
      ValueListenable<ClipboardStatus>? clipboardStatus,
      Offset? lastSecondaryTapDownPosition) {
    final TextSelectionPoint startTextSelectionPoint = endpoints[0];
    final TextSelectionPoint endTextSelectionPoint =
        endpoints.length > 1 ? endpoints[1] : endpoints[0];
    final Offset anchorAbove = Offset(
        globalEditableRegion.left + (selectionMidpoint).dx,
        globalEditableRegion.top +
            startTextSelectionPoint.point.dy -
            textLineHeight -
            _kToolbarContentDistance);
    final Offset anchorBelow = Offset(
      globalEditableRegion.left + (selectionMidpoint).dx,
      globalEditableRegion.top +
          endTextSelectionPoint.point.dy +
          _kToolbarContentDistanceBelow,
    );
    return _NerSelectionToolBar(
      anchorAbove: anchorAbove,
      anchorBelow: anchorBelow,
      clipboardStatus: clipboardStatus!,
      toolBarItems: toolBarItems,
      horizontalPadding: horizontalPadding,
      verticalPadding: verticalPadding,
      onItemSelected: (NerToolBarItem item) => _onItemSelected(
          item: item, delegate: delegate, clipboardStatus: clipboardStatus),
    );
  }

  @override
  Widget buildHandle(
      BuildContext context, TextSelectionHandleType type, double textLineHeight,
      [VoidCallback? onTap]) {
    final ThemeData theme = Theme.of(context);
    final Color handleColor =
        TextSelectionTheme.of(context).selectionHandleColor ??
            theme.colorScheme.primary;
    final Widget handle = SizedBox(
      width: _kHandleSize,
      height: _kHandleSize,
      child: CustomPaint(
        painter: _TextSelectionHandlePainter(
          color: handleColor,
        ),
        child: GestureDetector(
          onTap: onTap,
          behavior: HitTestBehavior.translucent,
        ),
      ),
    );

    switch (type) {
      case TextSelectionHandleType.left: // points up-right
        return Transform.rotate(
          angle: math.pi / 2.0,
          child: handle,
        );
      case TextSelectionHandleType.right: // points up-left
        return handle;
      case TextSelectionHandleType.collapsed: // points up
        return Transform.rotate(
          angle: math.pi / 4.0,
          child: handle,
        );
    }
  }

  @override
  Offset getHandleAnchor(TextSelectionHandleType type, double textLineHeight) {
    switch (type) {
      case TextSelectionHandleType.left:
        return const Offset(_kHandleSize, 0);
      case TextSelectionHandleType.right:
        return Offset.zero;
      case TextSelectionHandleType.collapsed:
        return const Offset(_kHandleSize / 2, -4);
    }
  }

  @override
  Size getHandleSize(double textLineHeight) {
    return const Size(_kHandleSize, _kHandleSize);
  }

  // @override
  // Widget buildToolbar(BuildContext context, Rect globalEditableRegion, double textLineHeight, Offset selectionMidpoint, List<TextSelectionPoint> endpoints, TextSelectionDelegate delegate, ValueListenable<ClipboardStatus>? clipboardStatus, Offset? lastSecondaryTapDownPosition) {
  //   // TODO: implement buildToolbar
  //   throw UnimplementedError();
  // }
}

class _NerSelectionToolBar extends StatefulWidget {
  const _NerSelectionToolBar(
      {required this.anchorAbove,
      required this.anchorBelow,
      required this.clipboardStatus,
      required this.toolBarItems,
      required this.onItemSelected,
      required this.horizontalPadding,
      required this.verticalPadding});

  /// The focal point above which the toolbar attempts to position itself.
  final Offset anchorAbove;

  /// The focal point below which the toolbar attempts to position itself, if it doesn't fit above [anchorAbove].
  final Offset anchorBelow;

  ///A [ValueNotifier] whose [value] indicates whether the current contents of the clipboard can be pasted.
  final ValueListenable<ClipboardStatus> clipboardStatus;

  /// Widgets to be displayed on the text selection tool bar
  final List<NerToolBarItem> toolBarItems;

  /// A callback function when a [BarItem] is pressed
  final Function(NerToolBarItem) onItemSelected;

  /// This controls the amount of vertical space between each tool bar item
  final double horizontalPadding;

  /// This controls the amount of vertical space between each tool bar item and the text selection tool bar
  final double verticalPadding;

  @override
  State<_NerSelectionToolBar> createState() => __NerSelectionToolBarState();
}

class __NerSelectionToolBarState<T extends BaseToolBarItem>
    extends State<_NerSelectionToolBar> {
  void _onChangedClipboardStatus() {
    if (mounted) setState(() {});
  }

  @override
  void initState() {
    super.initState();
    widget.clipboardStatus.addListener(_onChangedClipboardStatus);
    // widget.clipboardStatus.update();
  }

  @override
  void didUpdateWidget(_NerSelectionToolBar oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.clipboardStatus != oldWidget.clipboardStatus) {
      widget.clipboardStatus.addListener(_onChangedClipboardStatus);
      oldWidget.clipboardStatus.removeListener(_onChangedClipboardStatus);
    }
    // widget.clipboardStatus.update();
  }

  @override
  void dispose() {
    widget.clipboardStatus.removeListener(_onChangedClipboardStatus);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return TextSelectionToolbar(
      anchorAbove: widget.anchorAbove,
      anchorBelow: widget.anchorBelow,
      toolbarBuilder: (BuildContext context, Widget child) {
        return Card(child: child);
      },
      children: widget.toolBarItems.map((e) {
        return itemButton(
            item: e,
            horizontalPadding: widget.horizontalPadding,
            verticalPadding: widget.verticalPadding);
      }).toList(),
    );
  }

  Widget itemButton(
      {required NerToolBarItem item,
      required double horizontalPadding,
      required double verticalPadding}) {
    return InkWell(
      onTap: () {
        widget.onItemSelected(item);
      },
      child: Padding(
        padding: EdgeInsets.symmetric(
            vertical: verticalPadding, horizontal: horizontalPadding),
        child: (item).item,
      ),
    );
  }
}

abstract class BaseToolBarItem {}

typedef ItemPressed = void Function(
    String highlightedText, int startIndex, int endIndex);

/// NerToolBarItem
/// This requires a widget[item] which will be shown on the text selection tool bar when a text is highlighted
/// This class also gives you an option to choose between...
/// ... flutter text selection controls[Named Entity Recognition] or custom controls
class NerToolBarItem extends BaseToolBarItem {
  NerToolBarItem({required this.item, this.itemControl});

  /// The widget which will be shown on the text selection tool bar when a text is highlighted
  final Widget item;

  final NerItems? itemControl;
}

class _TextSelectionHandlePainter extends CustomPainter {
  _TextSelectionHandlePainter({required this.color});

  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final Paint paint = Paint()..color = color;
    final double radius = size.width / 2.0;
    final Rect circle =
        Rect.fromCircle(center: Offset(radius, radius), radius: radius);
    final Rect point = Rect.fromLTWH(0.0, 0.0, radius, radius);
    final Path path = Path()
      ..addOval(circle)
      ..addRect(point);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(_TextSelectionHandlePainter oldPainter) {
    return color != oldPainter.color;
  }
}
