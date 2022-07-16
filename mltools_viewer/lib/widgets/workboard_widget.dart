/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-16 23:27:52
 */
import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/board_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:provider/provider.dart';

class Workboard extends StatefulWidget {
  const Workboard(
      {Key? key, required this.boardHeight, required this.boardWidth})
      : super(key: key);
  final double boardWidth;
  final double boardHeight;

  @override
  State<Workboard> createState() => _WorkboardState();
}

class _WorkboardState extends State<Workboard> {
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
        controller: controller2,
        thumbVisibility: true,
        child: SingleChildScrollView(
          controller: controller2,
          scrollDirection: Axis.horizontal,
          child: SingleChildScrollView(
            controller: controller,
            child: Stack(
              key: context.read<ImageController>().stackKey,
              children: context.watch<BoardController>().boardWidgets,
            ),
          ),
        ),
      ),
    );
  }
}
