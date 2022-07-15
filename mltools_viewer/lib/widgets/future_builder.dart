/// copied from taichi_admin
import 'package:flutter/material.dart';

class FutureLoaderWidget extends StatelessWidget {
  const FutureLoaderWidget(
      {Key? key, required this.builder, required this.loadWidgetFuture})
      : super(key: key);

  final Future loadWidgetFuture;
  final WidgetBuilder builder;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: loadWidgetFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasError) {
              debugPrint("[debug error]:${snapshot.error}");
              return const Center(
                child: Text("error"),
              );
            }
            return builder.call(context);
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
        });
  }
}
