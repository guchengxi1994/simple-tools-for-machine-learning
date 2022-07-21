import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:provider/provider.dart';

const double pointSize = 20;

class PolygonPointV2 extends StatelessWidget {
  const PolygonPointV2({Key? key, required this.id, required this.polygonId})
      : super(key: key);
  final int id;
  final int polygonId;

  @override
  Widget build(BuildContext context) {
    return Positioned(
        left: context
            .watch<LabelmeAnnotationController>()
            .getPointLeft(polygonId, id),
        top: context
            .watch<LabelmeAnnotationController>()
            .getPointTop(polygonId, id),
        child: GestureDetector(
          onPanUpdate: (details) {
            context
                .read<LabelmeAnnotationController>()
                .changePolygonPointPosition(details, polygonId, id);
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
