import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'dart:math' as math;

class BlankScreen extends StatelessWidget {
  const BlankScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              "Oops, nothing is here.\nPay attention to changelogs.",
              style: AppStyle.cardTextStyle,
              textAlign: TextAlign.center,
            ),
            const Text(
              "😀",
              style: TextStyle(fontSize: 30),
            ),
            IconButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                icon: Transform.rotate(
                  angle: math.pi,
                  child: const Icon(Icons.exit_to_app),
                ))
          ],
        ),
      ),
    );
  }
}
