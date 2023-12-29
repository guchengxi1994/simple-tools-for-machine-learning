import 'package:flow_graph/flow_graph.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/screens/nn_graph/model/nn_nodes/nn_enum.dart';

import 'package:tuple/tuple.dart';

import 'components/nn_node_widget.dart';
import 'components/nn_parameter_table_view.dart';
import 'model/nn_nodes.dart';
import 'model/nn_parameter_model.dart';

/// this is a demo of [flow_graph]
class VggScreen extends StatefulWidget {
  const VggScreen({super.key});

  @override
  State<VggScreen> createState() => _VggScreenState();
}

class _VggScreenState extends State<VggScreen> {
  late GraphNode<NNNode> root;
  final Axis _direction = Axis.vertical;
  final bool _centerLayout = true;
  late Map<int, String> nodeMessage = {};
  late List<NNParameterModel> datas = [];

  @override
  void initState() {
    super.initState();
    var inputNode = InputNode(inputSize: const Tuple3(3, 224, 224));
    root = GraphNode(isRoot: true, data: inputNode);

    nodeMessage[root.id] = inputNode.outputSize.toString();
    datas.add(NNParameterModel(
        layerName: inputNode.name,
        layerType: inputNode.nodeType.toStr(),
        memory: inputNode.getMemory(),
        parameter: "",
        sizeIn: inputNode.inputSize.toString(),
        sizeOut: inputNode.inputSize.toString()));

    /// 1
    var conv1_1 = GraphNode(
        data: ConvActivation(
            inputSize: inputNode.outputSize,
            kernelSize: 3,
            name: "conv1",
            numOutput: 64,
            prevNodeName: inputNode.name));
    root.addNext(conv1_1);

    datas.add(NNParameterModel(
        layerName: conv1_1.data!.name,
        layerType: conv1_1.data!.nodeType.toStr(),
        memory: conv1_1.data!.getMemory(),
        parameter: conv1_1.data!.getParameter(),
        sizeIn: conv1_1.data!.inputSize.toString(),
        sizeOut: conv1_1.data!.inputSize.toString()));

    nodeMessage[conv1_1.id] = conv1_1.data!.outputSize.toString();

    var conv1_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv1_1.data!.outputSize,
            kernelSize: 3,
            name: "conv2",
            numOutput: 64,
            prevNodeName: "conv1"));
    conv1_1.addNext(conv1_2);

    datas.add(NNParameterModel(
        layerName: conv1_2.data!.name,
        layerType: conv1_2.data!.nodeType.toStr(),
        memory: conv1_2.data!.getMemory(),
        parameter: conv1_2.data!.getParameter(),
        sizeIn: conv1_2.data!.inputSize.toString(),
        sizeOut: conv1_2.data!.inputSize.toString()));

    nodeMessage[conv1_2.id] = conv1_2.data!.outputSize.toString();

    var pooling1 = GraphNode(
        data: PoolingNode(
            name: "pooling1",
            inputSize: conv1_2.data!.outputSize,
            prevNodeName: "conv2"));
    conv1_2.addNext(pooling1);

    datas.add(NNParameterModel(
        layerName: pooling1.data!.name,
        layerType: pooling1.data!.nodeType.toStr(),
        memory: pooling1.data!.getMemory(),
        parameter: pooling1.data!.getParameter(),
        sizeIn: pooling1.data!.inputSize.toString(),
        sizeOut: pooling1.data!.inputSize.toString()));

    nodeMessage[pooling1.id] = pooling1.data!.outputSize.toString();

    /// 2
    var conv2_1 = GraphNode(
        data: ConvActivation(
            inputSize: pooling1.data!.outputSize,
            kernelSize: 3,
            name: "conv2_1",
            numOutput: 128,
            prevNodeName: "pooling1"));
    pooling1.addNext(conv2_1);

    datas.add(NNParameterModel(
        layerName: conv2_1.data!.name,
        layerType: conv2_1.data!.nodeType.toStr(),
        memory: conv2_1.data!.getMemory(),
        parameter: conv2_1.data!.getParameter(),
        sizeIn: conv2_1.data!.inputSize.toString(),
        sizeOut: conv2_1.data!.inputSize.toString()));

    nodeMessage[conv2_1.id] = conv2_1.data!.outputSize.toString();

    var conv2_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv2_1.data!.outputSize,
            kernelSize: 3,
            name: "conv2_2",
            numOutput: 128,
            prevNodeName: "conv2_1"));
    conv2_1.addNext(conv2_2);

    datas.add(NNParameterModel(
        layerName: conv2_2.data!.name,
        layerType: conv2_2.data!.nodeType.toStr(),
        memory: conv2_2.data!.getMemory(),
        parameter: conv2_2.data!.getParameter(),
        sizeIn: conv2_2.data!.inputSize.toString(),
        sizeOut: conv2_2.data!.inputSize.toString()));

    nodeMessage[conv2_2.id] = conv2_2.data!.outputSize.toString();

    var pooling2 = GraphNode(
        data: PoolingNode(
            name: "pooling2",
            inputSize: conv2_2.data!.outputSize,
            prevNodeName: "conv2_2"));
    conv2_2.addNext(pooling2);

    datas.add(NNParameterModel(
        layerName: pooling2.data!.name,
        layerType: pooling2.data!.nodeType.toStr(),
        memory: pooling2.data!.getMemory(),
        parameter: pooling2.data!.getParameter(),
        sizeIn: pooling2.data!.inputSize.toString(),
        sizeOut: pooling2.data!.inputSize.toString()));

    nodeMessage[pooling2.id] = pooling2.data!.outputSize.toString();

    /// 3
    var conv3_1 = GraphNode(
        data: ConvActivation(
            inputSize: pooling2.data!.outputSize,
            kernelSize: 3,
            name: "conv3_1",
            numOutput: 256,
            prevNodeName: "pooling2"));
    pooling2.addNext(conv3_1);

    datas.add(NNParameterModel(
        layerName: conv3_1.data!.name,
        layerType: conv3_1.data!.nodeType.toStr(),
        memory: conv3_1.data!.getMemory(),
        parameter: conv3_1.data!.getParameter(),
        sizeIn: conv3_1.data!.inputSize.toString(),
        sizeOut: conv3_1.data!.inputSize.toString()));

    nodeMessage[conv3_1.id] = conv3_1.data!.outputSize.toString();

    var conv3_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv3_1.data!.outputSize,
            kernelSize: 3,
            name: "conv3_2",
            numOutput: 256,
            prevNodeName: "conv3_1"));
    conv3_1.addNext(conv3_2);

    datas.add(NNParameterModel(
        layerName: conv3_2.data!.name,
        layerType: conv3_2.data!.nodeType.toStr(),
        memory: conv3_2.data!.getMemory(),
        parameter: conv3_2.data!.getParameter(),
        sizeIn: conv3_2.data!.inputSize.toString(),
        sizeOut: conv3_2.data!.inputSize.toString()));

    nodeMessage[conv3_2.id] = conv3_2.data!.outputSize.toString();

    var conv3_3 = GraphNode(
        data: ConvActivation(
            inputSize: conv3_2.data!.outputSize,
            kernelSize: 3,
            name: "conv3_3",
            numOutput: 256,
            prevNodeName: "conv3_3"));
    conv3_2.addNext(conv3_3);

    datas.add(NNParameterModel(
        layerName: conv3_3.data!.name,
        layerType: conv3_3.data!.nodeType.toStr(),
        memory: conv3_3.data!.getMemory(),
        parameter: conv3_3.data!.getParameter(),
        sizeIn: conv3_3.data!.inputSize.toString(),
        sizeOut: conv3_3.data!.inputSize.toString()));

    nodeMessage[conv3_3.id] = conv3_3.data!.outputSize.toString();

    var pooling3 = GraphNode(
        data: PoolingNode(
            name: "pooling3",
            inputSize: conv3_3.data!.outputSize,
            prevNodeName: "conv3_3"));
    conv3_3.addNext(pooling3);

    datas.add(NNParameterModel(
        layerName: pooling3.data!.name,
        layerType: pooling3.data!.nodeType.toStr(),
        memory: pooling3.data!.getMemory(),
        parameter: pooling3.data!.getParameter(),
        sizeIn: pooling3.data!.inputSize.toString(),
        sizeOut: pooling3.data!.inputSize.toString()));
    nodeMessage[pooling3.id] = pooling3.data!.outputSize.toString();

    /// 4
    var conv4_1 = GraphNode(
        data: ConvActivation(
            inputSize: pooling3.data!.outputSize,
            kernelSize: 3,
            name: "conv3_1",
            numOutput: 512,
            prevNodeName: "pooling3"));
    pooling3.addNext(conv4_1);

    datas.add(NNParameterModel(
        layerName: conv4_1.data!.name,
        layerType: conv4_1.data!.nodeType.toStr(),
        memory: conv4_1.data!.getMemory(),
        parameter: conv4_1.data!.getParameter(),
        sizeIn: conv4_1.data!.inputSize.toString(),
        sizeOut: conv4_1.data!.inputSize.toString()));

    nodeMessage[conv4_1.id] = conv4_1.data!.outputSize.toString();

    var conv4_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv4_1.data!.outputSize,
            kernelSize: 3,
            name: "conv4_2",
            numOutput: 512,
            prevNodeName: "conv4_1"));
    conv4_1.addNext(conv4_2);

    datas.add(NNParameterModel(
        layerName: conv4_2.data!.name,
        layerType: conv4_2.data!.nodeType.toStr(),
        memory: conv4_2.data!.getMemory(),
        parameter: conv4_2.data!.getParameter(),
        sizeIn: conv4_2.data!.inputSize.toString(),
        sizeOut: conv4_2.data!.inputSize.toString()));

    nodeMessage[conv4_2.id] = conv4_2.data!.outputSize.toString();

    var conv4_3 = GraphNode(
        data: ConvActivation(
            inputSize: conv4_2.data!.outputSize,
            kernelSize: 3,
            name: "conv4_3",
            numOutput: 512,
            prevNodeName: "conv4_2"));
    conv4_2.addNext(conv4_3);

    datas.add(NNParameterModel(
        layerName: conv4_3.data!.name,
        layerType: conv4_3.data!.nodeType.toStr(),
        memory: conv4_3.data!.getMemory(),
        parameter: conv4_3.data!.getParameter(),
        sizeIn: conv4_3.data!.inputSize.toString(),
        sizeOut: conv4_3.data!.inputSize.toString()));

    nodeMessage[conv4_3.id] = conv4_3.data!.outputSize.toString();
    var pooling4 = GraphNode(
        data: PoolingNode(
            name: "pooling4",
            inputSize: conv4_3.data!.outputSize,
            prevNodeName: "conv4_3"));
    conv4_3.addNext(pooling4);

    datas.add(NNParameterModel(
        layerName: pooling4.data!.name,
        layerType: pooling4.data!.nodeType.toStr(),
        memory: pooling4.data!.getMemory(),
        parameter: pooling4.data!.getParameter(),
        sizeIn: pooling4.data!.inputSize.toString(),
        sizeOut: pooling4.data!.inputSize.toString()));

    nodeMessage[pooling4.id] = pooling4.data!.outputSize.toString();

    /// 5
    var conv5_1 = GraphNode(
        data: ConvActivation(
            inputSize: pooling4.data!.outputSize,
            kernelSize: 3,
            name: "conv5_1",
            numOutput: 512,
            prevNodeName: "pooling4"));
    pooling4.addNext(conv5_1);

    datas.add(NNParameterModel(
        layerName: conv5_1.data!.name,
        layerType: conv5_1.data!.nodeType.toStr(),
        memory: conv5_1.data!.getMemory(),
        parameter: conv5_1.data!.getParameter(),
        sizeIn: conv5_1.data!.inputSize.toString(),
        sizeOut: conv5_1.data!.inputSize.toString()));

    nodeMessage[conv5_1.id] = conv5_1.data!.outputSize.toString();

    var conv5_2 = GraphNode(
        data: ConvActivation(
            inputSize: conv5_1.data!.outputSize,
            kernelSize: 3,
            name: "conv5_2",
            numOutput: 512,
            prevNodeName: "conv5_1"));
    conv5_1.addNext(conv5_2);

    datas.add(NNParameterModel(
        layerName: conv5_2.data!.name,
        layerType: conv5_2.data!.nodeType.toStr(),
        memory: conv5_2.data!.getMemory(),
        parameter: conv5_2.data!.getParameter(),
        sizeIn: conv5_2.data!.inputSize.toString(),
        sizeOut: conv5_2.data!.inputSize.toString()));

    nodeMessage[conv5_2.id] = conv5_2.data!.outputSize.toString();

    var conv5_3 = GraphNode(
        data: ConvActivation(
            inputSize: conv5_2.data!.outputSize,
            kernelSize: 3,
            name: "conv5_3",
            numOutput: 512,
            prevNodeName: "conv5_2"));
    conv5_2.addNext(conv5_3);

    datas.add(NNParameterModel(
        layerName: conv5_3.data!.name,
        layerType: conv5_3.data!.nodeType.toStr(),
        memory: conv5_3.data!.getMemory(),
        parameter: conv5_3.data!.getParameter(),
        sizeIn: conv5_3.data!.inputSize.toString(),
        sizeOut: conv5_3.data!.inputSize.toString()));

    nodeMessage[conv5_3.id] = conv5_3.data!.outputSize.toString();

    var pooling5 = GraphNode(
        data: PoolingNode(
            name: "pooling5",
            inputSize: conv5_3.data!.outputSize,
            prevNodeName: "conv5_3"));
    conv5_3.addNext(pooling5);

    datas.add(NNParameterModel(
        layerName: pooling5.data!.name,
        layerType: pooling5.data!.nodeType.toStr(),
        memory: pooling5.data!.getMemory(),
        parameter: pooling5.data!.getParameter(),
        sizeIn: pooling5.data!.inputSize.toString(),
        sizeOut: pooling5.data!.inputSize.toString()));

    nodeMessage[pooling5.id] = pooling5.data!.outputSize.toString();

    /// fc
    var fc1 = GraphNode(
        data: FcActivationDropoutNode(
            name: "fc1",
            output: 4096,
            prevNodeName: "pooling5",
            inputSize: pooling5.data!.outputSize));
    pooling5.addNext(fc1);

    datas.add(NNParameterModel(
        layerName: fc1.data!.name,
        layerType: fc1.data!.nodeType.toStr(),
        memory: fc1.data!.getMemory(),
        parameter: fc1.data!.getParameter(),
        sizeIn: fc1.data!.inputSize.toString(),
        sizeOut: fc1.data!.inputSize.toString()));

    nodeMessage[fc1.id] = fc1.data!.outputSize.toString();

    /// fc2
    var fc2 = GraphNode(
        data: FcActivationDropoutNode(
            name: "fc2",
            output: 4096,
            prevNodeName: "fc1",
            inputSize: fc1.data!.outputSize));
    fc1.addNext(fc2);

    datas.add(NNParameterModel(
        layerName: fc2.data!.name,
        layerType: fc2.data!.nodeType.toStr(),
        memory: fc2.data!.getMemory(),
        parameter: fc2.data!.getParameter(),
        sizeIn: fc2.data!.inputSize.toString(),
        sizeOut: fc2.data!.inputSize.toString()));

    nodeMessage[fc2.id] = fc2.data!.outputSize.toString();

    /// fc3
    var fc3 = GraphNode(
        data: FcNode(
            name: "fc3",
            output: 1000,
            prevNodeName: "fc2",
            inputSize: fc2.data!.outputSize));
    fc2.addNext(fc3);

    datas.add(NNParameterModel(
        layerName: fc3.data!.name,
        layerType: fc3.data!.nodeType.toStr(),
        memory: fc3.data!.getMemory(),
        parameter: fc3.data!.getParameter(),
        sizeIn: fc3.data!.inputSize.toString(),
        sizeOut: fc3.data!.inputSize.toString()));
    nodeMessage[fc3.id] = fc3.data!.outputSize.toString();
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
      body: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
              flex: 1,
              child: Container(
                padding: const EdgeInsets.all(20),
                child: FlowGraphView(
                  nodeMessageMap: nodeMessage,
                  messageStyle:
                      const TextStyle(color: Colors.black, fontSize: 20),
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
              )),
          if (MediaQuery.of(context).size.width > 800)
            Expanded(
                flex: 2,
                child: NNParameterTableview(
                  datas: datas,
                  widgetWidth: MediaQuery.of(context).size.width - 350,
                ))
        ],
      ),
    );
  }
}
