// ignore_for_file: must_be_immutable, use_build_context_synchronously

import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/custon_ner_labeling_controller.dart';
import 'package:mltools_viewer/model/enums.dart';
import 'package:mltools_viewer/model/mltool_ner_save_model.dart';
import 'package:mltools_viewer/model/ner_highlighted_offset.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/deletable_card.dart';
import 'package:mltools_viewer/utils/shared_preference_utils.dart';
import 'package:provider/provider.dart';
import 'package:showcaseview/showcaseview.dart';

import 'components/ner_settings_dropdown_button.dart';
import 'components/text_highlight_widget.dart';

class CustomTextAnnotationScreen extends StatelessWidget {
  CustomTextAnnotationScreen({super.key});
  PersistenceStorage ps = PersistenceStorage();
  final TextEditingController controller = TextEditingController();

  final GlobalKey actionKey = GlobalKey();
  final GlobalKey itemKey = GlobalKey();
  final GlobalKey titleKey = GlobalKey();
  final GlobalKey annotationKey = GlobalKey();
  final GlobalKey addOneKey = GlobalKey();
  final GlobalKey annotatedItemsKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    WidgetsBinding.instance.addPostFrameCallback(
      (timeStamp) async {
        if (await ps.isScreenFirstTime(Routers.pageCustomNer)) {
          ShowCaseWidget.of(context).startShowCase([
            actionKey,
            titleKey,
            addOneKey,
            itemKey,
            annotationKey,
            annotatedItemsKey
          ]);
          ps.setScreenFirstTime(Routers.pageCustomNer, false);
        }
      },
    );

    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CustomNerLabelingController())
      ],
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            title: Showcase(
              key: titleKey,
              description: "这里文件标题和行信息",
              child: buildTitle(context),
            ),
            elevation: 0,
            centerTitle: true,
            automaticallyImplyLeading: false,
            backgroundColor: AppStyle.lightBlue,
            leading: InkWell(
              onTap: () {
                Navigator.of(context).pop();
              },
              child: const Icon(Icons.chevron_left),
            ),
            actions: [
              Showcase(
                  key: actionKey,
                  description: "这里导入数据",
                  child: const NerSettingsDropdownButton(
                    nerType: 1,
                  ))
            ],
          ),
          body: SingleChildScrollView(
            padding: const EdgeInsets.all(50),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Text("类名："),
                    const SizedBox(
                      width: 10,
                    ),
                    Showcase(
                        key: addOneKey,
                        description: "点击这里添加一个自定义类名",
                        child: InkWell(
                          onTap: () async {
                            String? result = await showCupertinoDialog(
                                context: context,
                                builder: ((context) {
                                  return CupertinoAlertDialog(
                                    title: const Text("输入类名"),
                                    content: Material(
                                      child: TextField(
                                        controller: controller,
                                        decoration:
                                            AppStyle.getInputDecotation(),
                                      ),
                                    ),
                                    actions: [
                                      CupertinoActionSheetAction(
                                          onPressed: () {
                                            controller.text = "";
                                            Navigator.of(context).pop(null);
                                          },
                                          child: const Text("取消")),
                                      CupertinoActionSheetAction(
                                          onPressed: () {
                                            String s = controller.text;
                                            controller.text = "";
                                            Navigator.of(context).pop(s);
                                          },
                                          child: const Text("确定")),
                                    ],
                                  );
                                }));
                            if (result != null) {
                              context
                                  .read<CustomNerLabelingController>()
                                  .addClassName(result);
                            }
                          },
                          child: Container(
                            decoration: BoxDecoration(
                                color: Colors.grey[200],
                                border: Border.all(color: Colors.grey)),
                            child: const Icon(
                              Icons.plus_one_sharp,
                              color: Colors.red,
                            ),
                          ),
                        ))
                  ],
                ),
                const SizedBox(
                  height: 20,
                ),
                Showcase(
                    key: itemKey,
                    description: "这里是定义的类目，可以手动删除",
                    child: Card(
                      elevation: 4,
                      child: Container(
                        padding: const EdgeInsets.all(5),
                        constraints: BoxConstraints(
                            minHeight: 100,
                            minWidth: MediaQuery.of(context).size.width),
                        child: Wrap(
                          children: context
                              .watch<CustomNerLabelingController>()
                              .classNames
                              .map((e) => Container(
                                    constraints:
                                        const BoxConstraints(maxWidth: 150),
                                    child: DeletableCard(
                                        text: e,
                                        onTap: () {
                                          context
                                              .read<
                                                  CustomNerLabelingController>()
                                              .removeClassName(e);
                                        }),
                                  ))
                              .toList(),
                        ),
                      ),
                    )),
                const SizedBox(
                  height: 20,
                ),
                const Text("已标注的数据："),
                const SizedBox(
                  height: 20,
                ),
                Showcase(
                    key: annotatedItemsKey,
                    description: "这里是已标注的部分",
                    child: Card(
                      elevation: 4,
                      child: Container(
                        color: const Color.fromARGB(255, 242, 236, 234),
                        height: 200,
                        width: MediaQuery.of(context).size.width,
                        padding: const EdgeInsets.all(20),
                        child: Wrap(
                            children: context
                                .watch<CustomNerLabelingController>()
                                .getOffsetsByCurrentRowId()
                                .map((e) => Container(
                                    constraints:
                                        const BoxConstraints(maxWidth: 150),
                                    child: DeletableCard(
                                        text:
                                            "${e.className}: '${e.highlightedText}'",
                                        onTap: () {
                                          context
                                              .read<
                                                  CustomNerLabelingController>()
                                              .removeOffset(e);
                                        })))
                                .toList()),
                      ),
                    )),
                const SizedBox(
                  height: 30,
                ),
                const Text("文本"),
                const SizedBox(
                  height: 30,
                ),
                Showcase(
                    key: annotationKey,
                    description: "这里是进行标注的区域",
                    child: Card(
                      elevation: 4,
                      child: Container(
                        color: const Color.fromARGB(255, 244, 227, 221),
                        height: 200,
                        width: MediaQuery.of(context).size.width,
                        padding: const EdgeInsets.all(20),
                        child: CustomNerSelectableHighlightText(
                          text: context
                              .watch<CustomNerLabelingController>()
                              .getCurrentRow(),
                        ),
                      ),
                    )),
                const SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    elevatedButtonWrapper(
                        child: const Icon(Icons.first_page),
                        onTap: () {
                          context
                              .read<CustomNerLabelingController>()
                              .firstRow();
                        },
                        toolTip: "第一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    elevatedButtonWrapper(
                        child: const Icon(Icons.skip_previous),
                        onTap: () {
                          context
                              .read<CustomNerLabelingController>()
                              .previousRow();
                        },
                        toolTip: "前一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    elevatedButtonWrapper(
                        child: const Icon(Icons.skip_next),
                        onTap: () {
                          context.read<CustomNerLabelingController>().nextRow();
                        },
                        toolTip: "后一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    elevatedButtonWrapper(
                        child: const Icon(Icons.last_page),
                        onTap: () {
                          context.read<CustomNerLabelingController>().lastRow();
                        },
                        toolTip: "最后一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    if (context.watch<CustomNerLabelingController>().isLast)
                      elevatedButtonWrapper(
                          child: const Icon(Icons.file_download),
                          onTap: () async {
                            final data =
                                context.read<CustomNerLabelingController>();
                            if (data.nerFileInfo == null) return;
                            NerSaveModel model = NerSaveModel(
                                fileData: data.nerFileInfo!.fileData);
                            model.fileName = data.nerFileInfo!.fileName;
                            model.fileHash = base64Encode(md5
                                .convert(data.nerFileInfo!.fileUint8Data)
                                .bytes);
                            model.nerType = "custom";
                            debugPrint(model.fileHash);
                            model.mltoolType = MltoolType.forNlp;
                            List<CustomNerHighlightedOffset> offsets =
                                data.allOffsets;
                            model.annotations = offsets
                                .map((e) => e.toAnnotation(data.classNames))
                                .toList();
                            String annotationFileName = data
                                .nerFileInfo!.fileName
                                .replaceAll(".txt", NerSaveModel.extension);
                            model.labels = data.classNames;
                            await model.toFile(annotationFileName, context);
                          },
                          toolTip: "保存标注"),
                  ],
                )
              ],
            ),
          ),
        );
      },
    );
  }

  Widget buildTitle(BuildContext ctx) {
    CustomNerLabelingController controller =
        ctx.watch<CustomNerLabelingController>();

    return Text(
        "${controller.nerFileInfo?.fileName ?? ""}   ${controller.currentRowId + 1}/${controller.nerFileInfo?.rowIndexs.length ?? 0 + 1}");
  }

  Widget elevatedButtonWrapper(
      {required String toolTip,
      required Widget child,
      required VoidCallback onTap}) {
    return Tooltip(
      message: toolTip,
      child: ElevatedButton(
        onPressed: onTap,
        child: child,
      ),
    );
  }
}
