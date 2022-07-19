// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';

const double pointSize = 20;

class PolygonEntity {
  List<PolygonPoint> pList;
  List<GlobalKey<PolygonPointState>> keyList;
  String className;
  int index;
  PolygonEntity(
      {required this.pList,
      required this.keyList,
      required this.className,
      required this.index});
}

class PolygonPoint extends StatefulWidget {
  PolygonPoint(
      {Key? key,
      required this.index,
      required this.poffset,
      required this.isFirst})
      : super(key: key);

  Offset poffset;
  int index;
  bool isFirst;

  @override
  State<PolygonPoint> createState() => PolygonPointState();

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return index.toString();
  }
}

class PolygonPointState extends State<PolygonPoint> {
  late Offset offset;

  late double defaultLeft;
  late double defaultTop;

  @override
  void initState() {
    super.initState();
    offset = widget.poffset;
    defaultLeft = offset.dx;
    defaultTop = offset.dy;
  }

  moveTO(Offset offset_) {
    setState(() {
      defaultLeft = offset_.dx;
      defaultTop = offset_.dy;
    });
  }

  List<PolygonPoint> getAllPoints() {
    List<PolygonPoint> points = [];

    /// impl
    return points;
  }

  List<GlobalKey<PolygonPointState>> getAllKeys() {
    List<GlobalKey<PolygonPointState>> keys = [];

    /// impl
    return keys;
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
        left: defaultLeft,
        top: defaultTop,
        child: GestureDetector(
          onPanUpdate: (details) {
            setState(() {
              defaultLeft += details.delta.dx;
              defaultTop += details.delta.dy;
            });
          },
          child: Container(
              width: pointSize,
              height: pointSize,
              decoration: BoxDecoration(
                color: Colors.red,
                borderRadius: BorderRadius.circular(150),
                border: Border.all(color: Colors.red, width: 0.5),
              )),
        ));
  }
}
