import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import 'abstract_nn_node.dart';
import 'nn_enum.dart';

class FcNode extends NNNode {
  Color defaultBackgroundColor = Colors.purpleAccent;
  FcNode(
      {super.nodeType = NodeType.fc,
      required this.name,
      required this.output,
      required this.prevNodeName,
      required this.inputSize});
  int output;
  String name;
  String prevNodeName;
  Tuple3<int, int, int> inputSize;

  @override
  Tuple3<int, int, int> getOutput() {
    return Tuple3(output, 1, 1);
  }

  @override
  Map<String, dynamic> toJson() {
    return {};
  }

  @override
  Size getWidgetSize() {
    double widgetHeight =
        outputSize.item1 * 10.0 > 100 ? 100 : outputSize.item1 * 10.0;
    double widgetWidth = outputSize.item2 < 50 ? 50 : outputSize.item2 * 1.0;

    return Size(widgetWidth, widgetHeight);
  }

  @override
  Color getColor() {
    return defaultBackgroundColor;
  }

  @override
  String getName() {
    return name;
  }

  @override
  Tuple3<int, int, int> getInputSize() {
    return inputSize;
  }

  @override
  String getParameter() {
    final result = inputSize.item1 * inputSize.item2 * inputSize.item3 * output;
    return "${inputSize.item1}*${inputSize.item2}*${inputSize.item3}*$output=$result";
  }
}
