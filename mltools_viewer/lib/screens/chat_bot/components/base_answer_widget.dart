import 'package:flutter/material.dart';

import 'constants.dart';

class BaseAnswerWidget extends StatelessWidget {
  const BaseAnswerWidget({Key? key, required this.text}) : super(key: key);
  final String? text;
  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.centerLeft,
      child: Container(
        color: Colors.grey[200],
        padding: const EdgeInsets.all(5),
        margin: const EdgeInsets.only(
            right: paddingSize, top: 20, left: paddingSize),
        child: Text(text ?? "正在输入..."),
      ),
    );
  }
}
