// ignore_for_file: avoid_init_to_null

import 'dart:convert';
import 'dart:typed_data';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/apis.dart';
import 'package:mltools_viewer/utils/file_picker_utils.dart';

import '_base_tools_screen.dart';

class NoiseScreen extends BaseToolsScreen {
  const NoiseScreen({Key? key}) : super(key: key, barTitle: "图像加噪与去噪");

  @override
  BasePageState<NoiseScreen> getState() => _NoiseScreenState();
}

class _NoiseScreenState extends BasePageState<NoiseScreen> {
  late Uint8List? originImageData = null;
  late Uint8List? noisedImageData = null;
  late Uint8List? denoisedImageData = null;

  @override
  Widget baseBuild(BuildContext context) {
    return SingleChildScrollView(
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
            ],
          ),
          const Divider(
            thickness: 3,
          ),
          const SizedBox(
            height: 20,
          ),
          Wrap(
            children: [
              TextButton(
                  onPressed: () async {
                    if (originImageData == null) {
                      return;
                    }
                    setState(() {
                      isLoading = true;
                    });
                    Response? r = await dioUtils.post(mltoolsApis['noise'],
                        data: {
                          "img": base64Encode(originImageData!),
                          "ntype": 0
                        });

                    if (r != null) {
                      noisedImageData = base64Decode(r.data["data"]["imgData"]);
                      isLoading = false;
                      setState(() {});
                    }
                  },
                  child: const Text("椒盐噪声")),
              TextButton(
                  onPressed: () async {
                    if (originImageData == null) {
                      return;
                    }
                    setState(() {
                      isLoading = true;
                    });
                    Response? r = await dioUtils.post(mltoolsApis['noise'],
                        data: {
                          "img": base64Encode(originImageData!),
                          "ntype": 1
                        });

                    if (r != null) {
                      noisedImageData = base64Decode(r.data["data"]["imgData"]);
                      isLoading = false;
                      setState(() {});
                    }
                  },
                  child: const Text("高斯噪声")),
            ],
          ),
          const Divider(
            thickness: 3,
          ),
          const SizedBox(
            height: 20,
          ),
          Wrap(
            children: [
              TextButton(
                  onPressed: () async {
                    if (noisedImageData == null) {
                      return;
                    }
                    setState(() {
                      isLoading = true;
                    });
                    Response? r = await dioUtils.post(mltoolsApis['denoise'],
                        data: {
                          "img": base64Encode(noisedImageData!),
                          "ntype": 0
                        });

                    if (r != null) {
                      denoisedImageData =
                          base64Decode(r.data["data"]["imgData"]);
                      isLoading = false;
                      setState(() {});
                    }
                  },
                  child: const Text("5*5模板中值滤波")),
              TextButton(
                  onPressed: () async {
                    if (noisedImageData == null) {
                      return;
                    }
                    setState(() {
                      isLoading = true;
                    });
                    Response? r = await dioUtils.post(mltoolsApis['denoise'],
                        data: {
                          "img": base64Encode(noisedImageData!),
                          "ntype": 1
                        });

                    if (r != null) {
                      denoisedImageData =
                          base64Decode(r.data["data"]["imgData"]);
                      isLoading = false;
                      setState(() {});
                    }
                  },
                  child: const Text("5*5模板均值滤波")),
            ],
          ),
          const Divider(
            thickness: 3,
          ),
          const SizedBox(
            height: 20,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              SizedBox(
                width: 0.3 * MediaQuery.of(context).size.width,
                child: originImageData == null
                    ? Container()
                    : Image.memory(
                        originImageData!,
                        fit: BoxFit.fitWidth,
                      ),
              ),
              SizedBox(
                width: 0.3 * MediaQuery.of(context).size.width,
                child: noisedImageData == null
                    ? Container()
                    : Image.memory(
                        noisedImageData!,
                        fit: BoxFit.fitWidth,
                      ),
              ),
              SizedBox(
                width: 0.3 * MediaQuery.of(context).size.width,
                child: denoisedImageData == null
                    ? Container()
                    : Image.memory(
                        denoisedImageData!,
                        fit: BoxFit.fitWidth,
                      ),
              ),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              SizedBox(
                width: 0.3 * MediaQuery.of(context).size.width,
                child: const Center(
                  child: Text("原始图像"),
                ),
              ),
              SizedBox(
                width: 0.3 * MediaQuery.of(context).size.width,
                child: const Center(
                  child: Text("噪声图像"),
                ),
              ),
              SizedBox(
                width: 0.3 * MediaQuery.of(context).size.width,
                child: const Center(
                  child: Text("去噪图像"),
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}
