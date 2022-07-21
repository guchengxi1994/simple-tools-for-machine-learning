import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:provider/provider.dart';

const pointSize = 20;

class LinePainter extends CustomPainter {
  // List<PolygonEntity> listPolygonEntity;
  List<LabelmeAnnotationDetails> details;
  BuildContext context;

  LinePainter({required this.details, required this.context});

  var line = Paint()
    ..style = PaintingStyle.stroke
    ..color = Colors.blue
    ..strokeWidth = 1.0;
  var impaint = Paint()
    ..style = PaintingStyle.fill
    ..color = Colors.blue.withOpacity(0.5);
  @override
  void paint(Canvas canvas, Size size) {
    if (details.isNotEmpty) {
      for (LabelmeAnnotationDetails polygonEntity in details) {
        if (polygonEntity.points.length < 2) return;

        if (polygonEntity.points.length == 2) {
          for (int i = 1; i < polygonEntity.points.length; i++) {
            canvas.drawLine(
                Offset(polygonEntity.points[i - 1].left + 0.5 * pointSize,
                    polygonEntity.points[i - 1].top + 0.5 * pointSize),
                Offset(polygonEntity.points[i].left + 0.5 * pointSize,
                    polygonEntity.points[i].top + 0.5 * pointSize),
                line);

            canvas.drawLine(
                Offset(polygonEntity.points.last.left + 0.5 * pointSize,
                    polygonEntity.points.last.top + 0.5 * pointSize),
                Offset(polygonEntity.points.last.left + 0.5 * pointSize,
                    polygonEntity.points.last.top + 0.5 * pointSize),
                line);
          }
        }

        if (polygonEntity.points.length >= 3) {
          Path path = Path();

          path.moveTo(polygonEntity.points.first.left + 0.5 * pointSize,
              polygonEntity.points.first.top + 0.5 * pointSize);
          for (int i = 1; i < polygonEntity.points.length; i++) {
            path.lineTo(polygonEntity.points[i].left + 0.5 * pointSize,
                polygonEntity.points[i].top + 0.5 * pointSize);
          }
          path.close();
          // print(path);
          context
              .read<LabelmeAnnotationController>()
              .updatePath(polygonEntity.polygonId, path);
          canvas.drawShadow(path, Colors.black, 8.0, true);
          canvas.drawPath(path, impaint);
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
