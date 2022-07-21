import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/routers.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        centerTitle: true,
        title: const Text("🔥 Built with passion. 🔥"),
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
