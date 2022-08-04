import 'package:desktop_multi_window/desktop_multi_window.dart';
import 'package:flutter/material.dart';

/// only works on desktops(windows,linux,macOS)

class MltoolsViewerHelper extends StatelessWidget {
  const MltoolsViewerHelper({Key? key, required this.windowController})
      : super(key: key);

  final WindowController windowController;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          elevation: 0,
          automaticallyImplyLeading: false,
          title: const Text("Mltools Viewer Helper"),
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              _wrapper(() async {
                final result =
                    await DesktopMultiWindow.invokeMethod(0, "onSend", "sift");
                debugPrint("onSend result: $result");
              }, "跳转到SIFT"),
              _wrapper(() async {
                final result = await DesktopMultiWindow.invokeMethod(
                    0, "onSend", "aug_nolabel");
                debugPrint("onSend result: $result");
              }, "跳转到数据增广"),
            ],
          ),
        ),
      ),
    );
  }

  Widget _wrapper(VoidCallback onTap, String title) {
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
