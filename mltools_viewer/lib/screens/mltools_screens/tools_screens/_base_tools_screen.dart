// ignore_for_file: depend_on_referenced_packages

import 'package:clipboard/clipboard.dart';
import 'package:code_text_field/code_text_field.dart';
import 'package:dio/dio.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/apis.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/utils/dio_utils.dart';
import 'package:mltools_viewer/utils/toast_utils.dart';
import 'package:taichi/taichi.dart' show TaichiOverlay;
import 'package:highlight/languages/python.dart' as python;
import 'package:flutter_highlight/themes/monokai-sublime.dart';

abstract class BaseToolsScreen extends StatefulWidget {
  const BaseToolsScreen({Key? key, required this.barTitle}) : super(key: key);
  final String barTitle;

  @override
  // ignore: no_logic_in_create_state
  BasePageState createState() => getState();

  BasePageState getState();
}

class BasePageState<T extends BaseToolsScreen> extends State<T> {
  bool isLoading = false;
  DioUtils dioUtils = DioUtils();
  late CodeController _codeController;

  @override
  void dispose() {
    try {
      _codeController.dispose();
    } catch (_) {}

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return TaichiOverlay.simple(
        isLoading: isLoading,
        child: Scaffold(
          appBar: PreferredSize(
              preferredSize: const Size.fromHeight(AppStyle.appbarHeight),
              child: AppBar(
                title: Text(widget.barTitle),
                centerTitle: true,
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
                  IconButton(
                      tooltip: "python代码",
                      onPressed: () async {
                        // print(ModalRoute.of(context)?.settings.name);
                        String? routeName =
                            ModalRoute.of(context)?.settings.name;
                        switch (routeName) {
                          case null:
                            break;
                          case "/pageSift":
                            Response? r =
                                await dioUtils.get(mltoolsApis['siftCode']);
                            // print(r);
                            if (r != null) {
                              _showDialog(r.data['data']['codes']);
                            }
                            break;
                          case "/pageNolabelaug":
                            Response? r = await dioUtils
                                .get(mltoolsApis['augNoLabelcode']);
                            // print(r);
                            if (r != null) {
                              _showDialog(r.data['data']['codes']);
                            }
                            break;
                          case "/pageDlib":
                            Response? r =
                                await dioUtils.get(mltoolsApis['dlibCode']);
                            // print(r);
                            if (r != null) {
                              _showDialog(r.data['data']['codes']);
                            }
                            break;
                        }
                      },
                      icon: const Icon(Icons.details))
                ],
              )),
          body: baseBuild(context),
        ));
  }

  _showDialog(String dialogContent) {
    _codeController = CodeController(
      text: dialogContent,
      language: python.python,
      theme: monokaiSublimeTheme,
    );
    showCupertinoDialog(
        context: context,
        builder: (context) => UnconstrainedBox(
              child: SizedBox(
                width: MediaQuery.of(context).size.width * 0.6,
                height: MediaQuery.of(context).size.height * 0.6,
                child: Dialog(
                  child: Container(
                      padding: const EdgeInsets.all(20),
                      child: SingleChildScrollView(
                        child: Column(
                          children: [
                            CodeField(
                              textStyle:
                                  const TextStyle(fontFamily: 'SourceCode'),
                              controller: _codeController,
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                InkWell(
                                  onTap: () {
                                    FlutterClipboard.copy(dialogContent).then(
                                        (value) => ToastUtils(context)
                                            .showToast("已复制"));
                                  },
                                  child: const Icon(
                                    Icons.copy_all,
                                    color: Colors.yellow,
                                  ),
                                ),
                                const SizedBox(
                                  width: 20,
                                ),
                                InkWell(
                                  onTap: () {
                                    Navigator.of(context).pop();
                                  },
                                  child: const Icon(
                                    Icons.check,
                                    color: Colors.green,
                                  ),
                                ),
                              ],
                            )
                          ],
                        ),
                      )),
                ),
              ),
            ));
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
  }

  @override
  void didUpdateWidget(T oldWidget) {
    super.didUpdateWidget(oldWidget);
  }

  @override
  void reassemble() {
    super.reassemble();
  }

  @override
  void deactivate() {
    super.deactivate();
  }

  void onCreate() {}
  void onDes() {}
  baseBuild(BuildContext context) {}
}
