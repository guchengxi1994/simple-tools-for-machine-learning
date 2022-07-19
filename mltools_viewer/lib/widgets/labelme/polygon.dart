import 'package:flutter/material.dart';
import 'package:mltools_viewer/widgets/labelme/polygon_point.dart';

class LinePainter extends CustomPainter {
  List<PolygonEntity> listPolygonEntity;

  LinePainter({required this.listPolygonEntity});

  var line = Paint()
    ..style = PaintingStyle.stroke
    ..color = Colors.blue
    ..strokeWidth = 1.0;
  @override
  void paint(Canvas canvas, Size size) {
    if (listPolygonEntity.isNotEmpty) {
      for (PolygonEntity polygonEntity in listPolygonEntity) {
        if (polygonEntity.pList.length < 2) return;

        if (polygonEntity.pList.length == 2) {
          for (int i = 1; i < polygonEntity.pList.length; i++) {
            canvas.drawLine(
                Offset(
                    polygonEntity.keyList[i - 1].currentState!.defaultLeft +
                        0.5 * pointSize,
                    polygonEntity.keyList[i - 1].currentState!.defaultTop +
                        0.5 * pointSize),
                Offset(
                    polygonEntity.keyList[i].currentState!.defaultLeft +
                        0.5 * pointSize,
                    polygonEntity.keyList[i].currentState!.defaultTop +
                        0.5 * pointSize),
                line);

            canvas.drawLine(
                Offset(
                    polygonEntity.keyList.last.currentState!.defaultLeft +
                        0.5 * pointSize,
                    polygonEntity.keyList.last.currentState!.defaultTop +
                        0.5 * pointSize),
                Offset(
                    polygonEntity.keyList.first.currentState!.defaultLeft +
                        0.5 * pointSize,
                    polygonEntity.keyList.first.currentState!.defaultTop +
                        0.5 * pointSize),
                line);
          }
        }

        if (polygonEntity.pList.length >= 3) {
          Path path = Path();
          var paint = Paint()
            ..style = PaintingStyle.fill
            ..color = Colors.blue.withOpacity(0.5);
          path.moveTo(
              polygonEntity.keyList.first.currentState!.defaultLeft +
                  0.5 * pointSize,
              polygonEntity.keyList.first.currentState!.defaultTop +
                  0.5 * pointSize);
          for (int i = 1; i < polygonEntity.pList.length; i++) {
            path.lineTo(
                polygonEntity.keyList[i].currentState!.defaultLeft +
                    0.5 * pointSize,
                polygonEntity.keyList[i].currentState!.defaultTop +
                    0.5 * pointSize);
          }
          path.close();
          // print(path);
          canvas.drawShadow(path, Colors.black, 8.0, true);
          canvas.drawPath(path, paint);
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
