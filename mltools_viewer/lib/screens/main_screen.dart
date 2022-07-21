import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:url_launcher/url_launcher.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        centerTitle: true,
        title: const Text("🔥 Built with passion. 🔥"),
        actions: [
          TextButton(
              onPressed: () async {
                const url =
                    'https://github.com/guchengxi1994/simple-tools-for-machine-learning/blob/dev/mltools_viewer/README.md';

                if (await canLaunchUrl(Uri.parse(url))) {
                  await launchUrl(Uri.parse(url));
                }
              },
              child: const Text(
                "Changelog",
                style: TextStyle(color: Colors.black),
              ))
        ],
      ),
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            InkWell(
              onTap: () {
                Navigator.of(context).pushNamed(Routers.pageImageLabeling);
              },
              child: Card(
                elevation: 4,
                child: SizedBox(
                  width: 0.2 * MediaQuery.of(context).size.width,
                  height: 200,
                  child: const Center(
                    child: Text(
                      "Image Labeling",
                      maxLines: 2,
                      style: AppStyle.cardTextStyle,
                    ),
                  ),
                ),
              ),
            ),
            InkWell(
              onTap: () {
                Navigator.of(context).pushNamed(Routers.pageNlpLabeling);
              },
              child: Card(
                elevation: 4,
                child: SizedBox(
                  width: 0.2 * MediaQuery.of(context).size.width,
                  height: 200,
                  child: const Center(
                    child: Text(
                      "Nlp Labeling",
                      maxLines: 2,
                      style: AppStyle.cardTextStyle,
                    ),
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
