import 'package:flutter/material.dart';

class DeletableCard extends StatelessWidget {
  const DeletableCard(
      {Key? key,
      this.paddingSize = 3,
      required this.text,
      required this.onTap,
      this.style = 1})
      : super(key: key);
  final double paddingSize;
  final String text;
  final VoidCallback onTap;
  final int style;
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      child: Padding(
        padding: EdgeInsets.all(paddingSize),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            style == 1
                ? Expanded(
                    child: Text(
                    text,
                    maxLines: null,
                  ))
                : Text(text),
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
