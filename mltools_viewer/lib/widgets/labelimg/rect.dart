// ignore_for_file: must_be_immutable, library_private_types_in_public_api

part of "./labelimg_widget.dart";

class RectBox extends StatelessWidget {
  int id;
  // 这里要初始化一个 bndbox
  ClassObject? classObject;
  // Bndbox? bndbox;
  RectBox({Key? key, required this.id, this.classObject}) : super(key: key);

  GlobalKey<_PointState> topLeftKey = GlobalKey(debugLabel: "topLeftKey");
  GlobalKey<_PointState> topRightKey = GlobalKey(debugLabel: "topRightKey");
  GlobalKey<_PointState> bottomLeftKey = GlobalKey(debugLabel: "bottomLeftKey");
  GlobalKey<_PointState> bottomRightKey =
      GlobalKey(debugLabel: "bottomRightKey");
  GlobalKey<_RectState> rectKey = GlobalKey(debugLabel: "rectKey");

  @override
  Widget build(BuildContext context) {
    return Rect(
      id: id,
      key: rectKey,
      globalKeys: [topLeftKey, topRightKey, bottomLeftKey, bottomRightKey],
      classObject: classObject,
    );
  }
}

class Rect extends StatefulWidget {
  List<GlobalKey> globalKeys;
  int id;
  // Bndbox? bndbox;
  ClassObject? classObject;
  Rect({Key? key, required this.globalKeys, required this.id, this.classObject})
      : super(key: key);

  @override
  _RectState createState() => _RectState();
}

class _RectState extends State<Rect> {
  late double height;
  late double width;

  double defaultLeft = 0;
  double defaultTop = 0;

  final TextEditingController controller = TextEditingController();

  late GlobalKey<_PointState> topLeftKey;
  late GlobalKey<_PointState> topRightKey;
  late GlobalKey<_PointState> bottomLeftKey;
  late GlobalKey<_PointState> bottomRightKey;

  String className = '';

  List<int> getRectBox() {
    // print(this.topLeftKey.currentState!.offset);
    int leftTopX = topLeftKey.currentState!.offset.dx.toInt();
    int leftTopY = topLeftKey.currentState!.offset.dy.toInt();

    int rightBottomX =
        bottomRightKey.currentState!.offset.dx.toInt() + circleSize.ceil();
    int rightBottomY =
        bottomRightKey.currentState!.offset.dy.toInt() + circleSize.ceil();

    return [leftTopX, leftTopY, rightBottomX, rightBottomY];
  }

  @override
  void initState() {
    super.initState();
    topLeftKey = widget.globalKeys[0] as GlobalKey<_PointState>;
    topRightKey = widget.globalKeys[1] as GlobalKey<_PointState>;
    bottomLeftKey = widget.globalKeys[2] as GlobalKey<_PointState>;
    bottomRightKey = widget.globalKeys[3] as GlobalKey<_PointState>;
    // print(_workboardBloc.state.param.imageName);

    if (null == widget.classObject) {
      width = defaultRectSize;
      height = defaultRectSize;
    } else {
      // print("true");
      width = (widget.classObject!.bndbox!.xmax! -
              widget.classObject!.bndbox!.xmin!) *
          1.0;
      height = (widget.classObject!.bndbox!.ymax! -
              widget.classObject!.bndbox!.ymin!) *
          1.0;
      defaultLeft = widget.classObject!.bndbox!.xmin! * 1.0;
      defaultTop = widget.classObject!.bndbox!.ymin! * 1.0;

      controller.text = widget.classObject!.name!;
      className = widget.classObject!.name!;

      // print(width);
      // print(height);
      // print(defaultLeft);
      // print(defaultTop);
    }
  }

  setHeight(double height) {
    setState(() {
      this.height = height;
      // this.defaultTop = _top;
    });
  }

  setWidth(double width) {
    setState(() {
      this.width = width;
      // this.defaultLeft = _left;
    });
  }

  setTop(double top) {
    setState(() {
      defaultTop = top;
    });
  }

  setLeft(double left) {
    setState(() {
      defaultLeft = left;
    });
  }

  moveTo(Offset? off) {
    setState(() {
      if (null != off) {
        defaultLeft = off.dx;
        defaultTop = off.dy;
      } else {
        defaultLeft = topLeftKey.currentState!.offset.dx;
        defaultTop = topLeftKey.currentState!.offset.dy;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
        left: defaultLeft,
        top: defaultTop,
        child: GestureDetector(
          onPanDown: (details) {
            // debugPrint("[details local]:${details.localPosition}");
            // debugPrint("[details global]:${details.globalPosition}");
          },
          onPanUpdate: (details) {
            setState(() {
              defaultLeft += details.delta.dx;
              defaultTop += details.delta.dy;
              // debugPrint("[left]:$defaultLeft");
              // debugPrint("[top]:$defaultTop");
            });
          },
          onPanEnd: (details) {
            // debugPrint("[details end]:${details.velocity}");
          },
          child: Opacity(
            opacity: 0.7,
            child: InkWell(
              onDoubleTap: () async {
                var result = await showCupertinoDialog(
                    context: context,
                    builder: (context) {
                      return CupertinoAlertDialog(
                        title: const Text("请输入类名"),
                        content: Material(
                            child: TextField(
                          maxLength: 30,
                          controller: controller,
                        )),
                        actions: [
                          CupertinoActionSheetAction(
                            child: const Text("确定"),
                            onPressed: () {
                              Navigator.of(context).pop(controller.text);
                            },
                          )
                        ],
                      );
                    });
                className = result.toString();
              },
              child: Container(
                // margin: EdgeInsets.only(top: 100, left: 50),
                height: height,
                width: width,
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.green, width: 0.5),
                  color: Colors.blueAccent,
                ),
                child: Stack(
                  children: [
                    getPoint(0, topLeftKey),
                    getPoint(1, topRightKey),
                    getPoint(2, bottomLeftKey),
                    getPoint(3, bottomRightKey),
                  ],
                ),
              ),
            ),
          ),
        ));

    // return Positioned(
    //     left: defaultLeft,
    //     top: defaultTop,
    //     child: Draggable(
    //         onDraggableCanceled: (velocity, offset) {
    //           setState(() {
    //             defaultLeft = offset.dx;
    //             defaultTop = offset.dy;
    //             topLeftKey.currentState!.offset = offset;
    //             topRightKey.currentState!.offset =
    //                 Offset(offset.dx - circleSize + width, offset.dy);
    //             bottomLeftKey.currentState!.offset =
    //                 Offset(offset.dx, offset.dy - circleSize + height);
    //             bottomRightKey.currentState!.offset = Offset(
    //                 offset.dx - circleSize + width,
    //                 offset.dy - circleSize + height);
    //           });
    //         },
    //         feedback: Container(
    //           color: Colors.blue,
    //           height: height,
    //           width: width,
    //         ),
    //         child: Opacity(
    //           opacity: 0.7,
    //           child: InkWell(
    //             onDoubleTap: () async {
    //               var result = await showCupertinoDialog(
    //                   context: context,
    //                   builder: (context) {
    //                     return CupertinoAlertDialog(
    //                       title: const Text("请输入类名"),
    //                       content: Material(
    //                           child: TextField(
    //                         maxLength: 30,
    //                         controller: controller,
    //                       )),
    //                       actions: [
    //                         CupertinoActionSheetAction(
    //                           child: const Text("确定"),
    //                           onPressed: () {
    //                             Navigator.of(context).pop(controller.text);
    //                           },
    //                         )
    //                       ],
    //                     );
    //                   });
    //               className = result.toString();
    //             },
    //             onLongPress: () async {},
    //             child: Container(
    //               // margin: EdgeInsets.only(top: 100, left: 50),
    //               height: height,
    //               width: width,
    //               decoration: BoxDecoration(
    //                 border: Border.all(color: Colors.green, width: 0.5),
    //                 color: Colors.blueAccent,
    //               ),
    //               child: Stack(
    //                 children: [
    //                   getPoint(0, topLeftKey),
    //                   getPoint(1, topRightKey),
    //                   getPoint(2, bottomLeftKey),
    //                   getPoint(3, bottomRightKey),
    //                 ],
    //               ),
    //             ),
    //           ),
    //         )));
  }

  Widget getPoint(int position, GlobalKey key) {
    late Widget p;
    switch (position) {
      case 0: // top left
        p = Point(
          key: key,
          color: Colors.red,
          woffset: Offset(defaultLeft, defaultTop),
          globalKeys: widget.globalKeys,
          rectKey: widget.key as GlobalKey<_RectState>,
        );
        break;
      case 1: // top right
        p = Point(
          key: key,
          color: Colors.red,
          woffset: Offset(width - circleSize + defaultLeft, defaultTop),
          globalKeys: widget.globalKeys,
          rectKey: widget.key as GlobalKey<_RectState>,
        );
        break;
      case 2:
        p = Point(
          key: key,
          color: Colors.red,
          woffset: Offset(defaultLeft, height - circleSize + defaultTop),
          globalKeys: widget.globalKeys,
          rectKey: widget.key as GlobalKey<_RectState>,
        );
        break;
      case 3:
        p = Point(
          key: key,
          color: Colors.red,
          woffset: Offset(width - circleSize + defaultLeft,
              height - circleSize + defaultTop),
          globalKeys: widget.globalKeys,
          rectKey: widget.key as GlobalKey<_RectState>,
        );
        break;
      default:
        p = Point(
          key: key,
          color: Colors.red,
          woffset: const Offset(0, 0),
          globalKeys: widget.globalKeys,
          rectKey: widget.key as GlobalKey<_RectState>,
        );
        break;
    }
    return p;
  }
}
