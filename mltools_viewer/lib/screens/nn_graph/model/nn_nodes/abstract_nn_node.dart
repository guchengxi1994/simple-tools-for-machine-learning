import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import 'nn_enum.dart';

abstract class NNNode {
  NodeType nodeType;

  NNNode({required this.nodeType});

  Map<String, dynamic> toJson();

  Tuple3<int, int, int> getOutput();

  Tuple3<int, int, int> get outputSize => getOutput();
  Tuple3<int, int, int> getInputSize();

  Size getWidgetSize();
  Color getColor();
  String getName();
}