import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import 'abstract_nn_node.dart';
import 'nn_enum.dart';

class InputNode extends NNNode {
  Color defaultBackgroundColor = Colors.greenAccent;

  InputNode(
      {super.nodeType = NodeType.input,
      required this.inputSize,
      this.name = "input"});
  // ch,width,height
  Tuple3<int, int, int> inputSize;
  String name;

  @override
  Map<String, dynamic> toJson() {
    return {
      "nodeType": NodeType.fc.toStr(),
      "name": name,
      "prevNodeName": "",
      "inputSize": inputSize.toList(),
      "outputSize": outputSize.toList(),
      "details": {}
    };
  }

  @override
  Tuple3<int, int, int> getOutput() {
    return inputSize;
  }

  @override
  Size getWidgetSize() {
    double widgetWidth =
        inputSize.item2 * 1.0 > 256 ? 256 : inputSize.item2 * 1.0;

    return Size(widgetWidth, inputSize.item1 * 10.0);
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
    return "";
  }
}
