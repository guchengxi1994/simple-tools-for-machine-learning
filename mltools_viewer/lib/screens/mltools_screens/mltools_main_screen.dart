import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/routers.dart';

class MltoolsMainScreen extends StatelessWidget {
  const MltoolsMainScreen({Key? key}) : super(key: key);

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
      body: SingleChildScrollView(
          padding: const EdgeInsets.all(50),
          child: Column(
            children: [
              _wrapper(() {
                Navigator.of(context).pushNamed(Routers.pageSift);
              }, "图像相似度对比(基于SIFT)")
            ],
          )),
    );
  }

  Widget _wrapper(VoidCallback onTap, String title) {
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
