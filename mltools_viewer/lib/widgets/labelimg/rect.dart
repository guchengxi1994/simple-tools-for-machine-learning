// ignore_for_file: must_be_immutable, library_private_types_in_public_api

part of "./labelimg_widget.dart";

class RectBox extends StatelessWidget {
  int id;
  // 这里要初始化一个 bndbox
  ClassObject? classObject;
  // Bndbox? bndbox;
  RectBox(
      {Key? key,
      required this.id,
      this.classObject,
      this.left = 0,
      this.top = 0,
      this.width = defaultRectSize,
      this.height = defaultRectSize})
      : super(key: key);

  GlobalKey<_PointState> topLeftKey = GlobalKey(debugLabel: "topLeftKey");
  GlobalKey<_PointState> topRightKey = GlobalKey(debugLabel: "topRightKey");
  GlobalKey<_PointState> bottomLeftKey = GlobalKey(debugLabel: "bottomLeftKey");
  GlobalKey<_PointState> bottomRightKey =
      GlobalKey(debugLabel: "bottomRightKey");
  GlobalKey<_RectState> rectKey = GlobalKey(debugLabel: "rectKey");

  double left;
  double top;
  double width;
  double height;

  @override
  Widget build(BuildContext context) {
    return Rect(
      id: id,
      key: rectKey,
      left: left,
      globalKeys: [topLeftKey, topRightKey, bottomLeftKey, bottomRightKey],
      classObject: classObject,
      height: height,
      top: top,
      width: width,
    );
  }
}

class Rect extends StatefulWidget {
  List<GlobalKey> globalKeys;
  int id;
  // Bndbox? bndbox;
  ClassObject? classObject;
  Rect(
      {Key? key,
      required this.globalKeys,
      required this.id,
      this.classObject,
      required this.height,
      required this.width,
      required this.left,
      required this.top})
      : assert(height > 0 && width > 0),
        super(key: key);

  double left;
  double top;
  double width;
  double height;

  @override
  _RectState createState() => _RectState();
}

class _RectState extends State<Rect> {
  late double height;
  late double width;

  late double defaultLeft;
  late double defaultTop;

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
        bottomRightKey.currentState!.offset.dx.toInt() + pointSize.ceil();
    int rightBottomY =
        bottomRightKey.currentState!.offset.dy.toInt() + pointSize.ceil();

    return [leftTopX, leftTopY, rightBottomX, rightBottomY];
  }

  @override
  void initState() {
    super.initState();
    defaultLeft = widget.left;
    defaultTop = widget.top;
    topLeftKey = widget.globalKeys[0] as GlobalKey<_PointState>;
    topRightKey = widget.globalKeys[1] as GlobalKey<_PointState>;
    bottomLeftKey = widget.globalKeys[2] as GlobalKey<_PointState>;
    bottomRightKey = widget.globalKeys[3] as GlobalKey<_PointState>;
    // print(_workboardBloc.state.param.imageName);

    if (null == widget.classObject) {
      width = widget.width;
      height = widget.height;
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

  addTop(double top) {
    setState(() {
      defaultTop += top;
    });
  }

  addLeft(double left) {
    setState(() {
      defaultLeft += left;
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

  changeScale(double scale) {
    setState(() {
      defaultLeft = scale * defaultLeft;
      defaultTop = scale * defaultTop;
      width = scale * width;
      height = scale * height;
    });
    topRightKey.currentState!.setLeft(width - pointSize);
    bottomLeftKey.currentState!.setTop(height - pointSize);
    bottomRightKey.currentState!.setTop(height - pointSize);
    bottomRightKey.currentState!.setLeft(width - pointSize);
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
        left: defaultLeft,
        top: defaultTop,
        child: GestureDetector(
          onPanUpdate: (details) {
            setState(() {
              defaultLeft += details.delta.dx;
              defaultTop += details.delta.dy;
            });
          },
          child: Opacity(
            opacity: 0.7,
            child: InkWell(
              onDoubleTap: () async {
                if (TaichiDevUtils.isMobile) {
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
                } else {
                  showCupertinoDialog(
                      context: context,
                      builder: (context) {
                        return UnconstrainedBox(
                          child: SizedBox(
                            width: AppStyle.dialogWidth,
                            height: MediaQuery.of(context).size.height * 0.6,
                            child: Dialog(
                                child: Container(
                              padding: const EdgeInsets.all(20),
                              child: Column(
                                children: [
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.end,
                                    children: [
                                      IconButton(
                                          onPressed: () {
                                            Navigator.of(context).pop();
                                          },
                                          icon: const Icon(
                                            Icons.cancel,
                                            color: Colors.red,
                                          )),
                                      IconButton(
                                          onPressed: () {
                                            context
                                                .read<
                                                    LabelImgAnnotationController>()
                                                .addClassNames(controller.text);
                                            Navigator.of(context).pop();
                                          },
                                          icon: const Icon(
                                            Icons.done,
                                            color: Colors.green,
                                          )),
                                    ],
                                  ),
                                  TextField(
                                    maxLength: 35,
                                    maxLines: null,
                                    controller: controller,
                                    decoration: AppStyle.getInputDecotation(),
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  Expanded(
                                      child: Container(
                                    color: AppStyle.chipBackground,
                                    child: ListView.builder(
                                        itemCount: context
                                            .watch<
                                                LabelImgAnnotationController>()
                                            .savedClassNames
                                            .length,
                                        itemBuilder: (context, index) {
                                          return InkWell(
                                            onDoubleTap: () {
                                              controller.text = context
                                                  .read<
                                                      LabelImgAnnotationController>()
                                                  .savedClassNames[index];
                                            },
                                            child: Text(
                                                "${index + 1}. ${context.watch<LabelImgAnnotationController>().savedClassNames[index]}"),
                                          );
                                        }),
                                  ))
                                ],
                              ),
                            )),
                          ),
                        );
                      });
                }
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
          woffset: Offset(width - pointSize + defaultLeft, defaultTop),
          globalKeys: widget.globalKeys,
          rectKey: widget.key as GlobalKey<_RectState>,
        );
        break;
      case 2:
        p = Point(
          key: key,
          color: Colors.red,
          woffset: Offset(defaultLeft, height - pointSize + defaultTop),
          globalKeys: widget.globalKeys,
          rectKey: widget.key as GlobalKey<_RectState>,
        );
        break;
      case 3:
        p = Point(
          key: key,
          color: Colors.red,
          woffset: Offset(
              width - pointSize + defaultLeft, height - pointSize + defaultTop),
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
