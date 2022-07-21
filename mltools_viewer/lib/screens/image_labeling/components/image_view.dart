import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:mltools_viewer/controllers/board_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:mltools_viewer/model/image_model.dart';
import 'package:provider/provider.dart';
import 'package:taichi/taichi.dart' show TaichiDevUtils;

import 'labelimg/labelimg_widget.dart';
import 'labelme/polygon.dart';
import 'labelme/polygon_point_v2.dart';

/// [BndBoxPreviewWidget] a widget only on desktop and web.
///
/// before we create a bndbox on workboard, a cursor of [precise] will be displayed.
/// then we select a region of the workboard as a bndbnx.
///
/// this widget will be displayed when selecting the region, then will be removed
/// when bndbox is generated.
class BndBoxPreviewWidget extends StatelessWidget {
  const BndBoxPreviewWidget({Key? key, required this.left, required this.top})
      : super(key: key);
  final double left;
  final double top;

  @override
  Widget build(BuildContext context) {
    return Positioned(
        left: left,
        top: top,
        child: Opacity(
          opacity: 0.7,
          child: Container(
            color: Colors.blueAccent,
            // width: context.watch<ImageController>().bndboxPreviewWidth,
            width: context.select<ImageController, double>(
                (value) => value.bndboxPreviewWidth),
            height: context.select<ImageController, double>(
                (value) => value.bndboxPreviewHeight),
          ),
        ));
  }
}

/// [ImageView] a stateful widget showing the image
class ImageView extends StatefulWidget {
  const ImageView({Key? key}) : super(key: key);

  @override
  State<ImageView> createState() => ImageViewState();
}

class ImageViewState extends State<ImageView> {
  @override
  void initState() {
    super.initState();
  }

  late double _initialLeft;
  late double _initialTop;
  late double _left;
  late double _top;
  late BndBoxPreviewWidget bndBoxPreviewWidget;
  late int currentEditingPolygonId = -1;

  @override
  Widget build(BuildContext context) {
    if (context.watch<BoardController>().annotationType ==
        AnnotationType.rect) {
      if (TaichiDevUtils.isMobile) {
        return Container(
          child: context.select<ImageController, List<MltoolImage?>>(
            (value) {
              return value.images;
            },
          ).isEmpty
              ? Image.memory(
                  context.select<ImageController, Uint8List>(
                      (value) => value.currentImageData),
                  scale: context
                      .select<ImageController, double>((value) => value.scale),
                  fit: BoxFit.cover,
                )
              : null,
        );
      } else {
        if (context.select<ImageController, List<MltoolImage?>>(
          (value) {
            return value.images;
          },
        ).isNotEmpty) {
          return GestureDetector(
            onPanDown: (details) {
              debugPrint("[down details]:$details");
              _left = details.localPosition.dx;
              _top = details.localPosition.dy;
              _initialLeft = _left;
              _initialTop = _top;
              bndBoxPreviewWidget = BndBoxPreviewWidget(
                left: _left,
                top: _top,
              );
              context.read<BoardController>().addWidget(bndBoxPreviewWidget);
            },
            onPanUpdate: (details) {
              _left += details.delta.dx;
              _top += details.delta.dy;
              if (_top - _initialTop <= 0 || _left - _initialLeft <= 0) {
                return;
              }
              context
                  .read<ImageController>()
                  .changeBndboxPreviewHeight(_top - _initialTop);
              context
                  .read<ImageController>()
                  .changeBndboxPreviewWidth(_left - _initialLeft);
            },
            onPanEnd: (details) {
              double rectWidth = _left - _initialLeft;
              double rectHeight = _top - _initialTop;

              if (rectWidth <= 0 || rectHeight <= 0) {
                context
                    .read<BoardController>()
                    .removeWidget(bndBoxPreviewWidget);
                return;
              }

              context.read<BoardController>().removeWidget(bndBoxPreviewWidget);
              context.read<ImageController>().bndReset();
              int currentIndex =
                  context.read<BoardController>().currentLabelImgIndex;
              String imageName =
                  context.read<ImageController>().currentImageName ?? '';
              context.read<LabelImgAnnotationController>().addDetail(
                  LabelImgAnnotationDetails(
                      imageName: imageName,
                      id: currentIndex,
                      className: "未定义",
                      xmin: _initialLeft,
                      xmax: (_initialLeft + rectWidth),
                      ymin: _initialTop,
                      ymax: (_initialTop + rectHeight),
                      scale: context.read<ImageController>().scale));
              debugPrint("[currentIndex]:$currentIndex");
              context.read<BoardController>().addWidget(RectBoxV2(
                    imageName: imageName,
                    id: currentIndex,
                  ));
            },
            child: MouseRegion(
              cursor: SystemMouseCursors.precise,
              child: Image.memory(
                context.select<ImageController, Uint8List>(
                    (value) => value.currentImageData),
                scale: context
                    .select<ImageController, double>((value) => value.scale),
                fit: BoxFit.cover,
              ),
            ),
          );
        } else {
          return Container();
        }
      }
    } else {
      return GestureDetector(
        onTapUp: (details) {
          if (context.read<LabelmeAnnotationController>().operationType ==
              PolygonOperationType.create) {
            int currentIndex =
                context.read<LabelmeAnnotationController>().currentPolygonIndex;
            if (!context
                .read<LabelmeAnnotationController>()
                .exists(currentIndex)) {
              String imageName =
                  context.read<ImageController>().currentImageName ?? "";
              double scale = context.read<ImageController>().scale;
              context
                  .read<LabelmeAnnotationController>()
                  .initAPolygon(currentIndex, imageName, scale: scale);
            }

            var x = details.localPosition.dx;
            var y = details.localPosition.dy;

            int id = context
                .read<LabelmeAnnotationController>()
                .getCurrentPolygonListLength(currentIndex);

            PointDetails d = PointDetails(left: x, top: y, id: id);

            context
                .read<LabelmeAnnotationController>()
                .addPolygonPoint(currentIndex, d);

            PolygonPointV2 pointV2 =
                PolygonPointV2(id: id, polygonId: currentIndex);

            // debugPrint("[x]:$x");
            // debugPrint("[y]:$y");

            context.read<BoardController>().addWidget(pointV2);
          }
        },
        onPanDown: (d) {
          if (context.read<LabelmeAnnotationController>().operationType ==
              PolygonOperationType.edit) {
            final details = context.read<LabelmeAnnotationController>().details;
            for (final i in details) {
              if (i.path != null) {
                // print(i.path!.contains(off));
                if (i.path!.contains(d.localPosition)) {
                  setState(() {
                    currentEditingPolygonId = i.polygonId;
                  });
                  break;
                }
              }
            }
          }
        },
        onPanUpdate: (d) {
          // print(currentEditingPolygonId);
          if (context.read<LabelmeAnnotationController>().operationType ==
              PolygonOperationType.edit) {
            if (currentEditingPolygonId != -1) {
              context
                  .read<LabelmeAnnotationController>()
                  .changePolygonPosition(d, currentEditingPolygonId);
            }
          }
        },
        child: CustomPaint(
          foregroundPainter: LinePainter(
              details: context.select<LabelmeAnnotationController,
                  List<LabelmeAnnotationDetails>>((value) => value.details),
              context: context),
          child: Image.memory(
            context.select<ImageController, Uint8List>(
                (value) => value.currentImageData),
            scale:
                context.select<ImageController, double>((value) => value.scale),
            fit: BoxFit.cover,
          ),
        ),
      );
    }
  }
}
