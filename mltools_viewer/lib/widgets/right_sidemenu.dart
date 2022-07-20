import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
import 'package:mltools_viewer/controllers/right_menu_controller.dart';
import 'package:provider/provider.dart';

class RightSidemenu extends StatefulWidget {
  const RightSidemenu({Key? key}) : super(key: key);

  @override
  State<RightSidemenu> createState() => _RightSidemenuState();
}

class _RightSidemenuState extends State<RightSidemenu> {
  final TextEditingController controller = TextEditingController();
  final ScrollController fileListController = ScrollController();
  final ScrollController annotationListController = ScrollController();

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    controller.dispose();
    fileListController.dispose();
    annotationListController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final imageName = context.watch<ImageController>().currentImageName;

    final details = context
        .watch<LabelImgAnnotationController>()
        .details
        .where((element) => element.enabled && element.imageName == imageName)
        .toList();

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
                      itemCount: details.length,
                      itemBuilder: (context, index) {
                        var suffix =
                            details[index].visible == true ? "" : "  (已隐藏)";
                        var labelName = details[index].className == ""
                            ? " 未命名"
                            : " ${details[index].className}";
                        return RichText(
                            maxLines: null,
                            text: TextSpan(children: [
                              TextSpan(
                                  text: labelName,
                                  style: const TextStyle(color: Colors.black)),
                              TextSpan(
                                  text: suffix,
                                  style: const TextStyle(color: Colors.red))
                            ]));
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
                itemCount: context.watch<ImageController>().images.length,
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
                        "${index + 1}. ${context.watch<ImageController>().images[index]!.imageName ?? ""}",
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
