import 'package:flutter/material.dart';
import 'package:mltools_viewer/screens/nn_graph/model/nn_nodes/abstract_nn_node.dart';
import 'package:mltools_viewer/screens/nn_graph/model/nn_nodes/nn_enum.dart';
import 'package:tuple/tuple.dart';

class FcActivationDropoutNode extends NNNode {
  FcActivationDropoutNode(
      {super.nodeType = NodeType.fc_activation_dropout,
      required this.name,
      required this.output,
      required this.prevNodeName,
      required this.inputSize});

  int output;
  String name;
  String prevNodeName;
  Tuple3<int, int, int> inputSize;

  @override
  Color getColor() {
    return Colors.redAccent;
  }

  @override
  String getName() {
    return name;
  }

  @override
  Tuple3<int, int, int> getOutput() {
    return Tuple3(output, 1, 1);
  }

  @override
  Size getWidgetSize() {
    double widgetHeight =
        outputSize.item1 * 10.0 > 100 ? 100 : outputSize.item1 * 10.0;
    double widgetWidth = outputSize.item2 < 50 ? 50 : outputSize.item2 * 1.0;

    return Size(widgetWidth, widgetHeight);
  }

  @override
  Map<String, dynamic> toJson() {
    return {};
  }

  @override
  Tuple3<int, int, int> getInputSize() {
    return inputSize;
  }
}
