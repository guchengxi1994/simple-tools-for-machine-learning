import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import 'abstract_nn_node.dart';
import 'nn_enum.dart';

class ActivationNode extends NNNode {
  Color defaultBackgroundColor = Colors.blueAccent;
  ActivationNode(
      {super.nodeType = NodeType.activation,
      required this.inputSize,
      required this.name,
      required this.prevNodeName,
      this.activationType = 'relu'});
  Tuple3<int, int, int> inputSize;
  String name;
  String prevNodeName;

  /// [relu],[tanh],....
  String activationType;

  @override
  Tuple3<int, int, int> getOutput() {
    return inputSize;
  }

  @override
  Map<String, dynamic> toJson() {
    return {};
  }

  @override
  Size getWidgetSize() {
    return const Size(100, 10);
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
