/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-17 19:33:38
 */
import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/board_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:provider/provider.dart';

class ImageLabelingWorkboard extends StatefulWidget {
  const ImageLabelingWorkboard(
      {super.key, required this.boardHeight, required this.boardWidth});
  final double boardWidth;
  final double boardHeight;

  @override
  State<ImageLabelingWorkboard> createState() => _ImageLabelingWorkboardState();
}

class _ImageLabelingWorkboardState extends State<ImageLabelingWorkboard> {
  final ScrollController controller = ScrollController();
  final ScrollController controller2 = ScrollController();

  @override
  void dispose() {
    controller.dispose();
    controller2.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      width: widget.boardWidth,
      height: widget.boardHeight,
      child: Scrollbar(
        thickness: 20,
        controller: controller2,
        thumbVisibility: true,
        child: SingleChildScrollView(
          controller: controller2,
          scrollDirection: Axis.horizontal,
          child: SingleChildScrollView(
            controller: controller,
            child: Stack(
              key: context.read<ImageController>().stackKey,
              children: context
                  .watch<BoardController>()
                  .getRectBoxesByImageName(
                      context.watch<ImageController>().currentImageName ?? ""),
            ),
          ),
        ),
      ),
    );
  }
}
