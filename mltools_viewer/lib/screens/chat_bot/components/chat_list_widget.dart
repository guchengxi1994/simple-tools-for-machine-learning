import 'package:flutter/material.dart';
import 'package:mltools_viewer/screens/chat_bot/controllers/kash_chat_bot_controller.dart';
import 'package:provider/provider.dart';

// ignore: must_be_immutable
class ChatListWidget extends StatelessWidget {
  ChatListWidget({super.key, required this.scrollController});
  ScrollController scrollController;

  @override
  Widget build(BuildContext context) {
    final controller = context.watch<KashgariChatbotController>();

    return GestureDetector(
      child: ListView.builder(
        // reverse: true,
        shrinkWrap: true,
        padding: const EdgeInsets.only(top: 27),
        itemBuilder: (context, index) {
          return controller.widgets[index];
        },
        itemCount: controller.widgets.length,
        physics: const AlwaysScrollableScrollPhysics(),
        controller: scrollController,
      ),
      onTap: () {
        FocusScope.of(context).requestFocus(FocusNode());
      },
    );
  }
}
