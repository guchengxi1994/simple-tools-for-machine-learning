// ignore_for_file: use_build_context_synchronously

import 'dart:typed_data';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:image_size_getter/image_size_getter.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:mltools_viewer/model/image_model.dart';
import 'package:provider/provider.dart';

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
                icon: const Icon(Icons.zoom_in),
                label: const Text("Zoom In"),
                onTap: () => zoomIn(context)),
            IconTextWidget(
                icon: const Icon(Icons.zoom_out),
                label: const Text("Zoom Out"),
                onTap: () => zoomOut(context)),
            IconTextWidget(
                icon: const Icon(Icons.refresh),
                label: const Text("Reset"),
                onTap: () => reset(context)),
          ],
        ),
      ),
    );
  }

  Future onOpenButtonClicked(BuildContext context) async {
    debugPrint("clicked");
    FilePickerResult? result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['jpg', 'png'],
    );

    if (result != null) {
      Uint8List? fileBytes = result.files.first.bytes;
      if (fileBytes != null) {
        final memoryImageSize = ImageSizeGetter.getSize(MemoryInput(fileBytes));
        debugPrint('memoryImageSize = $memoryImageSize');
        MltoolImage image = MltoolImage();
        image.imageData = fileBytes;
        image.imageName = result.files.first.name;
        image.imageHeight = memoryImageSize.height;
        image.imageWidth = memoryImageSize.width;
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
}