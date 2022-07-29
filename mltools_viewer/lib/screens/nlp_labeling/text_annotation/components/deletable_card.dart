import 'package:flutter/material.dart';

class DeletableCard extends StatelessWidget {
  const DeletableCard(
      {Key? key, this.paddingSize = 3, required this.text, required this.onTap})
      : super(key: key);
  final double paddingSize;
  final String text;
  final VoidCallback onTap;
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      child: Padding(
        padding: EdgeInsets.all(paddingSize),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Expanded(
                child: Text(
              text,
              maxLines: null,
            )),
            SizedBox(
              width: paddingSize * 3,
            ),
            InkWell(
              onTap: onTap,
              child: const Icon(
                Icons.delete,
                size: 20,
                color: Colors.red,
              ),
            )
          ],
        ),
      ),
    );
  }
}
