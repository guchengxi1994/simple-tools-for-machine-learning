import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/custon_ner_labeling_controller.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/deletable_card.dart';
import 'package:provider/provider.dart';

class CustomTextAnnotationScreen extends StatelessWidget {
  CustomTextAnnotationScreen({Key? key}) : super(key: key);
  final TextEditingController controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CustomNerLabelingController())
      ],
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            elevation: 0,
            centerTitle: true,
            automaticallyImplyLeading: false,
            backgroundColor: AppStyle.lightBlue,
            leading: InkWell(
              onTap: () {
                Navigator.of(context).pop();
              },
              child: const Icon(Icons.chevron_left),
            ),
          ),
          body: SingleChildScrollView(
            padding: const EdgeInsets.all(50),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Text("类名："),
                    const SizedBox(
                      width: 10,
                    ),
                    InkWell(
                      onTap: () async {
                        String? result = await showCupertinoDialog(
                            context: context,
                            builder: ((context) {
                              return CupertinoAlertDialog(
                                title: const Text("输入类名"),
                                content: Material(
                                  child: TextField(
                                    controller: controller,
                                    decoration: AppStyle.getInputDecotation(),
                                  ),
                                ),
                                actions: [
                                  CupertinoActionSheetAction(
                                      onPressed: () {
                                        controller.text = "";
                                        Navigator.of(context).pop(null);
                                      },
                                      child: const Text("取消")),
                                  CupertinoActionSheetAction(
                                      onPressed: () {
                                        String s = controller.text;
                                        controller.text = "";
                                        Navigator.of(context).pop(s);
                                      },
                                      child: const Text("确定")),
                                ],
                              );
                            }));
                        if (result != null) {
                          // ignore: use_build_context_synchronously
                          context
                              .read<CustomNerLabelingController>()
                              .addClassName(result);
                        }
                      },
                      child: Container(
                        decoration: BoxDecoration(
                            color: Colors.grey[200],
                            border: Border.all(color: Colors.grey)),
                        child: const Icon(
                          Icons.plus_one_sharp,
                          color: Colors.red,
                        ),
                      ),
                    )
                  ],
                ),
                const SizedBox(
                  height: 20,
                ),
                Card(
                  elevation: 4,
                  child: Container(
                    padding: const EdgeInsets.all(5),
                    constraints: BoxConstraints(
                        minHeight: 100,
                        minWidth: MediaQuery.of(context).size.width * 0.8),
                    child: Wrap(
                      children: context
                          .watch<CustomNerLabelingController>()
                          .classNames
                          .map((e) => Container(
                                constraints:
                                    const BoxConstraints(maxWidth: 150),
                                child: DeletableCard(
                                    text: e,
                                    onTap: () {
                                      context
                                          .read<CustomNerLabelingController>()
                                          .removeClassName(e);
                                    }),
                              ))
                          .toList(),
                    ),
                  ),
                )
              ],
            ),
          ),
        );
      },
    );
  }
}
