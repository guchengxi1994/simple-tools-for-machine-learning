// ignore_for_file: implementation_imports

import 'package:flow_graph/flow_graph.dart';
import 'package:flutter/material.dart';
import 'package:flow_graph/src/focus.dart';
import 'package:flow_graph/src/graph_view.dart';

import '../model/nn_nodes.dart';
import 'nn_node_widget.dart';

/// this is a modification of [flow_graph_view] to draw nn graph

class NNFlowGraphView<T extends NNNode> extends StatelessWidget {
  NNFlowGraphView(
      {Key? key,
      required this.root,
      this.direction = Axis.horizontal,
      this.onSelectChanged,
      this.onEdgeColor,
      this.messageStyle,
      required this.nodeMessageMap})
      : super(key: key);
  final GraphNode<T> root;
  final Axis direction;
  final OnSelectChanged<T>? onSelectChanged;
  final OnEdgeColor<T>? onEdgeColor;
  final TextStyle? messageStyle;
  final Map<int, String> nodeMessageMap;
  final GraphFocusManager _focusManager = GraphFocusManager();

  late Graph<T> graph;

  Map<String, dynamic> _dumpToJson() {
    final nodes = graph.nodes as List<GraphNode<T>>;

    return {};
  }

  Map<String, dynamic> get structure => _dumpToJson();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: GraphFocus(
        manager: _focusManager,
        child: Builder(
          builder: (context) {
            graph = Graph(
                nodeMessageMap: nodeMessageMap,
                messageStyle: messageStyle,
                nodes: _linearNodes(context, root),
                direction: direction,
                centerLayout: true,
                onEdgeColor: onEdgeColor);

            return GestureDetector(
              onTap: () {
                GraphFocus.of(context).clearFocus();
                onSelectChanged?.call(null);
              },
              child: GraphView<T>(graph: graph),
            );
          },
        ),
      ),
    );
  }

  //bfs
  List<GraphNode> _linearNodes(BuildContext context, GraphNode<T> root) {
    root.buildBox(
        childWidget: NodeWidget<NNNode>(
      node: root.data!,
    ));
    var walked = <GraphNode>[root];
    var visited = <GraphNode>[root];

    while (walked.isNotEmpty) {
      var currentNode = walked.removeAt(0);
      if (currentNode.nextList.isNotEmpty) {
        for (var i = 0; i < currentNode.nextList.length; i++) {
          var node = currentNode.nextList[i] as GraphNode<T>;
          if (!visited.contains(node)) {
            node.buildBox(childWidget: NodeWidget(node: node.data!));
            walked.add(node);
            visited.add(node);
          }
        }
      }
    }
    return visited;
  }
}
