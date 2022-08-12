import 'package:flutter/material.dart';

import '../model/nn_parameter_model.dart';

// ignore: must_be_immutable
class NNParameterTableview extends StatelessWidget {
  NNParameterTableview(
      {Key? key,
      required this.widgetWidth,
      this.widgetHeight = 600,
      required this.datas})
      : super(key: key);
  final double widgetWidth;
  final double widgetHeight;

  final ScrollController controller = ScrollController();
  final ScrollController controller2 = ScrollController();
  List<NNParameterModel> datas;

  @override
  Widget build(BuildContext context) {
    // print(MediaQuery.of(context).size.width);
    // double width = widgetWidth;
    // if (widgetWidth > 600) {
    //   width = 600;
    // }

    return Container(
      padding: const EdgeInsets.only(right: 20),
      child: Scrollbar(
        controller: controller2,
        thumbVisibility: true,
        child: SingleChildScrollView(
          controller: controller2,
          scrollDirection: Axis.horizontal,
          child: SingleChildScrollView(
            controller: controller,
            child: DataTable(
              dataRowHeight: 40,
              headingRowHeight: 55,
              horizontalMargin: 20,
              columnSpacing: 50,
              dividerThickness: 2,
              columns: nnParameterColumnNames.map((e) {
                return DataColumn(
                    numeric: false,
                    label: Text(
                      e,
                      style: const TextStyle(
                          fontSize: 16, fontWeight: FontWeight.bold),
                    ));
              }).toList(),
              rows: datas.map((e) => _getRow(e)).toList(),
            ),
          ),
        ),
      ),
    );
  }

  DataRow _getRow(NNParameterModel model) {
    return DataRow(cells: [
      DataCell(Text(model.layerName)),
      DataCell(Text(model.layerType)),
      DataCell(Text(model.sizeIn)),
      DataCell(Text(model.sizeOut)),
      DataCell(Text(model.memory)),
      DataCell(Text(model.parameter)),
    ]);
  }
}
