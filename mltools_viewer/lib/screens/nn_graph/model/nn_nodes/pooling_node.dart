import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import 'abstract_nn_node.dart';
import 'nn_enum.dart';

class PoolingNode extends NNNode {
  Color defaultBackgroundColor = Colors.yellowAccent;
  PoolingNode(
      {super.nodeType = NodeType.pooling,
      required this.name,
      required this.inputSize,
      this.kernelSize = 2,
      required this.prevNodeName,
      this.strides = 2,
      this.poolingType = "max pooling"});
  String name;
  int strides;
  int kernelSize;
  String prevNodeName;
  Tuple3<int, int, int> inputSize;

  String poolingType;

  /// TODO
  /// dilation

  @override
  Tuple3<int, int, int> getOutput() {
    final output = ((inputSize.item2 - kernelSize) / strides + 1).floor();
    return Tuple3(inputSize.item1, output, output);
  }

  @override
  Map<String, dynamic> toJson() {
    return {};
  }

  @override
  Size getWidgetSize() {
    double widgetHeight =
        outputSize.item1 * 10.0 > 100 ? 100 : outputSize.item1 * 10.0;
    double widgetWidth =
        outputSize.item2 * 1.0 < 50 ? 50 : outputSize.item2 * 1.0;
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
}
