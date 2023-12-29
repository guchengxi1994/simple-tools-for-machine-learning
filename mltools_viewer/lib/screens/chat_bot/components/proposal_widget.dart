import 'package:flutter/material.dart';
import '../models/custom_response_model.dart';

class ProposalWidget extends StatelessWidget {
  const ProposalWidget({super.key, required this.customResponseModel});
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
