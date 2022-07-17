// ignore_for_file: use_build_context_synchronously

import 'dart:io';
import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
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
            const Divider(),
            IconTextWidget(
                enable: context.watch<ImageController>().image != null,
                icon: const Icon(Icons.create),
                label: const Text("Create Annotation"),
                onTap: () => addRect(context)),
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
  }

  zoomOut(BuildContext context) {
    context.read<ImageController>().zoomOut();
  }

  reset(BuildContext context) {
    context.read<ImageController>().reset();
  }

  addRect(BuildContext context) {
    context.read<BoardController>().addWidget(RectBox(id: 0));
  }
}
