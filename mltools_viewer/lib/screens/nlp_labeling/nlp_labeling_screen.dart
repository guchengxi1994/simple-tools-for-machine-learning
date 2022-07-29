// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/routers.dart';

class NlpLabelingScreen extends StatelessWidget {
  const NlpLabelingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                ClickableCard(
                  cardName: "文本分类",
                  route: Routers.pageError,
                ),
                ClickableCard(
                  cardName: "情感分类",
                  route: Routers.pageError,
                ),
                ClickableCard(
                  cardName: "通用命名实体识别",
                  route: Routers.pageNer,
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                ClickableCard(
                  cardName: "自定义命名实体识别",
                  route: Routers.pageCustomNer,
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}

class ClickableCard extends StatelessWidget {
  const ClickableCard({Key? key, required this.cardName, required this.route})
      : super(key: key);
  final String cardName;
  final String route;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.of(context).pushNamed(route);
      },
      child: Card(
        elevation: 4,
        child: Container(
          padding: const EdgeInsets.all(5),
          width: 0.2 * MediaQuery.of(context).size.width,
          height: 0.2 * MediaQuery.of(context).size.height,
          child: Center(
            child: Text(
              cardName,
              maxLines: null,
              textAlign: TextAlign.center,
              style: AppStyle.cardTextStyle,
            ),
          ),
        ),
      ),
    );
  }
}
