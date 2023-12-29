import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/apis.dart';
import 'package:mltools_viewer/utils/dio_utils.dart';

import '../models/custom_response_model.dart';
import '../models/question_model.dart';

class AnswerWidget extends StatefulWidget {
  const AnswerWidget({super.key});

  @override
  AnswerWidgetState createState() => AnswerWidgetState();
}

class AnswerWidgetState extends State<AnswerWidget> {
  List<CustomResponseModel> ls = [];
  late List<Widget> ans;

  DioUtils dioUtil = DioUtils();
  // ignore: prefer_typing_uninitialized_variables
  var _future;

  @override
  void initState() {
    super.initState();
    _future = getHotQuestions();
  }

  void grep(String s) {
    setState(() {
      if (s != "") {
        ans = CustomResponseModel.getAll(context, condition: s);
      } else {
        ans = CustomResponseModel.getAll(context);
      }
    });
  }

  Future<List<Data>?> getHotQuestions() async {
    String url = mltoolsApis['questionHot']!;

    Response? response = await dioUtil.get(url);
    if (null != response) {
      var result = response.data;
      List data = result['data'];
      List<Data> questions = data.map((e) => Data.fromJson(e)).toList();
      return questions;
    } else {
      return null;
    }
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: _future,
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (!snapshot.hasError && snapshot.data != null) {
              ans = CustomResponseModel.renderQuestion(
                  context, snapshot.data as List<Data>);
              return Column(
                children: ans,
              );
            } else {
              return const SizedBox(
                height: 150,
                child: Center(
                  child: Text("查询失败"),
                ),
              );
            }
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
        });
  }
}
