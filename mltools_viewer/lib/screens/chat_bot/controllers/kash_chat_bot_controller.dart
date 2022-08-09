import 'package:flutter/material.dart';

import '../components/answer_widget.dart';
import '../components/constants.dart';

class KashgariChatbotController extends ChangeNotifier {
  List<Widget> widgets = [];

  init() async {
    widgets.add(Card(
      margin: const EdgeInsets.all(paddingSize),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(paddingSize),
            alignment: Alignment.centerLeft,
            child: const Text(
              "热门问题",
              style: TextStyle(color: Colors.blueAccent, fontSize: 20),
            ),
          ),
          const Divider(),
          const AnswerWidget()
        ],
      ),
    ));
  }

  addWidget(Widget w) {
    widgets.add(w);
    notifyListeners();
  }

  replaceLast(Widget w) {
    widgets.removeLast();
    widgets.add(w);
    notifyListeners();
  }
}
