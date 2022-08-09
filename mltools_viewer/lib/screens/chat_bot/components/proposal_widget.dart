import 'package:flutter/material.dart';
import '../models/custom_response_model.dart';

class ProposalWidget extends StatelessWidget {
  const ProposalWidget({Key? key, required this.customResponseModel})
      : super(key: key);
  final CustomResponseModel customResponseModel;

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: Card(
        child: Column(
          children: [Text(customResponseModel.answer ?? "")],
        ),
      ),
    );
  }
}
