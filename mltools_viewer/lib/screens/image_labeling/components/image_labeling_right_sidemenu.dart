import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:mltools_viewer/controllers/right_menu_controller.dart';
import 'package:provider/provider.dart';

class ImageLabelingRightSidemenu extends StatefulWidget {
  const ImageLabelingRightSidemenu({Key? key}) : super(key: key);

  @override
  State<ImageLabelingRightSidemenu> createState() => _RightSidemenuState();
}

class _RightSidemenuState extends State<ImageLabelingRightSidemenu> {
  final TextEditingController controller = TextEditingController();
  final TextEditingController controller2 = TextEditingController();
  final ScrollController fileListController = ScrollController();
  final ScrollController annotationListController = ScrollController();

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    controller.dispose();
    controller2.dispose();
    fileListController.dispose();
    annotationListController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final imageName = context.select<ImageController, String?>(
      (value) {
        return value.currentImageName;
      },
    );

    final details = context
        .watch<LabelImgAnnotationController>()
        .details
        .where((element) => element.enabled && element.imageName == imageName)
        .toList();

    final labelmeDetails = context
        .watch<LabelmeAnnotationController>()
        .details
        .where((element) => element.imageName == imageName)
        .toList();

    // List<String> labelNames = [];
    Map<String, String> labelNameIdMap = {};

    for (final i in details) {
      if (i.visible) {
        labelNameIdMap.addAll({"r${i.id}": '${i.className}[rectangle]'});
      } else {
        labelNameIdMap.addAll({"r${i.id}": '${i.className}[rectangle](已隐藏)'});
      }
    }

    for (final i in labelmeDetails) {
      labelNameIdMap.addAll({"p${i.polygonId}": '${i.className}[polygon]'});
    }

    final images = context.watch<ImageController>().images;

    return Container(
      padding: const EdgeInsets.only(top: AppStyle.appbarHeight),
      height: MediaQuery.of(context).size.height,
      width: AppStyle.sidemenuWidth,
      color: AppStyle.lightBlue,
      child: Container(
        padding: const EdgeInsets.all(AppStyle.defaultPadding),
        color: Colors.white,
        child: Column(
          children: [
            Row(
              children: [
                InkWell(
                  onTap: () {
                    context
                        .read<RightMenuController>()
                        .changeLabelSelectedStatus();
                  },
                  child: Icon(
                    Icons.check,
                    color: context
                            .watch<RightMenuController>()
                            .defaultLabelSelected
                        ? AppStyle.lightBlue
                        : AppStyle.grey,
                  ),
                ),
                const SizedBox(
                  width: 10,
                ),
                const Expanded(child: Text("Use default label"))
              ],
            ),
            const SizedBox(
              height: 15,
            ),
            TextField(
              maxLength: 35,
              maxLines: null,
              controller: controller,
              decoration: AppStyle.getInputDecotation(),
              enabled:
                  context.watch<RightMenuController>().defaultLabelSelected,
            ),
            const Divider(
              thickness: 3,
            ),
            Row(
              children: [
                const Text(
                  "Annotation List",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                Expanded(child: Container()),
                IconButton(
                    tooltip: "Show all",
                    onPressed: () {
                      context.read<LabelImgAnnotationController>().showAll();
                    },
                    icon: const Icon(
                      Icons.smart_display_outlined,
                      color: Colors.green,
                    )),
                IconButton(
                    tooltip: "Hide all",
                    onPressed: () {
                      context.read<LabelImgAnnotationController>().hideAll();
                    },
                    icon: const Icon(
                      Icons.hide_source,
                      color: Colors.red,
                    )),
              ],
            ),
            Expanded(
              child: Container(
                  width: AppStyle.sidemenuWidth,
                  decoration: BoxDecoration(
                      border: Border.all(color: AppStyle.dark_grey)),
                  margin: const EdgeInsets.all(5),
                  child: ListView.builder(
                      itemCount: labelNameIdMap.length,
                      itemBuilder: (context, index) {
                        return InkWell(
                          onDoubleTap: () async {
                            final entry =
                                labelNameIdMap.entries.toList()[index];
                            int? widgetId =
                                int.tryParse(entry.key.substring(1));
                            if (widgetId == null) {
                              return;
                            }

                            await showCupertinoDialog(
                                context: context,
                                builder: (context) {
                                  return CupertinoAlertDialog(
                                    title: const Text("Operation"),
                                    content: Material(
                                        color: Colors.transparent,
                                        child: Column(
                                          children: [
                                            TextButton(
                                              onPressed: () {
                                                if (entry.value
                                                    .contains("[rectangle]")) {
                                                } else {}
                                                Navigator.of(context).pop();
                                              },
                                              child: const Text("Delete"),
                                            ),
                                            const SizedBox(
                                              height: 20,
                                            ),
                                            TextField(
                                              controller: controller2,
                                              decoration:
                                                  AppStyle.getInputDecotation(),
                                            )
                                          ],
                                        )),
                                    actions: [
                                      CupertinoActionSheetAction(
                                          onPressed: () {
                                            if (entry.value
                                                .contains("[rectangle]")) {
                                            } else {}
                                            Navigator.of(context).pop();
                                          },
                                          child: const Text("确定"))
                                    ],
                                  );
                                });
                          },
                          child: Text(
                            labelNameIdMap.values.toList()[index],
                            maxLines: 2,
                          ),
                        );
                      })),
            ),
            const Text(
              "File List",
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            Expanded(
                child: Container(
              width: AppStyle.sidemenuWidth,
              decoration:
                  BoxDecoration(border: Border.all(color: AppStyle.dark_grey)),
              margin: const EdgeInsets.all(5),
              child: ListView.builder(
                itemCount: images.length,
                itemBuilder: ((context, index) {
                  return InkWell(
                    onDoubleTap: () {
                      if (context.read<ImageController>().currentImageIndex !=
                          index) {
                        context
                            .read<ImageController>()
                            .changeCurrentIndex(index);
                      }
                    },
                    child: Container(
                      padding: const EdgeInsets.all(5),
                      constraints: const BoxConstraints(minHeight: 20),
                      child: Text(
                        "${index + 1}. ${images[index]!.imageName ?? ""}",
                        style: TextStyle(
                            color: context
                                        .watch<ImageController>()
                                        .currentImageIndex ==
                                    index
                                ? Colors.blue
                                : Colors.black),
                        maxLines: null,
                      ),
                    ),
                  );
                }),
              ),
            )),
          ],
        ),
      ),
    );
  }
}
