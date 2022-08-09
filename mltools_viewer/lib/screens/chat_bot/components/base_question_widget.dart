import 'package:flutter/material.dart';

import 'constants.dart';

class BaseQuestionWidget extends StatelessWidget {
  const BaseQuestionWidget({Key? key, required this.text}) : super(key: key);
  final String text;

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.centerRight,
      child: Container(
        color: Colors.blueAccent,
        padding: const EdgeInsets.all(5),
        margin: const EdgeInsets.only(
            right: paddingSize, top: 20, left: paddingSize),
        child: Text(text),
      ),
    );
  }
}
