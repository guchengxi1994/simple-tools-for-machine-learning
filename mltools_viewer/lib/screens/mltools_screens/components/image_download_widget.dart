import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/no_label_aug_controller.dart';
import 'package:provider/provider.dart';

// ignore: must_be_immutable
class ImageDownloadWidget extends StatelessWidget {
  ImageDownloadWidget({Key? key, this.widgetSize = 200, required this.augType})
      : super(key: key);
  final double widgetSize;
  final String augType;

  OverlayEntry? _overlayEntry;
  bool show = false;
  final LayerLink layerLink = LayerLink();

  void _hideOverlay() {
    try {
      _overlayEntry?.remove();
    } catch (e, s) {
      debugPrint(s.toString());
    }
    if (show) {
      show = false;
    }
  }

  void _toggleOverlay(BuildContext context) {
    // debugPrint("_toggleOverlay");
    if (!show) {
      // debugPrint("_toggleOverlay");
      _overlayEntry = OverlayEntry(builder: (c) {
        return UnconstrainedBox(
          child: CompositedTransformFollower(
            link: layerLink,

            ///主体的位置
            followerAnchor: Alignment.topLeft,

            ///这个是浮窗的位置
            targetAnchor: Alignment.topLeft,
            offset: const Offset(10, 5),
            child: Material(
              color: Colors.transparent,
              child: Container(
                width: widgetSize - 20,
                height: 45,
                color: Colors.grey.withAlpha(80),
                child: Center(
                  child: Text(
                    augType,
                    style: const TextStyle(color: Colors.white, fontSize: 15),
                  ),
                ),
              ),
            ),
          ),
        );
      });

      OverlayState? overlayState = Navigator.of(context).overlay;
      // debugPrint("overlayState $overlayState");
      overlayState?.insert(_overlayEntry!);
      show = !show;
    }
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
        onEnter: (event) {
          if (!show) {
            _toggleOverlay(context);
          }
        },
        onExit: (event) {
          // print(event.localPosition);
          if (show &&
              ((event.localPosition.dx < 0 || event.localPosition.dy < 0) ||
                  (event.localPosition.dx > widgetSize ||
                      event.localPosition.dy > widgetSize))) {
            _hideOverlay();
          }
        },
        child: CompositedTransformTarget(
          link: layerLink,
          child: Container(
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(30)),
            ),
            width: widgetSize,
            height: widgetSize,
            child: Stack(
              children: [
                context
                            .watch<NolabelAugController>()
                            .findByName(augType)
                            .imgData !=
                        null
                    ? Image.memory(
                        context
                            .watch<NolabelAugController>()
                            .findByName(augType)
                            .imgData!,
                        fit: BoxFit.cover,
                      )
                    : const Center(
                        child: CircularProgressIndicator(),
                      ),
                Positioned(
                    right: 5,
                    bottom: 5,
                    child: InkWell(
                      onTap: () {},
                      child: Container(
                        color: Colors.white.withAlpha(128),
                        child: const Icon(Icons.download),
                      ),
                    ))
              ],
            ),
          ),
        ));
  }
}
