// ignore_for_file: library_private_types_in_public_api

import 'package:desktop_multi_window/desktop_multi_window.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:provider/provider.dart';

typedef CustomCallback = void Function(BuildContext context);

/// only works on desktops(windows,linux,macOS)

// ignore: must_be_immutable
class MltoolsViewerHelper extends StatelessWidget {
  MltoolsViewerHelper({Key? key, required this.windowController})
      : super(key: key);

  final WindowController windowController;
  final TextEditingController controller = TextEditingController();

  final shotCut = LogicalKeySet(LogicalKeyboardKey.control,
      LogicalKeyboardKey.alt, LogicalKeyboardKey.keyF);

  @override
  Widget build(BuildContext context) {
    return Focus(
      autofocus: true,
      onKey: (node, event) {
        // debugPrint(event.data.keyLabel);
        KeyEventResult result = KeyEventResult.ignored;
        if (shotCut.accepts(event, RawKeyboard.instance)) {
          debugPrint("这里调起弹窗");
          showCupertinoDialog(
              context: context,
              builder: (context) {
                return UnconstrainedBox(
                  child: SizedBox(
                    width: AppStyle.dialogWidth,
                    height: MediaQuery.of(context).size.height * 0.6,
                    child: Dialog(
                        child: Container(
                      padding: const EdgeInsets.all(20),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              IconButton(
                                  onPressed: () {
                                    Navigator.of(context).pop();
                                  },
                                  icon: const Icon(
                                    Icons.cancel,
                                    color: Colors.red,
                                  )),
                              IconButton(
                                  onPressed: () {
                                    context
                                        .read<ViewerHelperController>()
                                        .sortItems(controller.text);
                                    Navigator.of(context).pop();
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
                                  .read<ViewerHelperController>()
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
                                itemCount: context
                                    .watch<ViewerHelperController>()
                                    .searchedStrings()
                                    .length,
                                itemBuilder: (context, index) {
                                  List<String> values = context
                                      .watch<ViewerHelperController>()
                                      .searchedStrings();
                                  return InkWell(
                                    onTap: () {
                                      controller.text = values[index];
                                    },
                                    child:
                                        Text("${index + 1}. ${values[index]}"),
                                  );
                                }),
                          ))
                        ],
                      ),
                    )),
                  ),
                );
              });
        }
        return result;
      },
      child: Builder(
        builder: (context) {
          return Scaffold(
              appBar: AppBar(
                elevation: 0,
                automaticallyImplyLeading: false,
                title: const Text("Mltools Viewer Helper"),
              ),
              body: buildBody(context));
        },
      ),
    );
  }

  Widget buildBody(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: context.watch<ViewerHelperController>().items,
      ),
    );
  }
}

class _Wrapper extends StatelessWidget {
  const _Wrapper({Key? key, required this.onTap, required this.title})
      : super(key: key);
  final VoidCallback onTap;
  final String title;

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      child: ListTile(
        onTap: onTap,
        leading: const Icon(
          Icons.navigation,
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

extension Sort on List<_Wrapper> {
  List<_Wrapper> sortByName(String name) {
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

class ViewerHelperController extends ChangeNotifier {
  List<_Wrapper> items = [];
  late String lastRoute = "/pageMain";
  late String searchStr = "";

  sortItems(String s) {
    items.sortByName(s);
    notifyListeners();
  }

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
      _Wrapper(
          onTap: () async {
            await DesktopMultiWindow.invokeMethod(0, "onSend", {
              "last": lastRoute,
              "next": Routers.pageSift,
              "navigate": true
            }).then((value) => lastRoute = value);
            debugPrint("onSend result: $lastRoute");
          },
          title: "跳转到SIFT"),
      _Wrapper(
          onTap: () async {
            await DesktopMultiWindow.invokeMethod(0, "onSend", {
              "last": lastRoute,
              "next": Routers.pageNolabelaug,
              "navigate": true
            }).then((value) => lastRoute = value);
            debugPrint("onSend result: $lastRoute");
          },
          title: "跳转到数据增广"),
      _Wrapper(
          onTap: () async {
            await DesktopMultiWindow.invokeMethod(0, "onSend", {
              "last": lastRoute,
              "next": Routers.pageMain,
              "navigate": false
            }).then((value) => lastRoute = value);
            debugPrint("onSend result: $lastRoute");
          },
          title: "退回首页"),
    ];
  }
}
