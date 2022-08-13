// ignore_for_file: implementation_imports

import 'package:flow_graph/flow_graph.dart';
import 'package:flutter/material.dart';
import 'package:flow_graph/src/focus.dart';
import 'package:flow_graph/src/graph_view.dart';

import '../model/nn_nodes.dart';
import 'nn_node_widget.dart';

/// this is a modification of [flow_graph_view] to draw nn graph
class NNFlowGraphView<T extends NNNode> extends StatefulWidget {
  const NNFlowGraphView(
      {Key? key,
      this.root,
      this.direction = Axis.horizontal,
      this.onSelectChanged,
      this.onEdgeColor,
      this.messageStyle,
      required this.nodeMessageMap,
      this.structure})
      : assert(root != null || structure != null),
        super(key: key);
  final GraphNode<T>? root;
  final Axis direction;
  final OnSelectChanged<T>? onSelectChanged;
  final OnEdgeColor<T>? onEdgeColor;
  final TextStyle? messageStyle;
  final Map<int, String> nodeMessageMap;
  final Map<String, dynamic>? structure;

  @override
  State<NNFlowGraphView> createState() => _NNFlowGraphViewState();
}

class _NNFlowGraphViewState<T extends NNNode>
    extends State<NNFlowGraphView<T>> {
  late Graph<T> graph;
  final GraphFocusManager _focusManager = GraphFocusManager();

  Map<String, dynamic> _dumpToJson() {
    Map<String, dynamic> result = {"items": []};
    final nodes = graph.nodes as List<GraphNode<T>>;
    for (final i in nodes) {
      result["items"].add(i.data!.toJson());
    }

    return result;
  }

  /// use a [GlobalKey] to generate structure
  Map<String, dynamic> get structure => _dumpToJson();

  /// load neural networks structure
  void _fromJson() {
    /// TODO
  }

  @override
  void initState() {
    super.initState();
    if (widget.root != null) {
      graph = Graph(
          nodeMessageMap: widget.nodeMessageMap,
          messageStyle: widget.messageStyle,
          nodes: _linearNodes(context, widget.root!),
          direction: widget.direction,
          centerLayout: true,
          onEdgeColor: widget.onEdgeColor);
    } else {
      _fromJson();
      graph = Graph(
          nodeMessageMap: widget.nodeMessageMap,
          messageStyle: widget.messageStyle,
          nodes: _linearNodes(context, widget.root!),
          direction: widget.direction,
          centerLayout: true,
          onEdgeColor: widget.onEdgeColor);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: GraphFocus(
        manager: _focusManager,
        child: Builder(
          builder: (context) {
            return GestureDetector(
              onTap: () {
                GraphFocus.of(context).clearFocus();
                widget.onSelectChanged?.call(null);
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
