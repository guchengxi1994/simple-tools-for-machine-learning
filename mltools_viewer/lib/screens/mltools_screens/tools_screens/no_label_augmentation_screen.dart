// ignore_for_file: use_build_context_synchronously

import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/apis.dart';
import 'package:mltools_viewer/controllers/no_label_aug_controller.dart';
import 'package:mltools_viewer/utils/file_picker_utils.dart';
import 'package:provider/provider.dart';

import '../components/image_download_widget.dart';
import '_base_tools_screen.dart';

class NoLabelAugmentationScreen extends BaseToolsScreen {
  const NoLabelAugmentationScreen({Key? key})
      : super(
          key: key,
          barTitle: "图像增广(无标注)",
        );

  @override
  BasePageState<NoLabelAugmentationScreen> getState() =>
      _NoLabelAugmentationScreenState();
}

class _NoLabelAugmentationScreenState
    extends BasePageState<NoLabelAugmentationScreen> {
  List<ImageDownloadWidget> images = [];
  // ignore: avoid_init_to_null
  late Uint8List? originImageData = null;
  late String savedPath = "";
  late Timer? _timer;

  final ScrollController bodyController = ScrollController();
  final ScrollController processController = ScrollController();

  @override
  void dispose() {
    bodyController.dispose();
    processController.dispose();
    try {
      stopTimer();
    } catch (_) {}

    super.dispose();
  }

  void stopTimer() {
    _timer?.cancel();
    debugPrint("timer canceled");
  }

  startTimer(String path) async {
    List<AugImgInfo> imgInfo = context.read<NolabelAugController>().imgInfo;
    _timer = Timer.periodic(const Duration(seconds: 1), (t) async {
      bool allDone = true;
      for (final i in imgInfo) {
        if (i.imgData == null) {
          allDone = false;
          switch (i.augType) {
            case "crop":
              Response? r = await dioUtils.post(mltoolsApis['augNoLabelcrop'],
                  data: {"folderName": path});
              if (r != null) {
                if (r.data["data"]["imgData"] != null) {
                  context.read<NolabelAugController>().changeInfo(
                      AugImgInfo(
                          augType: i.augType,
                          imgData: base64Decode(r.data["data"]["imgData"])),
                      0);
                }
              }
              break;
            case "distort":
              Response? r = await dioUtils.post(
                  mltoolsApis['augNoLabeldistort'],
                  data: {"folderName": path});
              if (r != null) {
                if (r.data["data"]["imgData"] != null) {
                  context.read<NolabelAugController>().changeInfo(
                      AugImgInfo(
                          augType: i.augType,
                          imgData: base64Decode(r.data["data"]["imgData"])),
                      1);
                }
              }
              break;
            case "noise":
              Response? r = await dioUtils.post(mltoolsApis['augNoLabelnoise'],
                  data: {"folderName": path});
              if (r != null) {
                if (r.data["data"]["imgData"] != null) {
                  context.read<NolabelAugController>().changeInfo(
                      AugImgInfo(
                          augType: i.augType,
                          imgData: base64Decode(r.data["data"]["imgData"])),
                      2);
                }
              }

              break;
            case "rotation":
              Response? r = await dioUtils.post(
                  mltoolsApis['augNoLabelrotation'],
                  data: {"folderName": path});
              if (r != null) {
                if (r.data["data"]["imgData"] != null) {
                  context.read<NolabelAugController>().changeInfo(
                      AugImgInfo(
                          augType: i.augType,
                          imgData: base64Decode(r.data["data"]["imgData"])),
                      3);
                }
              }
              break;
            case "trans":
              Response? r = await dioUtils.post(mltoolsApis['augNoLabeltrans'],
                  data: {"folderName": path});
              if (r != null) {
                if (r.data["data"]["imgData"] != null) {
                  context.read<NolabelAugController>().changeInfo(
                      AugImgInfo(
                          augType: i.augType,
                          imgData: base64Decode(r.data["data"]["imgData"])),
                      4);
                }
              }
              break;
            case "zoom":
              Response? r = await dioUtils.post(mltoolsApis['augNoLabelzoom'],
                  data: {"folderName": path});
              if (r != null) {
                if (r.data["data"]["imgData"] != null) {
                  context.read<NolabelAugController>().changeInfo(
                      AugImgInfo(
                          augType: i.augType,
                          imgData: base64Decode(r.data["data"]["imgData"])),
                      5);
                }
              }
              break;
          }
        }
      }

      if (allDone) {
        stopTimer();
      }
    });
  }

  @override
  Widget baseBuild(BuildContext context) {
    return SingleChildScrollView(
      controller: bodyController,
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Row(
            children: [
              TextButton(
                  onPressed: () async {
                    CustomFilePickerResult result = CustomFilePickerResult();
                    await result.pickAFile(extensions: ['jpg', 'png']);
                    if (result.fileData != null) {
                      setState(() {
                        originImageData = result.fileData;
                      });
                    }
                  },
                  child: const Text("选择图像")),
              TextButton(
                  onPressed: () async {
                    if (originImageData == null) {
                      return;
                    }
                    String b64 = base64Encode(originImageData!);
                    Response? r = await dioUtils.post(mltoolsApis['augNoLabel'],
                        data: {"imgData": b64});

                    // print(r);
                    if (r != null) {
                      savedPath = r.data['data']['savedPath'];
                      // print(savedPath);
                      context.read<NolabelAugController>().addAll([
                        AugImgInfo(augType: "crop", imgData: null),
                        AugImgInfo(augType: "distort", imgData: null),
                        AugImgInfo(augType: "noise", imgData: null),
                        AugImgInfo(augType: "rotation", imgData: null),
                        AugImgInfo(augType: "trans", imgData: null),
                        AugImgInfo(augType: "zoom", imgData: null)
                      ]);
                      setState(() {
                        images = [
                          ImageDownloadWidget(
                            augType: "crop",
                          ),
                          ImageDownloadWidget(
                            augType: "distort",
                          ),
                          ImageDownloadWidget(
                            augType: "noise",
                          ),
                          ImageDownloadWidget(
                            augType: "rotation",
                          ),
                          ImageDownloadWidget(
                            augType: "trans",
                          ),
                          ImageDownloadWidget(
                            augType: "zoom",
                          ),
                        ];
                      });

                      startTimer(savedPath);
                    }
                  },
                  child: const Text("开始")),
            ],
          ),
          SingleChildScrollView(
            controller: processController,
            scrollDirection: Axis.horizontal,
            child: originImageData != null
                ? SizedBox(
                    height: 500,
                    child: Row(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(20),
                          child: SizedBox(
                              width: 400,
                              height: 400,
                              child: Image.memory(originImageData!)),
                        ),
                        Wrap(
                          //主轴间距
                          spacing: 8,
                          //纵轴间距
                          runSpacing: 4,
                          //布局方向
                          direction: Axis.vertical,
                          children: images,
                        )
                      ],
                    ),
                  )
                : Container(),
          ),
        ],
      ),
    );
  }
}
