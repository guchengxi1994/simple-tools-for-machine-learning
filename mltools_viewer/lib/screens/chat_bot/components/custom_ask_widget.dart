import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

import '../models/custom_response_model.dart';
import '../models/question_model.dart';
import 'constants.dart';

// ignore: must_be_immutable
class CustomerAskWidget extends StatefulWidget {
  CustomerAskWidget({Key? key, required this.dataList}) : super(key: key);
  List<Data>? dataList;

  @override
  // ignore: library_private_types_in_public_api
  _CustomerAskWidgetState createState() => _CustomerAskWidgetState();
}

class _CustomerAskWidgetState extends State<CustomerAskWidget> {
  late List<Widget> ans;

  Widget humanHelp = Container(
    alignment: Alignment.bottomRight,
    margin: const EdgeInsets.only(
        top: paddingSize, right: paddingSize, bottom: 0.5 * paddingSize),
    child: InkWell(
      onTap: () {
        Fluttertoast.showToast(msg: "这里跳转客服页面");
      },
      child: const Text("没找到想要的结果？点此人工客服帮助"),
    ),
  );

  @override
  void initState() {
    super.initState();
    if (null != widget.dataList) {
      ans = CustomResponseModel.renderQuestion(context, widget.dataList!);
      ans.add(humanHelp);
    } else {
      ans = [];
      ans.add(humanHelp);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.all(paddingSize),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(paddingSize),
            alignment: Alignment.centerLeft,
            child: const Text(
              "相似的问题",
              style: TextStyle(color: Colors.greenAccent, fontSize: 20),
            ),
          ),
          const Divider(),
          Column(
            children: ans,
          )
        ],
      ),
    );
  }
}
