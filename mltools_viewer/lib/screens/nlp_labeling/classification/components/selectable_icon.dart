// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';
import 'package:mltools_viewer/controllers/nlp_classification_controller.dart';
import 'package:provider/provider.dart';

class SelectableIcon extends StatelessWidget {
  const SelectableIcon({
    required this.className,
    super.key,
  });
  final String className;

  @override
  Widget build(BuildContext context) {
    final controller = context.watch<NlpClassificationController>();
    bool isSelected =
        controller.getCurrentSelectedData()?.className == className;

    return SizedBox(
        width: 130,
        height: 200,
        child: Stack(
          children: <Widget>[
            Padding(
              padding:
                  const EdgeInsets.only(top: 32, left: 8, right: 8, bottom: 16),
              child: Container(
                width: 130,
                height: 200,
                decoration: BoxDecoration(
                  boxShadow: <BoxShadow>[
                    BoxShadow(
                        color: const Color.fromARGB(255, 201, 222, 202)
                            .withOpacity(0.6),
                        offset: const Offset(1.1, 4.0),
                        blurRadius: 8.0),
                  ],
                  gradient: const LinearGradient(
                    colors: [
                      Colors.white,
                      Color.fromARGB(255, 201, 222, 202),
                    ],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: const BorderRadius.only(
                    bottomRight: Radius.circular(8.0),
                    bottomLeft: Radius.circular(8.0),
                    topLeft: Radius.circular(8.0),
                    topRight: Radius.circular(54.0),
                  ),
                ),
                child: InkWell(
                  onTap: () async {
                    context
                        .read<NlpClassificationController>()
                        .changeLabeledData(NlpClassificationData(
                            id: controller.currentRowId, className: className));
                    if (context
                        .read<NlpClassificationController>()
                        .nextWhenSelected) {
                      context.read<NlpClassificationController>().nextRow();
                    }
                  },
                  child: Padding(
                    padding: const EdgeInsets.only(
                        top: 54, left: 16, right: 16, bottom: 8),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Padding(
                          padding: const EdgeInsets.only(top: 8, bottom: 8),
                          child: Text(className),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            Positioned(
              top: 0,
              left: 0,
              child: Container(
                width: 84,
                height: 84,
                decoration: BoxDecoration(
                  color: const Color(0xFFFAFAFA).withOpacity(0.2),
                  shape: BoxShape.circle,
                ),
              ),
            ),
            if (isSelected)
              Positioned(
                top: 35,
                left: 15,
                child: SizedBox(
                  width: 20,
                  height: 20,
                  child: Image.asset("assets/icon/Check.png"),
                ),
              ),
            Positioned(
                top: 40, left: 15, child: _getCircle(isSelected, fill: false)),
          ],
        ));
  }

  Widget _getCircle(bool selected, {Color? color, bool? fill}) {
    if (selected) {
      if (fill!) {
        return Container(
          height: 15,
          width: 15,
          decoration: BoxDecoration(
            borderRadius: const BorderRadius.all(
              Radius.circular(100),
            ),
            border: Border.all(width: 2, color: color ?? Colors.red),
          ),
          child: Container(
            height: 10,
            width: 10,
            decoration: BoxDecoration(
              color: color ?? Colors.red,
              borderRadius: const BorderRadius.all(
                Radius.circular(5),
              ),
            ),
          ),
        );
      } else {
        return Container();
      }
    } else {
      return Container(
        height: 15,
        width: 15,
        decoration: BoxDecoration(
          borderRadius: const BorderRadius.all(
            Radius.circular(10),
          ),
          border: Border.all(width: 2, color: Colors.grey[300]!),
        ),
      );
    }
  }
}
