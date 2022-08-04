import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/nlp_classification_controller.dart';
import 'package:mltools_viewer/model/mltools_nlp_classification_model.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:mltools_viewer/screens/nlp_labeling/classification/components/selectable_icon.dart';
import 'package:mltools_viewer/utils/shared_preference_utils.dart';
import 'package:provider/provider.dart';
import 'package:showcaseview/showcaseview.dart';

import '../text_annotation/components/ner_settings_dropdown_button.dart';

// ignore: must_be_immutable
class NlpClassificationScreen extends StatelessWidget {
  NlpClassificationScreen({Key? key}) : super(key: key);
  final ScrollController mainController = ScrollController();

  final GlobalKey actionKey = GlobalKey();
  final GlobalKey actionKey2 = GlobalKey();
  final GlobalKey itemKey = GlobalKey();
  final GlobalKey titleKey = GlobalKey();
  final GlobalKey annotationKey = GlobalKey();
  PersistenceStorage ps = PersistenceStorage();

  @override
  Widget build(BuildContext context) {
    WidgetsBinding.instance.addPostFrameCallback(
      (timeStamp) async {
        if (await ps.isScreenFirstTime(Routers.pageClassification)) {
          ShowCaseWidget.of(context).startShowCase(
              [actionKey, actionKey2, titleKey, itemKey, annotationKey]);
          ps.setScreenFirstTime(Routers.pageClassification, false);
        }
      },
    );

    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => NlpClassificationController())
      ],
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            centerTitle: true,
            title: Showcase(
              key: titleKey,
              description: "这里文件标题和行信息",
              child: buildTitle(context),
            ),
            elevation: 0,
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
                  key: actionKey2,
                  description: "为true时，选择类目后自动下一行",
                  child: Switch(
                      value: context.select<NlpClassificationController, bool>(
                          (value) => value.nextWhenSelected),
                      onChanged: (value) {
                        context
                            .read<NlpClassificationController>()
                            .changeSelectedStatus(value);
                      })),
              Showcase(
                  key: actionKey,
                  description: "这里导入数据",
                  child: NerSettingsDropdownButton(
                    nerType: 2,
                  ))
            ],
          ),
          body: SingleChildScrollView(
            padding: const EdgeInsets.all(50),
            controller: mainController,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text("文本"),
                const SizedBox(
                  height: 20,
                ),
                Showcase(
                    key: annotationKey,
                    description: "这里是待分类文本",
                    child: Card(
                      elevation: 4,
                      child: Container(
                        color: const Color.fromARGB(255, 244, 227, 221),
                        height: 200,
                        width: MediaQuery.of(context).size.width,
                        padding: const EdgeInsets.all(20),
                        child: Text(context
                            .watch<NlpClassificationController>()
                            .getCurrentRow()),
                      ),
                    )),
                const SizedBox(
                  height: 20,
                ),
                Showcase(
                    key: itemKey,
                    description: "这里是类目详情，可手动添加",
                    child: Wrap(
                      spacing: 8,
                      runSpacing: 4,
                      direction: Axis.horizontal,
                      children: [
                        addOneButton(context),
                        ...context
                            .watch<NlpClassificationController>()
                            .classNames
                            .map((e) => SelectableIcon(className: e))
                            .toList()
                      ],
                    )),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    elevatedButtonWrapper(
                        child: const Icon(Icons.first_page),
                        onTap: () {
                          context
                              .read<NlpClassificationController>()
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
                              .read<NlpClassificationController>()
                              .previousRow();
                        },
                        toolTip: "前一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    elevatedButtonWrapper(
                        child: const Icon(Icons.skip_next),
                        onTap: () {
                          context.read<NlpClassificationController>().nextRow();
                        },
                        toolTip: "后一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    elevatedButtonWrapper(
                        child: const Icon(Icons.last_page),
                        onTap: () {
                          context.read<NlpClassificationController>().lastRow();
                        },
                        toolTip: "最后一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    if (context.watch<NlpClassificationController>().isLast)
                      elevatedButtonWrapper(
                          child: const Icon(Icons.file_download),
                          onTap: () async {
                            final data =
                                context.read<NlpClassificationController>();
                            if (data.nerFileInfo == null) {
                              return;
                            }
                            NlpClassificationSaveModel model =
                                NlpClassificationSaveModel();

                            model.fileName = data.nerFileInfo!.fileName;
                            model.fileName = data.nerFileInfo!.fileName;
                            model.fileHash = base64Encode(md5
                                .convert(data.nerFileInfo!.fileUint8Data)
                                .bytes);
                            debugPrint(model.fileHash);

                            model.annotations = data.labeledData
                                .map((e) => Annotations(
                                    rowId: e.id, className: e.className))
                                .toList();
                            String annotationFileName =
                                data.nerFileInfo!.fileName.replaceAll(".txt",
                                    NlpClassificationSaveModel.extension);
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

  Widget addOneButton(BuildContext ctx) {
    String? i;
    return SizedBox(
      height: 200,
      width: 130,
      child: Center(
        child: IconButton(
            onPressed: () async {
              final String? result = await showCupertinoDialog(
                  context: ctx,
                  builder: (ctx) {
                    return CupertinoAlertDialog(
                      title: const Text("添加一个类目名称"),
                      content: Material(
                        child: TextField(
                          decoration: AppStyle.getInputDecotation(),
                          onChanged: (value) {
                            i = value;
                          },
                        ),
                      ),
                      actions: [
                        CupertinoActionSheetAction(
                            onPressed: () {
                              Navigator.of(ctx).pop(null);
                            },
                            child: const Text("取消")),
                        CupertinoActionSheetAction(
                            onPressed: () {
                              Navigator.of(ctx).pop(i);
                            },
                            child: const Text("确定")),
                      ],
                    );
                  });
              if (result == null) {
                return;
              }
              // ignore: use_build_context_synchronously
              ctx.read<NlpClassificationController>().addClassName(result);
            },
            icon: const Icon(
              Icons.add,
              size: 30,
              color: Colors.blue,
            )),
      ),
    );
  }

  Widget buildTitle(BuildContext ctx) {
    NlpClassificationController controller =
        ctx.watch<NlpClassificationController>();

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
