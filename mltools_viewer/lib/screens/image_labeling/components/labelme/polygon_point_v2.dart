import 'package:flutter/material.dart';

const double pointSize = 20;

class PolygonPointV2 extends StatelessWidget {
  const PolygonPointV2({Key? key, required this.id, required this.polygonId})
      : super(key: key);
  final int id;
  final int polygonId;

  @override
  Widget build(BuildContext context) {
    return Positioned(
        child: GestureDetector(
      onPanUpdate: (details) {
        // setState(() {
        //   defaultLeft += details.delta.dx;
        //   defaultTop += details.delta.dy;
        // });
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
