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
              children: [
                InkWell(
                  onTap: () {
                    Navigator.of(context).pushNamed(Routers.pageError);
                  },
                  child: Card(
                    elevation: 4,
                    child: SizedBox(
                      width: 0.2 * MediaQuery.of(context).size.width,
                      height: 0.2 * MediaQuery.of(context).size.height,
                      child: const Center(
                        child: Text(
                          "文本分类",
                          maxLines: 2,
                          style: AppStyle.cardTextStyle,
                        ),
                      ),
                    ),
                  ),
                ),
                InkWell(
                  onTap: () {
                    Navigator.of(context).pushNamed(Routers.pageError);
                  },
                  child: Card(
                    elevation: 4,
                    child: SizedBox(
                      width: 0.2 * MediaQuery.of(context).size.width,
                      height: 0.2 * MediaQuery.of(context).size.height,
                      child: const Center(
                        child: Text(
                          "情感分类",
                          maxLines: 2,
                          style: AppStyle.cardTextStyle,
                        ),
                      ),
                    ),
                  ),
                ),
                InkWell(
                  onTap: () {},
                  child: Card(
                    elevation: 4,
                    child: SizedBox(
                      width: 0.2 * MediaQuery.of(context).size.width,
                      height: 0.2 * MediaQuery.of(context).size.height,
                      child: const Center(
                        child: Text(
                          "命名实体识别",
                          maxLines: 2,
                          style: AppStyle.cardTextStyle,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
