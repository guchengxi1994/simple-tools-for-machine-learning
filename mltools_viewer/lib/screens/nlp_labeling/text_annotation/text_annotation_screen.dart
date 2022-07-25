// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/ner_labeling_controller.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/text_highlight_widget.dart';
import 'package:provider/provider.dart';

import 'components/deletable_card.dart';
import 'components/text_selection_controls.dart';

class TextAnnotationScreen extends StatelessWidget {
  TextAnnotationScreen({Key? key}) : super(key: key);
  // String text = "小明在2022年2月29日去位于常州的世界银行存储了100块津巴布韦，一看时间是17点56分，当时，股票涨了100个点。";
  final ScrollController mainController = ScrollController();
  final ScrollController childController = ScrollController();

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => NerLabelingController()),
      ],
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            elevation: 0,
            automaticallyImplyLeading: false,
            backgroundColor: AppStyle.lightBlue,
            leading: InkWell(
              onTap: () {
                Navigator.of(context).pop();
              },
              child: const Icon(Icons.chevron_left),
            ),
          ),
          body: SingleChildScrollView(
            padding: const EdgeInsets.all(50),
            controller: mainController,
            child: Column(children: [
              buildRow(context),
              const SizedBox(
                height: 30,
              ),
              Card(
                elevation: 4,
                child: SizedBox(
                  height: 200,
                  width: MediaQuery.of(context).size.width,
                  child: Padding(
                    padding: const EdgeInsets.all(20),
                    child: NerSelectableHighlightText(
                      text: context.select<NerLabelingController, String>(
                          (value) => value.text),
                    ),
                  ),
                ),
              ),
            ]),
          ),
        );
      },
    );
  }

  Widget buildRow(BuildContext context) {
    List<Widget> rows = [];
    List<HighlightedOffset> offsets =
        context.watch<NerLabelingController>().offsets;

    List<Widget> rowName = [
      Container(
        width: 10,
        height: 10,
        color: NerToolBarItemControl.name.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerToolBarItemControl.name.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowInstitution = [
      Container(
        width: 10,
        height: 10,
        color: NerToolBarItemControl.institution.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerToolBarItemControl.institution.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowLocation = [
      Container(
        width: 10,
        height: 10,
        color: NerToolBarItemControl.location.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerToolBarItemControl.location.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowTime = [
      Container(
        width: 10,
        height: 10,
        color: NerToolBarItemControl.time.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerToolBarItemControl.time.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowDate = [
      Container(
        width: 10,
        height: 10,
        color: NerToolBarItemControl.date.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerToolBarItemControl.date.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowMoney = [
      Container(
        width: 10,
        height: 10,
        color: NerToolBarItemControl.money.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerToolBarItemControl.money.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    List<Widget> rowPercent = [
      Container(
        width: 10,
        height: 10,
        color: NerToolBarItemControl.percent.getColor(),
      ),
      const SizedBox(
        width: 5,
      ),
      Text(NerToolBarItemControl.percent.toStr()),
      const SizedBox(
        width: 5,
      ),
    ];

    for (final i in offsets) {
      switch (i.control) {
        case NerToolBarItemControl.name:
          rowName.add(DeletableCard(
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerToolBarItemControl.institution:
          rowInstitution.add(DeletableCard(
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerToolBarItemControl.location:
          rowLocation.add(DeletableCard(
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerToolBarItemControl.time:
          rowTime.add(DeletableCard(
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerToolBarItemControl.date:
          rowDate.add(DeletableCard(
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerToolBarItemControl.money:
          rowMoney.add(DeletableCard(
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerToolBarItemControl.percent:
          rowPercent.add(DeletableCard(
            text: i.highlightedText,
            onTap: () {
              context
                  .read<NerLabelingController>()
                  .removeOffsetByContent(i.highlightedText);
            },
          ));
          break;
        case NerToolBarItemControl.none:
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
