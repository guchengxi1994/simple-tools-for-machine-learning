// ignore_for_file: unused_element

import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import 'abstract_nn_node.dart';
import 'nn_enum.dart';

class ConvActivation extends NNNode {
  ConvActivation(
      {super.nodeType = NodeType.conv_activation,
      required this.name,
      required this.inputSize,
      required this.numOutput,
      required this.kernelSize,
      this.padding = 1,
      required this.prevNodeName,
      this.strides = 1,
      this.paddingMode = "zeros"});

  String name;
  int kernelSize;
  int numOutput;
  // ch,width,height
  Tuple3<int, int, int> inputSize;
  int padding;
  String prevNodeName;

  int strides;

  /// TODO
  /// dilation (int)

  /// "zeros","reflect","replicate","circular"
  String paddingMode;

  @override
  Tuple3<int, int, int> getOutput() {
    final output =
        ((inputSize.item2 + 2 * padding - kernelSize) / strides).floor() + 1;

    return Tuple3(numOutput, output, output);
  }

  @override
  Color getColor() {
    return Colors.orange;
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
  String getName() {
    return name;
  }

  @override
  Tuple3<int, int, int> getInputSize() {
    return inputSize;
  }

  @override
  String getParameter() {
    final result = inputSize.item1 * kernelSize * kernelSize * numOutput;

    return "(${inputSize.item1}*$kernelSize*$kernelSize)*$numOutput=$result";
  }
}
