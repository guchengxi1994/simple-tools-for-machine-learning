// ignore_for_file: use_build_context_synchronously

import 'dart:io';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:mltools_viewer/controllers/board_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:mltools_viewer/model/image_model.dart';
import 'package:mltools_viewer/utils/common.dart';
import 'package:mltools_viewer/widgets/labelimg/labelimg_widget.dart';
import 'package:provider/provider.dart';
import 'package:taichi/taichi.dart' show TaichiDevUtils;

import 'icon_text_widget.dart';

class SideMenu extends StatelessWidget {
  const SideMenu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      width: AppStyle.sidemenuWidthHalf,
      color: AppStyle.lightBlue,
      child: SingleChildScrollView(
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
            const Divider(),
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
                icon: const Icon(Icons.style),
                label: Text(context.watch<BoardController>().annotationType ==
                        AnnotationType.rect
                    ? "Rect"
                    : "Polygon"),
                onTap: () => switchMode(context)),
            const Divider(),
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
          ],
        ),
      ),
    );
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
          2 * AppStyle.defaultPadding;
    } else {
      w = MediaQuery.of(context).size.width - 2 * AppStyle.defaultPadding;
    }

    double s = currentScale * k.currentContext!.size!.width / w;
    context.read<ImageController>().changeScale(s);
    // context.read<BoardController>().whenScaleChanged(1 / s);
    context.read<LabelImgAnnotationController>().whenScaleChanged(1 / s);
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
  }

  zoomOut(BuildContext context) {
    context.read<ImageController>().zoomOut();
    double currentScale = context.read<ImageController>().scale;
    // context.read<BoardController>().whenScaleChanged(1 / currentScale);
    context
        .read<LabelImgAnnotationController>()
        .whenScaleChanged(1 / currentScale);
  }

  reset(BuildContext context) {
    context.read<ImageController>().reset();
    double currentScale = context.read<ImageController>().scale;
    // context.read<BoardController>().whenScaleChanged(1 / currentScale);
    context
        .read<LabelImgAnnotationController>()
        .whenScaleChanged(1 / currentScale);
  }

  addRect(BuildContext context) {
    int currentIndex = context.read<BoardController>().currentLabelImgIndex;
    // print(currentIndex);
    context.read<LabelImgAnnotationController>().addDetail(
        LabelImgAnnotationDetails(
            id: currentIndex,
            className: "",
            xmin: 0,
            xmax: defaultRectSize,
            ymin: 0,
            ymax: defaultRectSize,
            scale: context.read<ImageController>().scale));
    context.read<BoardController>().addWidget(RectBoxV2(
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
