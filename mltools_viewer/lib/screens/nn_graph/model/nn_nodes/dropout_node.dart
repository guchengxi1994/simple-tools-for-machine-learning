import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import 'abstract_nn_node.dart';
import 'nn_enum.dart';

class DropoutNode extends NNNode {
  Color defaultBackgroundColor = Colors.grey;
  double rate;
  String name;
  String prevNodeName;
  Tuple3<int, int, int> inputSize;

  DropoutNode(
      {super.nodeType = NodeType.dropout,
      required this.name,
      required this.prevNodeName,
      required this.rate,
      required this.inputSize});

  @override
  Tuple3<int, int, int> getOutput() {
    return inputSize;
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      "nodeType": NodeType.dropout.toStr(),
      "name": name,
      "prevNodeName": prevNodeName,
      "inputSize": inputSize.toList(),
      "outputSize": outputSize.toList(),
      "details": {"rate": rate}
    };
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
    return "";
  }
}
