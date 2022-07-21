// ignore_for_file: must_be_immutable, library_private_types_in_public_api

part of "./labelimg_widget.dart";

class RectBoxV2 extends StatelessWidget {
  RectBoxV2(
      {Key? key,
      required this.id,
      this.useDefault = false,
      required this.imageName})
      : super(key: key);
  final int id;
  final bool useDefault;
  final String imageName;

  String className = '';
  final TextEditingController controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final LabelImgAnnotationDetails details;
    // this `if-else` branch is duplicated
    if (useDefault) {
      details = LabelImgAnnotationDetails(
          imageName: imageName,
          id: id,
          xmin: 0,
          xmax: 0,
          ymax: defaultRectSize,
          ymin: defaultRectSize,
          scale: context.read<ImageController>().scale,
          className: "");
    } else {
      details =
          context.watch<LabelImgAnnotationController>().getDetailsById(id);
    }

    return Visibility(
        visible: details.enabled && details.visible,
        child: Positioned(
            left: details.xmin,
            top: details.ymin,
            child: GestureDetector(
              onPanUpdate: (details) {
                context
                    .read<LabelImgAnnotationController>()
                    .changeBndBoxPosition(id, details);
              },
              child: Opacity(
                opacity: 0.7,
                child: InkWell(
                  onDoubleTap: () async {
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
                                height:
                                    MediaQuery.of(context).size.height * 0.6,
                                child: Dialog(
                                    child: Container(
                                  padding: const EdgeInsets.all(20),
                                  child: Column(
                                    children: [
                                      Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.end,
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
                                                context
                                                    .read<
                                                        LabelImgAnnotationController>()
                                                    .addClassNames(
                                                        controller.text);
                                                context
                                                    .read<
                                                        LabelImgAnnotationController>()
                                                    .changeLabelName(
                                                        id, controller.text);
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
                                        decoration:
                                            AppStyle.getInputDecotation(),
                                      ),
                                      const SizedBox(
                                        height: 20,
                                      ),
                                      Expanded(
                                          child: Container(
                                        color: AppStyle.chipBackground,
                                        child: ListView.builder(
                                            itemCount: context
                                                .watch<
                                                    LabelImgAnnotationController>()
                                                .savedClassNames
                                                .length,
                                            itemBuilder: (context, index) {
                                              return InkWell(
                                                onDoubleTap: () {
                                                  controller.text = context
                                                      .read<
                                                          LabelImgAnnotationController>()
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
                  },
                  child: Container(
                    // margin: EdgeInsets.only(top: 100, left: 50),
                    height: context
                        .read<LabelImgAnnotationController>()
                        .getHeightById(id),
                    width: context
                        .read<LabelImgAnnotationController>()
                        .getWidthById(id),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.green, width: 0.5),
                      color: Colors.blueAccent,
                    ),
                    child: Stack(
                      children: [
                        // left top
                        Positioned(
                            left: 0,
                            top: 0,
                            child: GestureDetector(
                              onPanUpdate: (details) {
                                context
                                    .read<LabelImgAnnotationController>()
                                    .changeBndBoxByLeftTopPosition(id, details);
                              },
                              child: Container(
                                  width: pointSize,
                                  height: pointSize,
                                  decoration: BoxDecoration(
                                    color: Colors.red,
                                    borderRadius: BorderRadius.circular(150),
                                    border: Border.all(
                                        color: Colors.red, width: 0.5),
                                  )),
                            )),
                        // right top
                        Positioned(
                            right: 0,
                            top: 0,
                            child: GestureDetector(
                              onPanUpdate: (details) {
                                context
                                    .read<LabelImgAnnotationController>()
                                    .changeBndBoxByRightTopPosition(
                                        id, details);
                              },
                              child: Container(
                                  width: pointSize,
                                  height: pointSize,
                                  decoration: BoxDecoration(
                                    color: Colors.red,
                                    borderRadius: BorderRadius.circular(150),
                                    border: Border.all(
                                        color: Colors.red, width: 0.5),
                                  )),
                            )),
                        // left bottom
                        Positioned(
                            left: 0,
                            bottom: 0,
                            child: GestureDetector(
                              onPanUpdate: (details) {
                                context
                                    .read<LabelImgAnnotationController>()
                                    .changeBndBoxByLeftBottomPosition(
                                        id, details);
                              },
                              child: Container(
                                  width: pointSize,
                                  height: pointSize,
                                  decoration: BoxDecoration(
                                    color: Colors.red,
                                    borderRadius: BorderRadius.circular(150),
                                    border: Border.all(
                                        color: Colors.red, width: 0.5),
                                  )),
                            )),
                        // right bottom
                        Positioned(
                            right: 0,
                            bottom: 0,
                            child: GestureDetector(
                              onPanUpdate: (details) {
                                context
                                    .read<LabelImgAnnotationController>()
                                    .changeBndBoxByRightBottomPosition(
                                        id, details);
                              },
                              child: Container(
                                  width: pointSize,
                                  height: pointSize,
                                  decoration: BoxDecoration(
                                    color: Colors.red,
                                    borderRadius: BorderRadius.circular(150),
                                    border: Border.all(
                                        color: Colors.red, width: 0.5),
                                  )),
                            )),
                      ],
                    ),
                  ),
                ),
              ),
            )));
  }
}
