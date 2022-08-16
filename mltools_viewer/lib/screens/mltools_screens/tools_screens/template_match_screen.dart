import 'dart:convert';
import 'dart:typed_data';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/apis.dart';
import 'package:mltools_viewer/utils/file_picker_utils.dart';

import '_base_tools_screen.dart';

class TemplateMatchScreen extends BaseToolsScreen {
  const TemplateMatchScreen({Key? key})
      : super(key: key, barTitle: "opencv模板匹配demo");

  @override
  BasePageState<TemplateMatchScreen> getState() => _TemplateMatchScreenState();
}

class _TemplateMatchScreenState extends BasePageState<TemplateMatchScreen> {
  // ignore: avoid_init_to_null
  late Uint8List? originImageData = null;
  // ignore: avoid_init_to_null
  late Uint8List? template = null;
  // ignore: avoid_init_to_null
  late Uint8List? resultImageData = null;

  final List<DropdownMenuItem<int>> items = [
    const DropdownMenuItem(
      value: 0,
      child: Text("TM_SQDIFF(方差匹配)"),
    ),
    const DropdownMenuItem(
      value: 1,
      child: Text("TM_SQDIFF_NORMED(归一化方差匹配)"),
    ),
    const DropdownMenuItem(
      value: 2,
      child: Text("TM_CCORR(相关性匹配)"),
    ),
    const DropdownMenuItem(
      value: 3,
      child: Text("TM_CCORR_NORMED(归一化相关性匹配)"),
    ),
    const DropdownMenuItem(
      value: 4,
      child: Text("TM_CCOEFF(相关系数匹配)"),
    ),
    const DropdownMenuItem(
      value: 5,
      child: Text("TM_CCOEFF_NORMED(归一化相关系数匹配)"),
    ),
  ];

  var selectItemValue = 0;

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
                    CustomFilePickerResult result = CustomFilePickerResult();
                    await result.pickAFile(extensions: ['jpg', 'png']);
                    if (result.fileData != null) {
                      setState(() {
                        template = result.fileData;
                      });
                    }
                  },
                  child: const Text("上传模板样式")),
              DropdownButton<int>(
                  items: items,
                  hint: const Text('请选择一种方法'),
                  value: selectItemValue,
                  onChanged: (v) {
                    setState(() {
                      if (v != null) {
                        selectItemValue = v;
                        setState(() {});
                      }
                    });
                  }),
              TextButton(
                  onPressed: () async {
                    setState(() {
                      isLoading = true;
                    });
                    if (template == null || originImageData == null) {
                      return;
                    }
                    String imgData = base64Encode(originImageData!);
                    String templateData = base64Encode(template!);

                    Response? res = await dioUtils
                        .post(mltoolsApis['template_match'], data: {
                      "img": imgData,
                      "template": templateData,
                      "method": selectItemValue
                    });

                    if (res != null && res.data['code'] == 200) {
                      resultImageData =
                          base64Decode(res.data["data"]["imgData"]);
                      debugPrint(res.data["data"]["similarity"].toString());
                    }
                    setState(() {
                      isLoading = false;
                    });
                  },
                  child: const Text("模板匹配")),
            ],
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
                child: template == null
                    ? Container()
                    : Image.memory(
                        template!,
                      ),
              ),
              SizedBox(
                width: 0.3 * MediaQuery.of(context).size.width,
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
