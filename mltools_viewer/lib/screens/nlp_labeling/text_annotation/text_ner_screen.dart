// ignore_for_file: must_be_immutable

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/ner_labeling_controller.dart';
import 'package:mltools_viewer/model/enums.dart';
import 'package:mltools_viewer/model/mltool_ner_save_model.dart';
import 'package:mltools_viewer/model/ner_highlighted_offset.dart';
import 'package:mltools_viewer/model/ner_models.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/text_highlight_widget.dart';
import 'package:mltools_viewer/utils/shared_preference_utils.dart';
import 'package:provider/provider.dart';
import 'package:showcaseview/showcaseview.dart';

import 'components/deletable_card.dart';
import 'components/ner_settings_dropdown_button.dart';
import 'package:crypto/crypto.dart';

class TextAnnotationScreen extends StatelessWidget {
  TextAnnotationScreen({Key? key}) : super(key: key);
  // String text = "小明在2022年2月29日去位于常州的世界银行存储了100块津巴布韦，一看时间是17点56分，当时，股票涨了100个点。";
  final ScrollController mainController = ScrollController();
  final ScrollController childController = ScrollController();
  final GlobalKey actionKey = GlobalKey();
  final GlobalKey itemKey = GlobalKey();
  final GlobalKey titleKey = GlobalKey();
  final GlobalKey annotationKey = GlobalKey();
  PersistenceStorage ps = PersistenceStorage();

  Widget buildTitle(BuildContext ctx) {
    NerLabelingController controller = ctx.watch<NerLabelingController>();

    return Text(
        "${controller.nerFileInfo?.fileName ?? ""}   ${controller.currentRowId + 1}/${controller.nerFileInfo?.rowIndexs.length ?? 0 + 1}");
  }

  @override
  Widget build(BuildContext context) {
    WidgetsBinding.instance.addPostFrameCallback(
      (timeStamp) async {
        if (await ps.isScreenFirstTime(Routers.pageNer)) {
          ShowCaseWidget.of(context)
              .startShowCase([actionKey, titleKey, itemKey, annotationKey]);
          ps.setScreenFirstTime(Routers.pageNer, false);
        }
      },
    );

    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => NerLabelingController()),
      ],
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            elevation: 0,
            title: Showcase(
              key: titleKey,
              description: "这里文件标题和行信息",
              child: buildTitle(context),
            ),
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
                  child: NerSettingsDropdownButton())
            ],
          ),
          body: SingleChildScrollView(
            padding: const EdgeInsets.all(50),
            controller: mainController,
            child: Column(children: [
              Showcase(
                  key: itemKey,
                  description: "这里是标注的具体信息，可手动删除",
                  child: buildRow(context)),
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
                      child: NerSelectableHighlightText(
                        text: context
                            .watch<NerLabelingController>()
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
                        context.read<NerLabelingController>().firstRow();
                      },
                      toolTip: "第一行数据"),
                  const SizedBox(
                    width: 5,
                  ),
                  elevatedButtonWrapper(
                      child: const Icon(Icons.skip_previous),
                      onTap: () {
                        context.read<NerLabelingController>().previousRow();
                      },
                      toolTip: "前一行数据"),
                  const SizedBox(
                    width: 5,
                  ),
                  elevatedButtonWrapper(
                      child: const Icon(Icons.skip_next),
                      onTap: () {
                        context.read<NerLabelingController>().nextRow();
                      },
                      toolTip: "后一行数据"),
                  const SizedBox(
                    width: 5,
                  ),
                  elevatedButtonWrapper(
                      child: const Icon(Icons.last_page),
                      onTap: () {
                        context.read<NerLabelingController>().lastRow();
                      },
                      toolTip: "最后一行数据"),
                  const SizedBox(
                    width: 5,
                  ),
                  if (context.watch<NerLabelingController>().isLast)
                    elevatedButtonWrapper(
                        child: const Icon(Icons.file_download),
                        onTap: () async {
                          final data = context.read<NerLabelingController>();
                          if (data.nerFileInfo == null) {
                            return;
                          }
                          NerSaveModel model = NerSaveModel();

                          model.fileName = data.nerFileInfo!.fileName;
                          model.fileHash = base64Encode(md5
                              .convert(data.nerFileInfo!.fileUint8Data)
                              .bytes);
                          debugPrint(model.fileHash);
                          model.mltoolType = MltoolType.forNlp;
                          List<HighlightedOffset> offsets = data.allOffsets;
                          model.annotations =
                              offsets.map((e) => e.toAnnotation()).toList();
                          String annotationFileName = data.nerFileInfo!.fileName
                              .replaceAll(".txt", NerSaveModel.extension);
                          await model.toFile(annotationFileName);
                        },
                        toolTip: "保存标注"),
                ],
              )
            ]),
          ),
        );
      },
    );
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

  Widget buildRow(BuildContext context) {
    List<Widget> rows = [];
    List<HighlightedOffset> offsets =
        context.watch<NerLabelingController>().getOffsetsByCurrentRowId();

    List<Widget> rowName = [
      Container(
        width: 10,
        height: 10,
        color: NerItems.name.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerItems.name.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowInstitution = [
      Container(
        width: 10,
        height: 10,
        color: NerItems.institution.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerItems.institution.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowLocation = [
      Container(
        width: 10,
        height: 10,
        color: NerItems.location.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerItems.location.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowTime = [
      Container(
        width: 10,
        height: 10,
        color: NerItems.time.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerItems.time.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowDate = [
      Container(
        width: 10,
        height: 10,
        color: NerItems.date.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerItems.date.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowMoney = [
      Container(
        width: 10,
        height: 10,
        color: NerItems.money.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerItems.money.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowPercent = [
      Container(
        width: 10,
        height: 10,
        color: NerItems.percent.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerItems.percent.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    for (final i in offsets) {
      switch (i.itemType) {
        case NerItems.name:
          rowName.add(DeletableCard(
            style: 0,
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerItems.institution:
          rowInstitution.add(DeletableCard(
            style: 0,
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerItems.location:
          rowLocation.add(DeletableCard(
            style: 0,
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerItems.time:
          rowTime.add(DeletableCard(
            style: 0,
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerItems.date:
          rowDate.add(DeletableCard(
            style: 0,
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerItems.money:
          rowMoney.add(DeletableCard(
            style: 0,
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerItems.percent:
          rowPercent.add(DeletableCard(
            style: 0,
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerItems.none:
          break;
      }
    }

    rows.addAll([
      Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: rowName,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: rowInstitution,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: rowLocation,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: rowTime,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: rowDate,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: rowMoney,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: rowPercent,
      ),
    ]);

    return SizedBox(
      width: MediaQuery.of(context).size.width,
      child: Scrollbar(
          child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        controller: childController,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: rows,
        ),
      )),
    );
  }
}
