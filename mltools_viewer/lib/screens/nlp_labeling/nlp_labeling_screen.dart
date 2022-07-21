import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';

class NlpLabelingScreen extends StatelessWidget {
  const NlpLabelingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              "Oops, nothing is here.\nPay attention to changelogs.",
              style: TextStyle(
                fontWeight: FontWeight.w400,
                fontStyle: FontStyle.italic,
                fontSize: 24,
                letterSpacing: 0.2,
                color: Colors.black, // was lightText
              ),
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
                icon: const Icon(Icons.exit_to_app))
          ],
        ),
      ),
    );
  }
}
