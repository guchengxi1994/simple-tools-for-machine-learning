import 'dart:convert';
import 'dart:typed_data';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/apis.dart';
import 'package:mltools_viewer/utils/file_picker_utils.dart';

import '_base_tools_screen.dart';

class EdgeDetectionScreen extends BaseToolsScreen {
  const EdgeDetectionScreen({Key? key}) : super(key: key, barTitle: "边缘检测");

  @override
  BasePageState<EdgeDetectionScreen> getState() => _EdgeDetectionScreenState();
}

class _EdgeDetectionScreenState extends BasePageState<EdgeDetectionScreen> {
  // ignore: avoid_init_to_null
  late Uint8List? originImageData = null;
  // ignore: avoid_init_to_null
  late Uint8List? resultImageData = null;

  @override
  Widget baseBuild(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
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
                    setState(() {
                      isLoading = true;
                    });
                    String b64 = base64Encode(originImageData!);
                    Response? r = await dioUtils
                        .post(mltoolsApis['canny'], data: {"imgData": b64});

                    if (r != null) {
                      resultImageData = base64Decode(r.data["data"]["imgData"]);
                      isLoading = false;
                      setState(() {});
                    }
                  },
                  child: const Text("Canny")),
              TextButton(
                  onPressed: () async {
                    if (originImageData == null) {
                      return;
                    }
                    setState(() {
                      isLoading = true;
                    });
                    String b64 = base64Encode(originImageData!);
                    Response? r = await dioUtils
                        .post(mltoolsApis['sobel'], data: {"imgData": b64});

                    if (r != null) {
                      resultImageData = base64Decode(r.data["data"]["imgData"]);
                      isLoading = false;
                      setState(() {});
                    }
                  },
                  child: const Text("Sobel")),
            ],
          ),
          const SizedBox(
            height: 20,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              SizedBox(
                width: 0.4 * MediaQuery.of(context).size.width,
                child: originImageData == null
                    ? Container()
                    : Image.memory(
                        originImageData!,
                        fit: BoxFit.fitWidth,
                      ),
              ),
              SizedBox(
                width: 0.4 * MediaQuery.of(context).size.width,
                child: resultImageData == null
                    ? Container()
                    : Image.memory(
                        resultImageData!,
                        fit: BoxFit.fitWidth,
                      ),
              )
            ],
          )
        ],
      ),
    );
  }
}
