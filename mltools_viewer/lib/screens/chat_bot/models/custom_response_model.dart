import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'question_model.dart';

class CustomResponseModel {
  String? question;
  String? answer;
  bool? showNewPage;
  int id;
  bool isPrimary;
  void Function()? onTap;

  CustomResponseModel(
      {this.question,
      this.answer,
      this.showNewPage,
      required this.isPrimary,
      required this.id,
      required this.onTap});

  static List<Widget> renderQuestion(
      BuildContext context, List<Data> questions) {
    List<CustomResponseModel> reservedResponses = [];
    for (var q in questions) {
      reservedResponses.add(CustomResponseModel(
          isPrimary: q.isPrimary!,
          id: q.qid!,
          onTap: null,
          question: q.comment,
          answer: q.answer,
          showNewPage: false));
    }
    List<Widget> lw = [];
    for (var i in reservedResponses) {
      if (i.isPrimary) {
        lw.insert(0, getQuestionWidget(i, context, lw.length));
      } else {
        lw.add(getQuestionWidget(i, context, lw.length));
      }
    }
    return lw;
  }

  static Widget getQuestionWidget(
      CustomResponseModel model, BuildContext context, int length) {
    return Container(
        decoration: model.id == length - 1
            ? null
            : BoxDecoration(
                border: Border(
                bottom: BorderSide(width: 1, color: Colors.grey[200]!),
              )),
        child: ListTile(
            // title: model.isPrimary ? Text("你是不是想问?") : null,
            title: model.isPrimary
                ? Row(
                    children: [
                      Text(model.question ?? ""),
                      const Text(
                        "(最接近)",
                        style: TextStyle(color: Colors.red),
                      )
                    ],
                  )
                : Text(model.question ?? ""),
            trailing: Icon(
              Icons.chevron_right,
              color: Colors.grey[200],
            ),
            onTap: model.onTap ??
                () async {
                  if (!model.showNewPage!) {
                    await showCupertinoDialog(
                        context: context,
                        builder: (context) {
                          return CupertinoAlertDialog(
                            content: Column(
                              children: [
                                Text(
                                  model.answer ?? "",
                                  maxLines: 10,
                                ),
                              ],
                            ),
                            actions: [
                              CupertinoActionSheetAction(
                                  onPressed: () {
                                    Navigator.of(context).pop();
                                  },
                                  child: const Text("确定"))
                            ],
                          );
                        });
                  }
                }));
  }

  static List<Widget> getAll(BuildContext context, {String condition = ""}) {
    List<CustomResponseModel> ls = [];
    List<Widget> lw = [];
    int id = 0;
    for (var i in ls) {
      i.id = id;
      id += 1;
      if (i.question!.contains(condition)) {
        lw.add(getQuestionWidget(i, context, lw.length));
      }
    }
    return lw;
  }
}
