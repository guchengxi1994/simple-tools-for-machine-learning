import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';

class IconTextWidget extends StatelessWidget {
  const IconTextWidget(
      {Key? key,
      required this.icon,
      required this.label,
      required this.onTap,
      this.enable = true})
      : super(key: key);
  final Widget icon;
  final Text label;
  final VoidCallback onTap;
  final bool enable;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: !enable ? null : () => onTap(),
      child: SizedBox(
        width: AppStyle.sidemenuWidthHalf,
        height: AppStyle.iconWidgetHeight,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            icon,
            const SizedBox(
              height: 5,
            ),
            label
          ],
        ),
      ),
    );
  }
}
