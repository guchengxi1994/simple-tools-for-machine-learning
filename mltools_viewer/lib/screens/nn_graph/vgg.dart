import 'package:flow_graph/flow_graph.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';

import 'package:tuple/tuple.dart';

import 'components/nn_node_widget.dart';
import 'model/nn_nodes.dart';

/// this is a demo of [flow_graph]
class VggScreen extends StatefulWidget {
  const VggScreen({Key? key}) : super(key: key);

  @override
  State<VggScreen> createState() => _VggScreenState();
}

class _VggScreenState extends State<VggScreen> {
  late GraphNode<NNNode> root;
  final Axis _direction = Axis.vertical;
  final bool _centerLayout = true;

  @override
  void initState() {
    super.initState();
    var inputNode = InputNode(inputSize: const Tuple3(3, 224, 224));
    root = GraphNode(isRoot: true, data: inputNode);

    /// 1
    var conv1_1 = GraphNode(
        data: ConvActivation(
            inputSize: inputNode.outputSize,
            kernelSize: 3,
            name: "conv1",
            numOutput: 64,
            prevNodeName: inputNode.name));
    root.addNext(conv1_1);

    var conv1_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv1_1.data!.outputSize,
            kernelSize: 3,
            name: "conv2",
            numOutput: 64,
            prevNodeName: "conv1"));
    conv1_1.addNext(conv1_2);

    var pooling1 = GraphNode(
        data: PoolingNode(
            name: "pooling1",
            inputSize: conv1_2.data!.outputSize,
            prevNodeName: "conv2"));
    conv1_2.addNext(pooling1);

    /// 2
    var conv2_1 = GraphNode(
        data: ConvActivation(
            inputSize: pooling1.data!.outputSize,
            kernelSize: 3,
            name: "conv2_1",
            numOutput: 128,
            prevNodeName: "pooling1"));
    pooling1.addNext(conv2_1);

    var conv2_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv2_1.data!.outputSize,
            kernelSize: 3,
            name: "conv2_2",
            numOutput: 128,
            prevNodeName: "conv2_1"));
    conv2_1.addNext(conv2_2);

    var pooling2 = GraphNode(
        data: PoolingNode(
            name: "pooling2",
            inputSize: conv2_2.data!.outputSize,
            prevNodeName: "conv2_2"));
    conv2_2.addNext(pooling2);

    /// 3
    var conv3_1 = GraphNode(
        data: ConvActivation(
            inputSize: pooling2.data!.outputSize,
            kernelSize: 3,
            name: "conv3_1",
            numOutput: 256,
            prevNodeName: "pooling2"));
    pooling2.addNext(conv3_1);

    var conv3_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv3_1.data!.outputSize,
            kernelSize: 3,
            name: "conv3_2",
            numOutput: 256,
            prevNodeName: "conv3_1"));
    conv3_1.addNext(conv3_2);

    var conv3_3 = GraphNode(
        data: ConvActivation(
            inputSize: conv3_2.data!.outputSize,
            kernelSize: 3,
            name: "conv3_3",
            numOutput: 256,
            prevNodeName: "conv3_3"));
    conv3_2.addNext(conv3_3);

    var pooling3 = GraphNode(
        data: PoolingNode(
            name: "pooling3",
            inputSize: conv3_3.data!.outputSize,
            prevNodeName: "conv3_3"));
    conv3_3.addNext(pooling3);

    /// 4
    var conv4_1 = GraphNode(
        data: ConvActivation(
            inputSize: pooling3.data!.outputSize,
            kernelSize: 3,
            name: "conv3_1",
            numOutput: 512,
            prevNodeName: "pooling3"));
    pooling3.addNext(conv4_1);

    var conv4_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv4_1.data!.outputSize,
            kernelSize: 3,
            name: "conv4_2",
            numOutput: 512,
            prevNodeName: "conv4_1"));
    conv4_1.addNext(conv4_2);

    var conv4_3 = GraphNode(
        data: ConvActivation(
            inputSize: conv4_2.data!.outputSize,
            kernelSize: 3,
            name: "conv4_3",
            numOutput: 512,
            prevNodeName: "conv4_2"));
    conv4_2.addNext(conv4_3);

    var pooling4 = GraphNode(
        data: PoolingNode(
            name: "pooling4",
            inputSize: conv4_3.data!.outputSize,
            prevNodeName: "conv4_3"));
    conv4_3.addNext(pooling4);

    /// 5
    var conv5_1 = GraphNode(
        data: ConvActivation(
            inputSize: pooling4.data!.outputSize,
            kernelSize: 3,
            name: "conv5_1",
            numOutput: 512,
            prevNodeName: "pooling4"));
    pooling4.addNext(conv5_1);

    var conv5_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv5_1.data!.outputSize,
            kernelSize: 3,
            name: "conv5_2",
            numOutput: 512,
            prevNodeName: "conv5_1"));
    conv5_1.addNext(conv5_2);

    var conv5_3 = GraphNode(
        data: ConvActivation(
            inputSize: conv5_2.data!.outputSize,
            kernelSize: 3,
            name: "conv5_3",
            numOutput: 512,
            prevNodeName: "conv5_2"));
    conv5_2.addNext(conv5_3);

    var pooling5 = GraphNode(
        data: PoolingNode(
            name: "pooling5",
            inputSize: conv5_3.data!.outputSize,
            prevNodeName: "conv5_3"));
    conv5_3.addNext(pooling5);

    /// fc
    var fc1 = GraphNode(
        data: FcActivationDropoutNode(
            name: "fc1",
            output: 4096,
            prevNodeName: "pooling5",
            inputSize: pooling5.data!.outputSize));
    pooling5.addNext(fc1);

    /// fc2
    var fc2 = GraphNode(
        data: FcActivationDropoutNode(
            name: "fc2",
            output: 4096,
            prevNodeName: "fc1",
            inputSize: fc1.data!.outputSize));
    fc1.addNext(fc2);

    /// fc3
    var fc3 = GraphNode(
        data: FcNode(
            name: "fc3",
            output: 1000,
            prevNodeName: "fc2",
            inputSize: fc2.data!.outputSize));
    fc2.addNext(fc3);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("this is a demo of [flow_graph]"),
        centerTitle: true,
        elevation: 0,
        automaticallyImplyLeading: false,
        backgroundColor: AppStyle.lightBlue,
        leading: InkWell(
          onTap: () {
            Navigator.of(context).pop();
          },
          child: const Icon(Icons.chevron_left),
        ),
      ),
      body: Container(
        width: MediaQuery.of(context).size.width,
        padding: const EdgeInsets.all(20),
        child: FlowGraphView(
          enabled: false,
          root: root,
          builder: (context, GraphNode<NNNode> node) {
            return NodeWidget<NNNode>(
              node: node.data!,
            );
          },
          direction: _direction,
          centerLayout: _centerLayout,
        ),
      ),
    );
  }
}
