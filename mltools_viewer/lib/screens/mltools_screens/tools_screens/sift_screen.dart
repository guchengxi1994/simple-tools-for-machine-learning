// ignore_for_file: avoid_init_to_null, use_build_context_synchronously

import 'dart:convert';
import 'dart:typed_data';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/apis.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/model/sift_models.dart';
import 'package:mltools_viewer/utils/dio_utils.dart';
import 'package:mltools_viewer/utils/file_picker_utils.dart';
import 'package:mltools_viewer/utils/toast_utils.dart';
import 'package:taichi/taichi.dart' show TaichiOverlay;

class SiftScreen extends StatefulWidget {
  const SiftScreen({Key? key}) : super(key: key);

  @override
  State<SiftScreen> createState() => _SiftScreenState();
}

class _SiftScreenState extends State<SiftScreen> {
  bool isLoading = false;
  DioUtils dioUtils = DioUtils();
  final ScrollController controller = ScrollController();
  final ScrollController controller2 = ScrollController();
  late Uint8List? imgData1 = null;
  late Uint8List? imgData2 = null;
  late double similarity = 0;
  GlobalKey imageKey1 = GlobalKey();
  GlobalKey imageKey2 = GlobalKey();
  late List matches = [];
  late int imageWidth = 0;

  @override
  void dispose() {
    controller.dispose();
    controller2.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return TaichiOverlay.simple(
        isLoading: isLoading,
        child: Scaffold(
          appBar: PreferredSize(
              preferredSize: const Size.fromHeight(AppStyle.appbarHeight),
              child: AppBar(
                title: const Text("图像相似度对比(基于SIFT)"),
                centerTitle: true,
                elevation: 0,
                automaticallyImplyLeading: false,
                backgroundColor: AppStyle.lightBlue,
                leading: InkWell(
                  onTap: () {
                    Navigator.of(context).pop();
                  },
                  child: const Icon(Icons.chevron_left),
                ),
              )),
          body: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              SizedBox(
                height: 100,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    ElevatedButton(
                        onPressed: () async {
                          CustomFilePickerResult result =
                              CustomFilePickerResult();
                          await result.pickAFile(extensions: ["jpg", "png"]);
                          if (result.fileData != null) {
                            imgData1 = result.fileData;
                            matches.clear();
                            setState(() {});
                          }
                        },
                        child: const Padding(
                          padding: EdgeInsets.all(3),
                          child: Text("选择第一张图片"),
                        )),
                    ElevatedButton(
                        onPressed: () async {
                          CustomFilePickerResult result =
                              CustomFilePickerResult();
                          await result.pickAFile(extensions: ["jpg", "png"]);
                          if (result.fileData != null) {
                            imgData2 = result.fileData;
                            matches.clear();
                            setState(() {});
                          }
                        },
                        child: const Padding(
                          padding: EdgeInsets.all(3),
                          child: Text("选择第二张图片"),
                        )),
                    ElevatedButton(
                        onPressed: () async {
                          setState(() {
                            isLoading = true;
                          });

                          if (imgData1 == null || imgData2 == null) {
                            ToastUtils(context).showToast("文件不能为空");
                            setState(() {
                              isLoading = false;
                            });
                            return;
                          }

                          String data1 = base64Encode(imgData1!);
                          String data2 = base64Encode(imgData2!);

                          SiftReq req = SiftReq(img1: data1, img2: data2);
                          Response? res = await dioUtils
                              .post(mltoolsApis['sift'], data: req.toJson());
                          // print(res);
                          if (res != null) {
                            SiftResp resp = SiftResp.fromJson(res.data);
                            if (resp.code != 200) {
                              ToastUtils(context)
                                  .showToast(resp.message ?? "错误");
                            } else {
                              matches = resp.data!.matches!;
                              similarity = resp.data!.similarity!;
                              // print(matches.length);
                              if (imageKey1.currentContext!.size != null) {
                                imageWidth = imageKey1
                                    .currentContext!.size!.width
                                    .ceil();
                              } else {
                                ToastUtils(context)
                                    .showToast(resp.message ?? "无法获取图片宽度");
                              }
                              setState(() {});
                            }
                          } else {
                            ToastUtils(context).showToast("连接服务器异常");
                          }

                          setState(() {
                            isLoading = false;
                          });
                        },
                        child: const Padding(
                          padding: EdgeInsets.all(3),
                          child: Text("计算相似度"),
                        )),
                    Text("相似度：$similarity")
                  ],
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              SizedBox(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height -
                    AppStyle.appbarHeight -
                    120, // height + rowHeight + paddingSize
                child: Scrollbar(
                  thickness: 20,
                  controller: controller2,
                  thumbVisibility: true,
                  child: SingleChildScrollView(
                    controller: controller2,
                    scrollDirection: Axis.horizontal,
                    child: SingleChildScrollView(
                      controller: controller,
                      child: buildRow(),
                    ),
                  ),
                ),
              )
            ],
          ),
        ));
  }

  Widget buildRow() {
    if (matches.isNotEmpty) {
      return CustomPaint(
        foregroundPainter:
            SiftPainter(image1Width: imageWidth, matches: matches),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            imgData1 != null
                ? Image.memory(
                    imgData1!,
                    key: imageKey1,
                  )
                : Container(),
            imgData2 != null
                ? Image.memory(
                    imgData2!,
                    key: imageKey2,
                  )
                : Container(),
          ],
        ),
      );
    }

    return Row(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        imgData1 != null
            ? Image.memory(
                imgData1!,
                key: imageKey1,
              )
            : Container(),
        imgData2 != null
            ? Image.memory(
                imgData2!,
                key: imageKey2,
              )
            : Container(),
      ],
    );
  }
}

List<Color> colors = [
  Colors.blue,
  Colors.red,
  Colors.redAccent,
  Colors.yellow,
  Colors.yellowAccent,
  Colors.blueAccent,
  Colors.green,
  Colors.greenAccent,
];

class SiftPainter extends CustomPainter {
  late double h = AppStyle.appbarHeight + 20 + 100;
  int image1Width;
  List matches;

  SiftPainter({required this.image1Width, required this.matches});

  @override
  void paint(Canvas canvas, Size size) {
    int count = 0;
    for (final i in matches) {
      var line = Paint()
        ..style = PaintingStyle.stroke
        ..color = colors[count % 8]
        ..strokeWidth = 1.0;
      List left = i[0];
      List right = i[1];
      canvas.drawLine(Offset(left[1] * 1.0 + image1Width, right[1] * 1.0),
          Offset(left[0] * 1.0, right[0] * 1.0), line);
      count += 1;
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
