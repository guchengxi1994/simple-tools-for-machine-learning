import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/apis.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/screens/chat_bot/controllers/kash_chat_bot_controller.dart';
import 'package:mltools_viewer/utils/dio_utils.dart';
import 'package:mltools_viewer/utils/toast_utils.dart';
import 'package:provider/provider.dart';

import '../components/chat_list_widget.dart';
import '../models/ask_question_model.dart';
import '../models/question_model.dart';

class KashgraiCharbotScreen extends StatelessWidget {
  KashgraiCharbotScreen({Key? key}) : super(key: key);
  final ScrollController _scrollController = ScrollController(); //listview的控制器
  final TextEditingController textEditingController = TextEditingController();
  final DioUtils dioUtil = DioUtils();
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
            create: (_) => KashgariChatbotController()..init())
      ],
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            centerTitle: true,
            title: const Text("Chatbot demo"),
            automaticallyImplyLeading: false,
            backgroundColor: AppStyle.lightBlue,
            leading: InkWell(
              onTap: () {
                Navigator.of(context).pop();
              },
              child: const Icon(Icons.chevron_left),
            ),
          ),
          body: Column(children: [
            Expanded(
              flex: 1,
              child: Container(
                //列表内容少的时候靠上
                alignment: Alignment.topCenter,
                child: ChatListWidget(
                  scrollController: _scrollController,
                ),
              ),
            ),
            Container(
              decoration: const BoxDecoration(
                color: Colors.white,
                boxShadow: [
                  BoxShadow(
                    color: Color(0x14000000),
                    blurRadius: 10,
                  ),
                ],
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: <Widget>[
                  Expanded(
                    child: Container(
                      margin: const EdgeInsets.fromLTRB(15, 10, 0, 10),
                      constraints: const BoxConstraints(
                        maxHeight: 100.0,
                        minHeight: 50.0,
                      ),
                      decoration: const BoxDecoration(
                          color: Color(0xFFF5F6FF),
                          borderRadius: BorderRadius.all(Radius.circular(2))),
                      child: TextField(
                        controller: textEditingController,
                        cursorColor: const Color(0xFF464EB5),
                        maxLines: null,
                        maxLength: 200,
                        decoration: const InputDecoration(
                          counterText: '',
                          border: InputBorder.none,
                          contentPadding: EdgeInsets.only(
                              left: 16.0, right: 16.0, top: 10.0, bottom: 10.0),
                          hintText: "点此提问或者寻找客服",
                          hintStyle:
                              TextStyle(color: Color(0xFFADB3BA), fontSize: 15),
                        ),
                        style: const TextStyle(
                            color: Color(0xFF03073C), fontSize: 15),
                      ),
                    ),
                  ),
                  GestureDetector(
                    behavior: HitTestBehavior.opaque,
                    child: Container(
                      padding: const EdgeInsets.fromLTRB(15, 0, 15, 0),
                      alignment: Alignment.center,
                      height: 70,
                      child: const Text(
                        '发送',
                        style: TextStyle(
                          color: Color(0xFF464EB5),
                          fontSize: 14,
                        ),
                      ),
                    ),
                    onTap: () async {
                      if (textEditingController.text != "") {
                        AskQuestion askQuestion = AskQuestion();
                        String url = mltoolsApis['askQuestion']!;
                        askQuestion.question = textEditingController.text;
                        Map jsonStr = askQuestion.toJson();
                        Response? response =
                            await dioUtil.post(url, data: jsonStr);
                        if (null != response) {
                          var result = response.data;
                          List data = result['data'];
                          List<Data> questions =
                              data.map((e) => Data.fromJson(e)).toList();
                        } else {
                          // ignore: use_build_context_synchronously
                          ToastUtils(context).showToast("服务器无连接");
                        }
                      }
                    },
                  ),
                ],
              ),
            )
          ]),
        );
      },
    );
  }
}
