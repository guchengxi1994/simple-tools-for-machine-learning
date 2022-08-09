// ignore_for_file: use_build_context_synchronously

import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/custon_ner_labeling_controller.dart';
import 'package:mltools_viewer/controllers/ner_labeling_controller.dart';
import 'package:mltools_viewer/controllers/nlp_classification_controller.dart';
import 'package:mltools_viewer/model/mltool_ner_save_model.dart';
import 'package:mltools_viewer/model/mltools_nlp_classification_model.dart';
import 'package:mltools_viewer/model/ner_file_info.dart';
import 'package:mltools_viewer/model/ner_highlighted_offset.dart';
import 'package:mltools_viewer/utils/file_picker_utils.dart';
import 'package:provider/provider.dart';
import 'package:tuple/tuple.dart';

class FilePickerDialog extends StatefulWidget {
  const FilePickerDialog({Key? key, required this.ctx, required this.nerType})
      : super(key: key);
  final BuildContext ctx;
  final int nerType;

  @override
  State<FilePickerDialog> createState() => _FilePickerDialogState();
}

class _FilePickerDialogState extends State<FilePickerDialog> {
  final TextEditingController controller = TextEditingController();
  late int fileLength = 0;
  late int fileRows = 0;

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return UnconstrainedBox(
      child: SizedBox(
        height: 300,
        width: 500,
        child: Dialog(
            child: Container(
          padding: const EdgeInsets.all(20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  SizedBox(
                    width: 280,
                    // height: 50,
                    child: TextField(
                      controller: controller,
                      decoration: AppStyle.getInputDecotation(),
                      enabled: false,
                    ),
                  ),
                  TextButton(
                      onPressed: () {
                        Future.delayed(Duration.zero).then((value) async {
                          NerFileInfo? info;
                          CustomFilePickerResult customFilePickerResult =
                              CustomFilePickerResult();
                          await customFilePickerResult
                              .pickAFile(extensions: ['txt']);
                          if (customFilePickerResult.fileName != null) {
                            controller.text = customFilePickerResult.fileName!;
                            String fileData =
                                utf8.decode(customFilePickerResult.fileData!);
                            fileData += "\n";
                            int rows = 0;
                            Map<int, Tuple2<int, int>> rowsCount = {};

                            for (int i = 0; i < fileData.length; i++) {
                              if (fileData[i] == "\n") {
                                if (rows == 0) {
                                  rowsCount[rows] = Tuple2(0, i);
                                } else {
                                  rowsCount[rows] =
                                      Tuple2(rowsCount[rows - 1]!.item2, i);
                                }

                                rows += 1;
                              }
                            }
                            info = NerFileInfo(
                                fileUint8Data: customFilePickerResult.fileData!,
                                dataLength: fileData.length,
                                fileData: fileData,
                                fileName: controller.text,
                                rowIndexs: rowsCount);
                          }
                          return info;
                        }).then((value) {
                          if (value != null) {
                            if (widget.nerType == 0) {
                              widget.ctx
                                  .read<NerLabelingController>()
                                  .setNerFileInfo(value);
                            } else if (widget.nerType == 1) {
                              widget.ctx
                                  .read<CustomNerLabelingController>()
                                  .setNerFileInfo(value);
                            } else if (widget.nerType == 2) {
                              widget.ctx
                                  .read<NlpClassificationController>()
                                  .setFileInfo(value);
                            }
                            setState(() {
                              fileLength = value.dataLength;
                              fileRows = value.rowIndexs.entries.last.key + 1;
                            });
                          }
                        });
                      },
                      child: const Icon(
                        Icons.file_present,
                        size: 25,
                      )),
                ],
              ),
              const SizedBox(
                height: 20,
              ),
              Text("总共有$fileLength个字"),
              Text("大概有$fileRows行（web上读取文件行数可能有问题）"),
              Expanded(
                  child: Row(
                children: [
                  Expanded(child: Container()),
                  TextButton(
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                      child: const Text("确定"))
                ],
              )),
            ],
          ),
        )),
      ),
    );
  }
}

// ignore: must_be_immutable
class NerSettingsDropdownButton extends StatelessWidget {
  NerSettingsDropdownButton({Key? key, this.nerType = 0}) : super(key: key);
  final int nerType;

  OverlayEntry? _overlayEntry;
  bool show = false;
  final LayerLink layerLink = LayerLink();

  void _hideOverlay() {
    try {
      _overlayEntry?.remove();
    } catch (e, s) {
      debugPrint(s.toString());
    }
  }

  void _toggleOverlay(BuildContext context) {
    // debugPrint("_toggleOverlay");

    if (!show) {
      // debugPrint("_toggleOverlay");
      _overlayEntry = OverlayEntry(builder: (c) {
        return UnconstrainedBox(
          child: CompositedTransformFollower(
            link: layerLink,

            ///主体的位置
            followerAnchor: Alignment.bottomCenter,

            ///这个是浮窗的位置
            targetAnchor: Alignment.bottomLeft,
            offset: const Offset(0, 50),
            child: Card(
              elevation: 4,
              child: Padding(
                  padding: const EdgeInsets.all(10),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      InkWell(
                        onTap: () {
                          _hideOverlay();
                          show = !show;

                          showCupertinoDialog(
                              context: context,
                              builder: (_) => FilePickerDialog(
                                    ctx: context,
                                    nerType: nerType,
                                  ));
                        },
                        child: const Text("从文档获取数据"),
                      ),
                      InkWell(
                        onTap: () async {
                          _hideOverlay();
                          show = !show;
                          CustomFilePickerResult result =
                              CustomFilePickerResult();
                          await result.pickAFile(extensions: ["ml"]);
                          if (result.fileData != null) {
                            final s = jsonDecode(utf8.decode(result.fileData!));
                            // debugPrint(s);
                            if (s['mltoolType'] == null) {
                              return;
                            }
                            switch (s['mltoolType']) {
                              case "nlp_classification":
                                NlpClassificationSaveModel model =
                                    NlpClassificationSaveModel.fromJson(s);
                                Map<int, Tuple2<int, int>> rowsCount = {};
                                int rows = 0;
                                for (int i = 0;
                                    i < model.fileData!.length;
                                    i++) {
                                  if (model.fileData![i] == "\n") {
                                    if (rows == 0) {
                                      rowsCount[rows] = Tuple2(0, i);
                                    } else {
                                      rowsCount[rows] =
                                          Tuple2(rowsCount[rows - 1]!.item2, i);
                                    }

                                    rows += 1;
                                  }
                                }
                                NerFileInfo info = NerFileInfo(
                                    dataLength: model.fileData!.length,
                                    fileData: model.fileData!,
                                    fileName: model.fileName!,
                                    rowIndexs: rowsCount,
                                    fileUint8Data: Uint8List.fromList(
                                        utf8.encode(model.fileData!)));
                                context
                                    .read<NlpClassificationController>()
                                    .setFileInfo(info);
                                context
                                    .read<NlpClassificationController>()
                                    .changeLabeledDataByList(model.annotations!
                                        .map((e) => NlpClassificationData(
                                            className: e.className,
                                            id: e.rowId!))
                                        .toList());

                                break;

                              case "nlp":
                                NerSaveModel model = NerSaveModel.fromJson(s);
                                Map<int, Tuple2<int, int>> rowsCount = {};
                                int rows = 0;
                                for (int i = 0;
                                    i < model.fileData!.length;
                                    i++) {
                                  if (model.fileData![i] == "\n") {
                                    if (rows == 0) {
                                      rowsCount[rows] = Tuple2(0, i);
                                    } else {
                                      rowsCount[rows] =
                                          Tuple2(rowsCount[rows - 1]!.item2, i);
                                    }

                                    rows += 1;
                                  }
                                }
                                NerFileInfo info = NerFileInfo(
                                    dataLength: model.fileData!.length,
                                    fileData: model.fileData!,
                                    fileName: model.fileName!,
                                    rowIndexs: rowsCount,
                                    fileUint8Data: Uint8List.fromList(
                                        utf8.encode(model.fileData!)));
                                if (model.nerType == "common") {
                                  context
                                      .read<NerLabelingController>()
                                      .setNerFileInfo(info);
                                  List<HighlightedOffset> offsets = model
                                      .annotations!
                                      .map((e) =>
                                          HighlightedOffset.fromAnnotation(e))
                                      .toList();
                                  context
                                      .read<NerLabelingController>()
                                      .addAll(offsets);
                                } else {
                                  context
                                      .read<CustomNerLabelingController>()
                                      .setNerFileInfo(info);
                                  List<CustomNerHighlightedOffset> offsets =
                                      model.annotations!
                                          .map((e) => CustomNerHighlightedOffset
                                              .fromAnnotation(e, model.labels))
                                          .toList();
                                  context
                                      .read<CustomNerLabelingController>()
                                      .addAll(offsets);
                                }
                                break;
                            }
                          }
                        },
                        child: const Text("从.ml文件获取数据"),
                      ),
                      InkWell(
                        onTap: () {
                          _hideOverlay();
                          show = !show;
                        },
                        child: const Text("从接口获取数据"),
                      )
                    ],
                  )),
            ),
          ),
        );
      });

      OverlayState? overlayState = Navigator.of(context).overlay;
      // debugPrint("overlayState $overlayState");
      overlayState?.insert(_overlayEntry!);
      show = !show;
    }
  }

  @override
  Widget build(BuildContext context) {
    return CompositedTransformTarget(
      link: layerLink,
      child: Container(
        padding: const EdgeInsets.only(left: 20, right: 20, top: 5, bottom: 5),
        child: IconButton(
          icon: const Icon(Icons.settings),
          onPressed: () {
            _toggleOverlay(context);
          },
        ),
      ),
    );
  }
}
