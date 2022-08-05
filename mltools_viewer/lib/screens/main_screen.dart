import 'dart:convert';

import 'package:desktop_multi_window/desktop_multi_window.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/package_info_provider.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => PackageInfoProvider()..init(),
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            elevation: 0,
            centerTitle: true,
            title: const Text("🔥 Built with passion. 🔥"),
            actions: [
              SizedBox(
                height: AppStyle.appbarHeight,
                // width: 100,
                child: Center(
                  child: Text(
                    "v${context.watch<PackageInfoProvider>().packageInfo.version}",
                    style: const TextStyle(fontSize: 20),
                  ),
                ),
              ),
              const SizedBox(
                width: 5,
              ),
              IconButton(
                  tooltip: "Changelog",
                  onPressed: () async {
                    const url =
                        'https://github.com/guchengxi1994/simple-tools-for-machine-learning/blob/dev/mltools_viewer/README.md';

                    if (await canLaunchUrl(Uri.parse(url))) {
                      await launchUrl(Uri.parse(url));
                    }
                  },
                  icon: const Icon(
                    Icons.file_present_rounded,
                    color: Colors.white,
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
                      height: 0.2 * MediaQuery.of(context).size.height,
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
                      height: 0.2 * MediaQuery.of(context).size.height,
                      child: const Center(
                        child: Text(
                          "Nlp Labeling",
                          maxLines: 2,
                          style: AppStyle.cardTextStyle,
                        ),
                      ),
                    ),
                  ),
                ),
                InkWell(
                  onTap: () {
                    Navigator.of(context).pushNamed(Routers.pageToolsMain);
                  },
                  child: Card(
                    elevation: 4,
                    child: SizedBox(
                      width: 0.2 * MediaQuery.of(context).size.width,
                      height: 0.2 * MediaQuery.of(context).size.height,
                      child: const Center(
                        child: Text(
                          "Tools",
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
      },
    );
  }
}

class MainScreenDesktop extends StatefulWidget {
  const MainScreenDesktop({Key? key, required this.controller})
      : super(key: key);
  final WindowController controller;

  @override
  State<MainScreenDesktop> createState() => _MainScreenDesktopState();
}

class _MainScreenDesktopState extends State<MainScreenDesktop> {
  @override
  void initState() {
    super.initState();
    DesktopMultiWindow.setMethodHandler(_handleMethodCallback);

    WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
      final window = await DesktopMultiWindow.createWindow(jsonEncode({
        'args1': 'Sub window',
        'args2': 100,
        'args3': true,
        'bussiness': 'bussiness_test',
      }));
      window
        ..setFrame(const Offset(0, 0) & const Size(500, 720))
        ..center()
        ..setTitle('Mltools Viewer Helper')
        ..show();
    });
  }

  @override
  dispose() {
    DesktopMultiWindow.setMethodHandler(null);
    super.dispose();
  }

  Future<dynamic> _handleMethodCallback(
      MethodCall call, int fromWindowId) async {
    // debugPrint("[augs]:${call.arguments}");
    String? last = call.arguments['last'];
    String next = call.arguments['next'];
    bool navigate = call.arguments['navigate'];
    if (navigate) {
      if (last != next) {
        // Navigator.of(context).pushReplacementNamed(next);
        Routers.navigatorKey.currentState!.pushNamed(next);
        // Routers.navigatorKey.currentState!.popAndPushNamed(next);
      }
      return next;
    } else {
      if (next == "changelog") {
        const url =
            'https://github.com/guchengxi1994/simple-tools-for-machine-learning/blob/dev/mltools_viewer/README.md';

        if (await canLaunchUrl(Uri.parse(url))) {
          await launchUrl(Uri.parse(url));
        }
      }
      if (next == Routers.pageMain) {
        Routers.navigatorKey.currentState!
            .popUntil(ModalRoute.withName(Routers.pageMain));
        return Routers.pageMain;
      }

      return last;
    }
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => PackageInfoProvider()..init(),
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            elevation: 0,
            centerTitle: true,
            title: const Text("🔥 Built with passion. 🔥"),
            actions: [
              SizedBox(
                height: AppStyle.appbarHeight,
                // width: 100,
                child: Center(
                  child: Text(
                    "v${context.watch<PackageInfoProvider>().packageInfo.version}",
                    style: const TextStyle(fontSize: 20),
                  ),
                ),
              ),
              const SizedBox(
                width: 5,
              ),
              IconButton(
                  tooltip: "Changelog",
                  onPressed: () async {
                    const url =
                        'https://github.com/guchengxi1994/simple-tools-for-machine-learning/blob/dev/mltools_viewer/README.md';

                    if (await canLaunchUrl(Uri.parse(url))) {
                      await launchUrl(Uri.parse(url));
                    }
                  },
                  icon: const Icon(
                    Icons.file_present_rounded,
                    color: Colors.white,
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
                      height: 0.2 * MediaQuery.of(context).size.height,
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
                      height: 0.2 * MediaQuery.of(context).size.height,
                      child: const Center(
                        child: Text(
                          "Nlp Labeling",
                          maxLines: 2,
                          style: AppStyle.cardTextStyle,
                        ),
                      ),
                    ),
                  ),
                ),
                InkWell(
                  onTap: () {
                    Navigator.of(context).pushNamed(Routers.pageToolsMain);
                  },
                  child: Card(
                    elevation: 4,
                    child: SizedBox(
                      width: 0.2 * MediaQuery.of(context).size.width,
                      height: 0.2 * MediaQuery.of(context).size.height,
                      child: const Center(
                        child: Text(
                          "Tools",
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
      },
    );
  }
}
