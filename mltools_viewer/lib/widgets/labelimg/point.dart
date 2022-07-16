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
      _left = rectKey.currentState!.width - pointSize;
    }

    if (widget.key == bottomLeftKey) {
      _top = rectKey.currentState!.height - pointSize;
    }

    if (widget.key == bottomRightKey) {
      _top = rectKey.currentState!.height - pointSize;
      _left = rectKey.currentState!.width - pointSize;
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
              // debugPrint("[left]:$_left");
              // debugPrint("[top]:$_top");

              if (widget.key == bottomRightKey) {
                rectKey.currentState!.setWidth(_left + pointSize);
                rectKey.currentState!.setHeight(_top + pointSize);
                topRightKey.currentState!.setLeft(_left);
                bottomLeftKey.currentState!.setTop(_top);
              }

              if (widget.key == topRightKey) {
                double h = rectKey.currentState!.height;
                rectKey.currentState!.setWidth(_left + pointSize);
                rectKey.currentState!.setHeight(h - _top);
                rectKey.currentState!.addTop(_top);

                bottomRightKey.currentState!.setTop(h - _top - pointSize);
                bottomRightKey.currentState!.setLeft(_left);
                bottomLeftKey.currentState!.setTop(h - _top - pointSize);
                _top = 0;
              }

              if (widget.key == bottomLeftKey) {
                double w = rectKey.currentState!.width;
                rectKey.currentState!.setWidth(w - _left);
                rectKey.currentState!.setHeight(_top + pointSize);

                rectKey.currentState!.addLeft(_left);
                topRightKey.currentState!.setLeft(w - _left - pointSize);
                bottomRightKey.currentState!.setLeft(w - _left - pointSize);
                bottomRightKey.currentState!
                    .setTop(_top + pointSize - pointSize);
                _left = 0;
              }

              if (widget.key == topLeftKey) {
                double h = rectKey.currentState!.height;
                double w = rectKey.currentState!.width;
                rectKey.currentState!.setWidth(w - _left);
                rectKey.currentState!.setHeight(h - _top);
                rectKey.currentState!.addLeft(_left);
                rectKey.currentState!.addTop(_top);

                bottomLeftKey.currentState!.setTop(h - _top - pointSize);
                topRightKey.currentState!.setLeft(w - _left - pointSize);

                bottomRightKey.currentState!.setLeft(w - _left - pointSize);
                bottomRightKey.currentState!.setTop(h - _top - pointSize);

                _left = 0;
                _top = 0;
              }
            });
          },
          child: Container(
              width: pointSize,
              height: pointSize,
              decoration: BoxDecoration(
                color: widget.color,
                borderRadius: BorderRadius.circular(150),
                border: Border.all(color: widget.color, width: 0.5),
              )),
        ));
  }
}
