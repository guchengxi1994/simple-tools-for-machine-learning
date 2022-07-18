import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
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

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
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
              decoration: getInputDecotation(),
              enabled:
                  context.watch<RightMenuController>().defaultLabelSelected,
            ),
            const Divider(
              thickness: 3,
            ),
            const Text(
              "Annotation List",
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            Expanded(
                child: Container(
              width: AppStyle.sidemenuWidth,
              decoration:
                  BoxDecoration(border: Border.all(color: AppStyle.dark_grey)),
              margin: const EdgeInsets.all(5),
              child: SingleChildScrollView(),
            )),
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

  InputDecoration getInputDecotation() {
    return const InputDecoration(
      isCollapsed: true,
      contentPadding:
          EdgeInsets.symmetric(horizontal: 8, vertical: 10), //内容内边距，影响高度
      border: OutlineInputBorder(
        ///设置边框四个角的弧度
        borderRadius: BorderRadius.all(Radius.circular(10)),

        ///用来配置边框的样式
        borderSide: BorderSide(
          ///设置边框的颜色
          color: Colors.red,

          ///设置边框的粗细
          width: 2.0,
        ),
      ),
    );
  }
}
