// ignore_for_file: library_private_types_in_public_api

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:provider/provider.dart';

class ToolsScreen extends StatelessWidget {
  const ToolsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => MltoolsController()..init())
      ],
      builder: (context, child) => MltoolsMainScreen(),
    );
  }
}

// ignore: must_be_immutable
class MltoolsMainScreen extends StatelessWidget {
  MltoolsMainScreen({Key? key}) : super(key: key);
  final TextEditingController controller = TextEditingController();
  final shotCut = LogicalKeySet(LogicalKeyboardKey.control,
      LogicalKeyboardKey.alt, LogicalKeyboardKey.keyF);

  OverlayEntry? _overlayEntry;
  bool show = false;

  void _toggleOverlay(BuildContext context) {
    // debugPrint("_toggleOverlay");
    if (!show) {
      // debugPrint("_toggleOverlay");
      _overlayEntry = OverlayEntry(builder: (c) {
        final items = context.watch<MltoolsController>().searchedStrings();
        return UnconstrainedBox(
            child: Material(
          child: SizedBox(
              width: AppStyle.dialogWidth,
              height: MediaQuery.of(context).size.height * 0.6,
              child: Container(
                padding: const EdgeInsets.all(20),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        IconButton(
                            onPressed: () {
                              _hideOverlay();
                            },
                            icon: const Icon(
                              Icons.cancel,
                              color: Colors.red,
                            )),
                        IconButton(
                            onPressed: () {
                              context
                                  .read<MltoolsController>()
                                  .sortItems(controller.text);
                              _hideOverlay();
                            },
                            icon: const Icon(
                              Icons.done,
                              color: Colors.green,
                            )),
                      ],
                    ),
                    TextField(
                      onChanged: (value) {
                        context
                            .read<MltoolsController>()
                            .changeSearchStr(value);
                      },
                      controller: controller,
                      maxLines: null,
                      decoration: AppStyle.getInputDecotation(),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Expanded(
                        child: Container(
                      color: AppStyle.chipBackground,
                      child: ListView.builder(
                          itemCount: items.length,
                          itemBuilder: (context, index) {
                            List<String> values = items;
                            return InkWell(
                              onTap: () {
                                controller.text = values[index];
                              },
                              child: Text("${index + 1}. ${values[index]}"),
                            );
                          }),
                    ))
                  ],
                ),
              )),
        ));
      });

      OverlayState? overlayState = Navigator.of(context).overlay;
      // debugPrint("overlayState $overlayState");
      overlayState?.insert(_overlayEntry!);
      show = !show;
    }
  }

  void _hideOverlay() {
    try {
      _overlayEntry?.remove();
    } catch (e, s) {
      debugPrint(s.toString());
    }
    if (show) {
      show = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Focus(
        autofocus: true,
        onKey: (node, event) {
          KeyEventResult result = KeyEventResult.ignored;
          if (shotCut.accepts(event, RawKeyboard.instance)) {
            _toggleOverlay(context);
          }

          return result;
        },
        child: Scaffold(
          appBar: AppBar(
            elevation: 0,
            centerTitle: true,
            title: const Text("按下 Ctrl+Alt+F 有惊喜"),
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
              child: Column(
                children: context.watch<MltoolsController>().items,
              )),
        ));
  }
}

// ignore: camel_case_types
class _wrapper extends StatelessWidget {
  const _wrapper(
    this.onTap,
    this.title, {
    Key? key,
  }) : super(key: key);
  final VoidCallback onTap;
  final String title;

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      child: ListTile(
        onTap: onTap,
        leading: const Icon(
          Icons.functions,
          color: Colors.black,
        ),
        trailing: const Icon(Icons.chevron_right),
        title: Text(
          title,
          maxLines: null,
        ),
      ),
    );
  }
}

class MltoolsController extends ChangeNotifier {
  List<_wrapper> items = [];

  sortItems(String s) {
    items.sortByName(s);
    notifyListeners();
  }

  late String searchStr = "";

  List<String> searchedStrings() {
    if (searchStr == "") {
      return items.map((e) => e.title).toList();
    } else {
      return items
          .where((element) => element.title.contains(searchStr))
          .map((e) => e.title)
          .toList()
          .toList();
    }
  }

  changeSearchStr(String s) {
    searchStr = s;
    notifyListeners();
  }

  init() {
    items = [
      _wrapper(() {
        Routers.navigatorKey.currentState!.pushNamed(Routers.pageSift);
      }, "图像相似度对比(基于SIFT)"),
      _wrapper(() {
        Routers.navigatorKey.currentState!.pushNamed(Routers.pageNolabelaug);
      }, "图像增广(无标注)"),
      _wrapper(() {
        Routers.navigatorKey.currentState!.pushNamed(Routers.pageDlib);
      }, "Dlib人脸识别")
    ];
  }
}

extension Sort on List<_wrapper> {
  List<_wrapper> sortByName(String name) {
    if (name == "") {
      return this;
    }

    sort((a, b) {
      if (a.title.contains(name)) {
        return -1;
      } else if (b.title.contains(name)) {
        return 1;
      } else {
        return 0;
      }
    });

    return this;
  }
}
