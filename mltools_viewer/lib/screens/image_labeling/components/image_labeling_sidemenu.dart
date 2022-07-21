// ignore_for_file: use_build_context_synchronously

import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'dart:math' as math;

import 'package:file_picker/file_picker.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:mltools_viewer/controllers/board_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:mltools_viewer/model/image_model.dart';
import 'package:mltools_viewer/model/labelimg_objs.dart';
import 'package:mltools_viewer/model/mltool_image_save_model.dart';
import 'package:mltools_viewer/utils/common.dart';

import 'package:provider/provider.dart';
import 'package:taichi/taichi.dart' show TaichiDevUtils;
import 'package:path/path.dart' as p;

import '../../../widgets/icon_text_widget.dart';
import 'labelimg/labelimg_widget.dart';

class SideMenu extends StatelessWidget {
  SideMenu({Key? key}) : super(key: key);
  final ScrollController scrollController = ScrollController();

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      width: AppStyle.sidemenuWidthHalf,
      color: AppStyle.lightBlue,
      child: SingleChildScrollView(
        controller: scrollController,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(
              height: AppStyle.labelHeight,
              width: AppStyle.sidemenuWidthHalf,
              child: Center(
                child: Text(
                  "Viewer",
                  style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
                ),
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            IconTextWidget(
              onTap: () => onOpenButtonClicked(context),
              icon: const Icon(
                Icons.file_open,
                size: 30,
              ),
              label: const Text("Open"),
            ),
            IconTextWidget(
              onTap: () => onChooseFolderButtonClicked(context),
              icon: const Icon(
                Icons.file_copy,
                size: 30,
              ),
              label: const Text(
                "Choose Multiple Files",
                maxLines: 2,
              ),
            ),
            const Divider(
              thickness: 3,
            ),
            IconTextWidget(
                enable: context.watch<ImageController>().images.isNotEmpty,
                icon: const Icon(Icons.create),
                label: const Text(
                  "Create Annotation\nBy Default",
                  maxLines: 2,
                  textAlign: TextAlign.center,
                ),
                onTap: () => addRect(context)),
            IconTextWidget(
                enable: context.watch<ImageController>().images.isNotEmpty,
                icon: const Icon(Icons.style),
                label: Text(context.watch<BoardController>().annotationType ==
                        AnnotationType.rect
                    ? "Rect"
                    : "Polygon"),
                onTap: () => switchMode(context)),
            if (context.watch<BoardController>().annotationType ==
                AnnotationType.polygon)
              IconTextWidget(
                  icon: const Icon(Icons.done_outline),
                  label: const Text("Creation Done"),
                  onTap: () => polygonCreationDone(context)),
            if (context.watch<BoardController>().annotationType ==
                AnnotationType.polygon)
              IconTextWidget(
                  icon: const Icon(Icons.switch_left),
                  label: Text(context
                              .watch<LabelmeAnnotationController>()
                              .operationType ==
                          PolygonOperationType.create
                      ? "Create Mode"
                      : "Edit Mode"),
                  onTap: () {
                    context
                        .read<LabelmeAnnotationController>()
                        .switchOperationType();
                  }),
            const Divider(
              thickness: 3,
            ),
            IconTextWidget(
                icon: const Icon(Icons.save),
                label: const Text("Save File"),
                onTap: () => saveFile(context)),
            IconTextWidget(
                icon: const Icon(Icons.file_present),
                label: const Text(
                  'Load Data From ".ml" Files',
                  textAlign: TextAlign.center,
                  maxLines: 2,
                ),
                onTap: () {}),
            const Divider(
              thickness: 3,
            ),
            IconTextWidget(
                icon: const Icon(Icons.zoom_in),
                label: const Text("Zoom In"),
                onTap: () => zoomIn(context)),
            IconTextWidget(
                icon: const Icon(Icons.zoom_out),
                label: const Text("Zoom Out"),
                onTap: () => zoomOut(context)),
            IconTextWidget(
                icon: const Icon(Icons.width_normal),
                label: const Text("Fit width"),
                onTap: () => fitWidth(context)),
            IconTextWidget(
                icon: const Icon(Icons.height),
                label: const Text("Fit Height"),
                onTap: () => fitHeight(context)),
            IconTextWidget(
                icon: const Icon(Icons.refresh),
                label: const Text("Reset"),
                onTap: () => reset(context)),
            const Divider(
              thickness: 3,
            ),
            IconTextWidget(
                icon: Transform.rotate(
                  angle: math.pi,
                  child: const Icon(Icons.exit_to_app),
                ),
                label: const Text("Exit To Main Page"),
                onTap: () {
                  Navigator.of(context).pop();
                }),
          ],
        ),
      ),
    );
  }

  saveFile(BuildContext context) async {
    final images = context.read<ImageController>().images;
    final scale = context.read<ImageController>().scale;
    final savedClassNames =
        context.read<LabelImgAnnotationController>().savedClassNames;
    List<Annotation> annotations = [];
    for (final i in images) {
      if (i != null) {
        String imageName = i.imageName!;
        final details = context
            .read<LabelImgAnnotationController>()
            .details
            .where((element) => element.imageName == imageName)
            .toList();

        if (!TaichiDevUtils.isWeb) {
          imageName = p.basename(imageName);
        }
        String imageData = base64Encode(i.imageData!);

        for (final d in details) {
          Bndbox bndbox = Bndbox(
              xmax: d.xmax.toInt(),
              xmin: d.xmin.toInt(),
              ymax: d.ymax.toInt(),
              ymin: d.ymin.toInt());
          annotations.add(Annotation(labelName: d.className, bndbox: bndbox));
        }
        String fileName =
            imageName.split(".").first + MltoolsSaveModel.extension;

        MltoolsSaveModel model = MltoolsSaveModel(
            imageData: imageData,
            imageName: imageName,
            annotations: annotations,
            scale: scale,
            savedClassNames: savedClassNames);
        await model.toFile(fileName);
      }
    }
  }

  polygonCreationDone(BuildContext context) async {
    String className = '';
    final TextEditingController controller = TextEditingController();
    context.read<LabelmeAnnotationController>().switchOperationType();
    context.read<LabelmeAnnotationController>().addOne();
    if (TaichiDevUtils.isMobile) {
      var result = await showCupertinoDialog(
          context: context,
          builder: (context) {
            return CupertinoAlertDialog(
              title: const Text("请输入类名"),
              content: Material(
                  child: TextField(
                maxLength: 30,
                controller: controller,
              )),
              actions: [
                CupertinoActionSheetAction(
                  child: const Text("确定"),
                  onPressed: () {
                    /// 这里缺少逻辑
                    Navigator.of(context).pop(controller.text);
                  },
                )
              ],
            );
          });
      className = result.toString();
    } else {
      showCupertinoDialog(
          context: context,
          builder: (context) {
            return UnconstrainedBox(
              child: SizedBox(
                width: AppStyle.dialogWidth,
                height: MediaQuery.of(context).size.height * 0.6,
                child: Dialog(
                    child: Container(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          IconButton(
                              onPressed: () {
                                Navigator.of(context).pop();
                              },
                              icon: const Icon(
                                Icons.cancel,
                                color: Colors.red,
                              )),
                          IconButton(
                              onPressed: () {
                                Navigator.of(context).pop();
                              },
                              icon: const Icon(
                                Icons.done,
                                color: Colors.green,
                              )),
                        ],
                      ),
                      TextField(
                        maxLength: 35,
                        maxLines: null,
                        controller: controller,
                        decoration: AppStyle.getInputDecotation(),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      Expanded(
                          child: Container(
                        color: AppStyle.chipBackground,
                        child: ListView.builder(
                            itemCount: context
                                .watch<LabelImgAnnotationController>()
                                .savedClassNames
                                .length,
                            itemBuilder: (context, index) {
                              return InkWell(
                                onDoubleTap: () {
                                  controller.text = context
                                      .read<LabelImgAnnotationController>()
                                      .savedClassNames[index];
                                },
                                child: Text(
                                    "${index + 1}. ${context.watch<LabelImgAnnotationController>().savedClassNames[index]}"),
                              );
                            }),
                      ))
                    ],
                  ),
                )),
              ),
            );
          });
    }
  }

  switchMode(BuildContext context) {
    if (context.read<BoardController>().annotationType == AnnotationType.rect) {
      context
          .read<BoardController>()
          .changeAnnotationType(AnnotationType.polygon);
    } else {
      context.read<BoardController>().changeAnnotationType(AnnotationType.rect);
    }
  }

  fitWidth(BuildContext context) {
    var k = context.read<ImageController>().stackKey;
    var currentScale = context.read<ImageController>().scale;
    if (k.currentContext == null) {
      return;
    }
    if (k.currentContext!.size == Size.zero) {
      return;
    }
    double w;
    if (ScreenTypeUtils.isDesktop(context)) {
      /// 桌面的情况，主窗体为左右结构，需去除左侧sidemenu宽度
      w = MediaQuery.of(context).size.width -
          AppStyle.sidemenuWidthHalf -
          2 * AppStyle.defaultPadding -
          AppStyle.sidemenuWidth;
    } else {
      w = MediaQuery.of(context).size.width - 2 * AppStyle.defaultPadding;
    }

    double s = currentScale * k.currentContext!.size!.width / w;
    context.read<ImageController>().changeScale(s);
    // context.read<BoardController>().whenScaleChanged(1 / s);
    context.read<LabelImgAnnotationController>().whenScaleChanged(1 / s);
    context.read<LabelmeAnnotationController>().whenScaleChanged(1 / s);
  }

  fitHeight(BuildContext context) {
    var currentScale = context.read<ImageController>().scale;
    var k = context.read<ImageController>().stackKey;
    if (k.currentContext == null) {
      return;
    }
    if (k.currentContext!.size == Size.zero) {
      return;
    }

    double h = MediaQuery.of(context).size.height -
        2 * AppStyle.defaultPadding -
        AppStyle.appbarHeight;

    double s = currentScale * k.currentContext!.size!.height / h;
    context.read<ImageController>().changeScale(s);
    // context.read<BoardController>().whenScaleChanged(1 / s);
    context.read<LabelImgAnnotationController>().whenScaleChanged(1 / s);
    context.read<LabelmeAnnotationController>().whenScaleChanged(1 / s);
  }

  Future onOpenButtonClicked(BuildContext context) async {
    debugPrint("clicked");
    FilePickerResult? result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['jpg', 'png'],
    );

    if (result != null) {
      Uint8List? fileBytes;

      if (TaichiDevUtils.isWeb) {
        fileBytes = result.files.first.bytes;
      } else {
        File file = File(result.files.single.path!);
        fileBytes = file.readAsBytesSync();
      }

      if (fileBytes != null) {
        MltoolImage image = MltoolImage();
        image.imageHeight = 0;
        image.imageWidth = 0;

        image.imageData = fileBytes;
        image.imageName = result.files.first.name;

        context.read<ImageController>().changeImage(image);
      }
    }
  }

  zoomIn(BuildContext context) {
    context.read<ImageController>().zoomIn();
    double currentScale = context.read<ImageController>().scale;
    // context.read<BoardController>().whenScaleChanged(1 / currentScale);
    context
        .read<LabelImgAnnotationController>()
        .whenScaleChanged(1 / currentScale);
    context
        .read<LabelmeAnnotationController>()
        .whenScaleChanged(1 / currentScale);
  }

  zoomOut(BuildContext context) {
    context.read<ImageController>().zoomOut();
    double currentScale = context.read<ImageController>().scale;
    // context.read<BoardController>().whenScaleChanged(1 / currentScale);
    context
        .read<LabelImgAnnotationController>()
        .whenScaleChanged(1 / currentScale);
    context
        .read<LabelmeAnnotationController>()
        .whenScaleChanged(1 / currentScale);
  }

  reset(BuildContext context) {
    context.read<ImageController>().reset();
    double currentScale = context.read<ImageController>().scale;
    // context.read<BoardController>().whenScaleChanged(1 / currentScale);
    context
        .read<LabelImgAnnotationController>()
        .whenScaleChanged(1 / currentScale);
    context
        .read<LabelmeAnnotationController>()
        .whenScaleChanged(1 / currentScale);
  }

  addRect(BuildContext context) {
    int currentIndex = context.read<BoardController>().currentLabelImgIndex;
    String imageName = context.read<ImageController>().currentImageName ?? '';
    // print(currentIndex);
    context.read<LabelImgAnnotationController>().addDetail(
        LabelImgAnnotationDetails(
            imageName: imageName,
            id: currentIndex,
            className: "",
            xmin: 0,
            xmax: defaultRectSize,
            ymin: 0,
            ymax: defaultRectSize,
            scale: context.read<ImageController>().scale));
    context.read<BoardController>().addWidget(RectBoxV2(
          imageName: imageName,
          id: currentIndex,
        ));
  }

  onChooseFolderButtonClicked(BuildContext context) async {
    FilePickerResult? result = await FilePicker.platform.pickFiles(
      allowMultiple: true,
      type: FileType.custom,
      allowedExtensions: ['jpg', 'png'],
    );

    if (result != null) {
      List<Uint8List?> filesBytes = [];
      List<String> filenames = [];
      for (final i in result.files) {
        if (TaichiDevUtils.isWeb) {
          filesBytes.add(i.bytes);
          filenames.add(i.name);
        } else {
          File file = File(i.path!);
          filesBytes.add(file.readAsBytesSync());
          filenames.add(file.path);
        }
      }
      List<MltoolImage> images = [];
      // print(filenames);
      for (int i = 0; i < filenames.length; i++) {
        images.add(MltoolImage(
            imageData: filesBytes[i],
            imageName: filenames[i],
            imageHeight: 0,
            imageWidth: 0));
      }

      context.read<ImageController>().changeImages(images);
    }
  }
}
