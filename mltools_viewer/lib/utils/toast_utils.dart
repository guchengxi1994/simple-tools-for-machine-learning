import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

class ToastUtils {
  BuildContext context;

  ToastUtils._internal(this.context);

  // ignore: avoid_init_to_null
  static ToastUtils? instance = null;
  static FToast fToast = FToast();

  static getInstance(BuildContext context) {
    if (instance == null) {
      instance = ToastUtils._internal(context);
      fToast.init(context);
    }

    return instance;
  }

  factory ToastUtils(BuildContext context) => getInstance(context);

  void showToast(String content,
      {Widget? prefix, Color decorateColor = Colors.greenAccent}) {
    Widget toast = Container(
      padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 12.0),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(25.0),
        color: decorateColor,
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (prefix != null) prefix,
          if (prefix != null)
            const SizedBox(
              width: 12.0,
            ),
          Text(content),
        ],
      ),
    );

    fToast.showToast(
      child: toast,
      toastDuration: const Duration(seconds: 2),
      gravity: ToastGravity.CENTER,
    );
  }
}
