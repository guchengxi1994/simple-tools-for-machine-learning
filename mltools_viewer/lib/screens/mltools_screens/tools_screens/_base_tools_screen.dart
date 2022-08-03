import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/utils/dio_utils.dart';
import 'package:taichi/taichi.dart' show TaichiOverlay;

abstract class BaseToolsScreen extends StatefulWidget {
  const BaseToolsScreen(
      {Key? key, required this.barTitle, required this.onShowCodeClicked})
      : super(key: key);
  final String barTitle;
  final VoidCallback onShowCodeClicked;

  @override
  // ignore: no_logic_in_create_state
  BasePageState createState() => getState();

  BasePageState getState();
}

class BasePageState<T extends BaseToolsScreen> extends State<T> {
  bool isLoading = false;
  DioUtils dioUtils = DioUtils();

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
                      onPressed: widget.onShowCodeClicked,
                      icon: const Icon(Icons.details))
                ],
              )),
          body: baseBuild(context),
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

  @override
  void dispose() {
    super.dispose();
  }
}
