import 'package:flutter/material.dart';
import 'package:mltools_viewer/screens/nn_graph/model/nn_nodes.dart';

// ignore: must_be_immutable
class NodeWidget<T extends NNNode> extends StatelessWidget {
  NodeWidget({Key? key, required this.node}) : super(key: key);
  final T node;
  final LayerLink layerLink = LayerLink();

  OverlayEntry? _overlayEntry;
  bool show = false;

  void _hideOverlay() {
    try {
      show = false;
      _overlayEntry?.remove();
    } catch (e, s) {
      debugPrint(s.toString());
    }
  }

  void _toggleOverlay(BuildContext context) {
    if (!show) {
      _overlayEntry = OverlayEntry(builder: (c) {
        return UnconstrainedBox(
          child: CompositedTransformFollower(
              link: layerLink,
              followerAnchor: Alignment.centerLeft,
              targetAnchor: Alignment.centerRight,
              offset: const Offset(20, 0),
              child: Material(
                  child: Container(
                padding: const EdgeInsets.all(20),
                decoration: const BoxDecoration(
                    color: Color.fromARGB(255, 55, 52, 52),
                    borderRadius: BorderRadius.all(Radius.circular(5))),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "layer name :  ${node.getName()}",
                      style: const TextStyle(color: Colors.yellow),
                    ),
                    const SizedBox(
                      width: 200,
                      child: Divider(
                        height: 20,
                        color: Colors.greenAccent,
                        thickness: 3,
                        indent: 2,
                        endIndent: 2,
                      ),
                    ),
                    Text(
                      "in :  ${node.getInputSize()}",
                      style: const TextStyle(color: Colors.yellow),
                    ),
                    Text(
                      "out :  ${node.outputSize}",
                      style: const TextStyle(color: Colors.yellow),
                    ),
                  ],
                ),
              ))),
        );
      });

      OverlayState? overlayState = Navigator.of(context).overlay;
      overlayState?.insert(_overlayEntry!);
      show = !show;
    }
  }

  @override
  Widget build(BuildContext context) {
    Size s = node.getWidgetSize();
    double d = 0.5 * (256 - s.width);
    return SizedBox(
        width: 256,
        child: Padding(
          padding: EdgeInsets.only(left: d, right: d),
          child: MouseRegion(
            onEnter: (event) => _toggleOverlay(context),
            onExit: (event) => _hideOverlay(),
            child: CompositedTransformTarget(
              link: layerLink,
              child: Container(
                decoration: BoxDecoration(
                    color: node.getColor(),
                    borderRadius: const BorderRadius.all(Radius.circular(5))),
                width: s.width,
                height: s.height,
                child: Padding(
                  padding: const EdgeInsets.all(5),
                  child: Center(
                    child: Text(
                      node.getName(),
                      maxLines: null,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ));
  }
}
