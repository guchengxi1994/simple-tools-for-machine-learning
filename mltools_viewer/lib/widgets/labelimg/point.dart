// ignore_for_file: must_be_immutable, library_private_types_in_public_api, prefer_typing_uninitialized_variables, no_leading_underscores_for_local_identifiers

part of "./labelimg_widget.dart";

class Point extends StatefulWidget {
  Point(
      {required Key key,
      required this.color,
      required this.woffset,
      required this.globalKeys,
      required this.rectKey})
      : super(key: key);

  Color color;
  Offset woffset;
  List<GlobalKey> globalKeys;
  GlobalKey<_RectState> rectKey;

  @override
  _PointState createState() => _PointState();
}

class _PointState extends State<Point> {
  late Offset offset;

  double _left = 0;
  double _top = 0;

  double _moveX = 0;
  double _moveY = 0;

  late Offset currentOffset;

  void setLeft(double left) {
    setState(() {
      _left = left.toDouble();
    });
  }

  void setTop(double top) {
    setState(() {
      _top = top.toDouble();
    });
  }

  var topLeftKey;
  var topRightKey;
  var bottomLeftKey;
  var bottomRightKey;
  var rectKey;

  @override
  void initState() {
    super.initState();
    topLeftKey = widget.globalKeys[0];
    topRightKey = widget.globalKeys[1];
    bottomLeftKey = widget.globalKeys[2];
    bottomRightKey = widget.globalKeys[3];
    rectKey = widget.rectKey;
    offset = widget.woffset;

    if (widget.key == topRightKey) {
      _left = rectKey.currentState!.width - circleSize;
    }

    if (widget.key == bottomLeftKey) {
      _top = rectKey.currentState!.height - circleSize;
    }

    if (widget.key == bottomRightKey) {
      _top = rectKey.currentState!.height - circleSize;
      _left = rectKey.currentState!.width - circleSize;
    }
    // print(this.offset);
  }

  moveTO(Offset offset, {bool b = true}) {
    // print(offset);
    setState(() {
      this.offset = offset;
      if (b) {
        _left = offset.dx - rectKey.currentState!.defaultLeft;
        _top = offset.dy - rectKey.currentState!.defaultTop;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
        left: _left,
        top: _top,
        child: GestureDetector(
          onPanUpdate: (details) {
            setState(() {
              _left += details.delta.dx;
              _top += details.delta.dy;
              rectKey.currentState!.setWidth(_left + circleSize);
              // if (_left>rectKey.currentState!.width)
              // debugPrint("[left]:$_left");
              // debugPrint("[top]:$_top");
            });
          },
          child: Container(
              width: circleSize,
              height: circleSize,
              decoration: BoxDecoration(
                color: widget.color,
                borderRadius: BorderRadius.circular(150),
                border: Border.all(color: widget.color, width: 0.5),
              )),
        ));

    // return Positioned(
    //     left: _left,
    //     top: _top,
    //     child: Draggable(
    //         onDraggableCanceled: (Velocity velocity, Offset _offset) {
    //           // print(_offset);
    //           currentOffset = offset;
    //           Offset topLeftOffset = topLeftKey.currentState!.offset;
    //           Offset topRightOffset = topRightKey.currentState!.offset;
    //           Offset bottomLeftOffset = bottomLeftKey.currentState!.offset;
    //           Offset bottomRightOffset = bottomRightKey.currentState!.offset;

    //           // print("左上:" + topLeftOffset.toString());
    //           // print("右上:" + topRightOffset.toString());
    //           // print("左下:" + bottomLeftOffset.toString());
    //           // print("右下:" + bottomRightOffset.toString());

    //           _moveX = _offset.dx - currentOffset.dx;
    //           _moveY = _offset.dx - currentOffset.dx;
    //           if (widget.key == topLeftKey) {
    //             topLeftOffset = _offset;
    //             topRightOffset = Offset(topRightOffset.dx, _offset.dy);
    //             bottomLeftOffset = Offset(_offset.dx, bottomLeftOffset.dy);
    //           }

    //           if (widget.key == topRightKey) {
    //             topLeftOffset = Offset(topLeftOffset.dx, _offset.dy);
    //             topRightOffset = _offset;
    //             bottomRightOffset = Offset(_offset.dx, bottomRightOffset.dy);
    //           }

    //           if (widget.key == bottomLeftKey) {
    //             bottomLeftOffset = _offset;
    //             topLeftOffset = Offset(_offset.dx, topLeftOffset.dy);
    //             bottomRightOffset = Offset(bottomRightOffset.dx, _offset.dy);
    //           }

    //           if (widget.key == bottomRightKey) {
    //             bottomRightOffset = _offset;
    //             topRightOffset = Offset(_offset.dx + _moveX, _offset.dy);
    //             bottomLeftOffset = Offset(_offset.dx, _offset.dy + _moveY);
    //           }

    //           topLeftKey.currentState!.moveTO(topLeftOffset);
    //           topRightKey.currentState!.moveTO(topRightOffset);
    //           bottomLeftKey.currentState!.moveTO(bottomLeftOffset);
    //           bottomRightKey.currentState!.moveTO(bottomRightOffset);

    //           // print("--------------------------------------------");
    //           // print("左上:" + topLeftOffset.toString());
    //           // print("右上:" + topRightOffset.toString());
    //           // print("左下:" + bottomLeftOffset.toString());
    //           // print("右下:" + bottomRightOffset.toString());

    //           late double width;
    //           late double height;

    //           width = (topLeftKey.currentState!.offset.dx -
    //                       bottomRightKey.currentState!.offset.dx)
    //                   .abs() +
    //               circleSize;

    //           height = (topLeftKey.currentState!.offset.dy -
    //                       bottomRightKey.currentState!.offset.dy)
    //                   .abs() +
    //               circleSize;

    //           // print("========================");
    //           // print(width);
    //           // print(height);
    //           // print("========================");

    //           rectKey.currentState!.setHeight(height);
    //           rectKey.currentState!.setWidth(width);

    //           topLeftKey.currentState!.setLeft(0.0);
    //           topLeftKey.currentState!.setTop(0.0);

    //           topRightKey.currentState!.setLeft(width - circleSize);
    //           topRightKey.currentState!.setTop(0.0);

    //           bottomLeftKey.currentState!.setLeft(0.0);
    //           bottomLeftKey.currentState!.setTop(height - circleSize);

    //           bottomRightKey.currentState!.setLeft(width - circleSize);
    //           bottomRightKey.currentState!.setTop(height - circleSize);

    //           // print(topRightKey.currentState!.offset);
    //           // print(topLeftKey.currentState!.offset);
    //           // print("========================");

    //           rectKey.currentState!.moveTo(topLeftKey.currentState!.offset);
    //         },
    //         feedback: Container(
    //             width: circleSize,
    //             height: circleSize,
    //             decoration: BoxDecoration(
    //                 color: Colors.transparent,
    //                 borderRadius: BorderRadius.circular(150),
    //                 border: Border.all(color: widget.color, width: 0.5))),
    //         child: Container(
    //             width: circleSize,
    //             height: circleSize,
    //             decoration: BoxDecoration(
    //               color: Colors.transparent,
    //               borderRadius: BorderRadius.circular(150),
    //               border: Border.all(color: widget.color, width: 0.5),
    //             ))));
  }
}
