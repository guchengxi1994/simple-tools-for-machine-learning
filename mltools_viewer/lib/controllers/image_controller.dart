/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-17 17:06:42
 */
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/board_controller.dart';
import 'package:mltools_viewer/model/image_model.dart';
import 'package:mltools_viewer/widgets/labelimg/labelimg_widget.dart';
import 'package:provider/provider.dart';
import 'package:taichi/taichi.dart';

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
            width: context.watch<ImageController>().bndboxPreviewWidth,
            height: context.watch<ImageController>().bndboxPreviewHeight,
          ),
        ));
  }
}

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

  @override
  Widget build(BuildContext context) {
    if (TaichiDevUtils.isMobile) {
      return Container(
        child: context.watch<ImageController>().images.isNotEmpty
            ? Image.memory(
                context.watch<ImageController>().currentImageData,
                scale: context.watch<ImageController>().scale,
                fit: BoxFit.cover,
              )
            : null,
      );
    } else {
      if (context.watch<ImageController>().images.isNotEmpty) {
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
            // debugPrint("[end details]:$details");
            debugPrint("[_left]:$_left");
            debugPrint("[_top]:$_top");
            double rectWidth = _left - _initialLeft;
            double rectHeight = _top - _initialTop;

            context.read<BoardController>().removeWidget(bndBoxPreviewWidget);
            // 后续id需要改一下，暂时定为1
            context.read<BoardController>().addWidget(RectBox(
                  id: 1,
                  left: _initialLeft,
                  top: _initialTop,
                  width: rectWidth,
                  height: rectHeight,
                ));
          },
          child: MouseRegion(
            cursor: SystemMouseCursors.precise,
            child: Image.memory(
              context.watch<ImageController>().currentImageData,
              scale: context.watch<ImageController>().scale,
              fit: BoxFit.cover,
            ),
          ),
        );
      } else {
        return Container();
      }
    }
  }
}

class ImageController extends ChangeNotifier {
  List<MltoolImage?> images = [];
  double scale = 1.0;
  final GlobalKey stackKey = GlobalKey();
  double bndboxPreviewWidth = 0;
  double bndboxPreviewHeight = 0;

  String? get currentImageName =>
      images.isEmpty ? null : images[_currentImageIndex]!.imageName;

  int _currentImageIndex = 0;

  int get currentImageIndex => _currentImageIndex;

  Uint8List get currentImageData => images[_currentImageIndex]!.imageData!;

  changeCurrentIndex(int index) {
    _currentImageIndex = index;
    notifyListeners();
  }

  changeBndboxPreviewWidth(double w) {
    bndboxPreviewWidth = w;
    notifyListeners();
  }

  changeBndboxPreviewHeight(double h) {
    bndboxPreviewHeight = h;
    notifyListeners();
  }

  changeImage(MltoolImage? image) {
    scale = 1.0;
    images = [image];
    _currentImageIndex = 0;
    notifyListeners();
  }

  changeImages(List<MltoolImage?> images) {
    scale = 1.0;
    this.images = images;
    _currentImageIndex = 0;
    notifyListeners();
  }

  zoomIn() {
    scale = scale / 1.2;
    notifyListeners();
  }

  zoomOut() {
    scale = scale * 1.2;
    notifyListeners();
  }

  reset() {
    scale = 1.0;
    notifyListeners();
  }

  changeScale(double s) {
    scale = s;
    notifyListeners();
  }
}
