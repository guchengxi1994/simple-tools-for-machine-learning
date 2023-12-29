/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-17 19:26:25
 */
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';

class IconTextWidget extends StatelessWidget {
  const IconTextWidget(
      {super.key,
      required this.icon,
      required this.label,
      required this.onTap,
      this.enable = true});
  final Widget icon;
  final Text label;
  final VoidCallback onTap;
  final bool enable;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: Container(
        padding: const EdgeInsets.only(left: 5, right: 5),
        decoration: BoxDecoration(borderRadius: BorderRadius.circular(5)),
        width: AppStyle.sidemenuWidthHalf,
        constraints: const BoxConstraints(minHeight: AppStyle.iconWidgetHeight),
        child: InkWell(
          borderRadius: BorderRadius.circular(5),
          hoverColor: AppStyle.chipBackground,
          focusColor: AppStyle.chipBackground,
          // highlightColor: AppStyle.white,
          onTap: !enable ? null : () => onTap(),
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
      ),
    );
  }
}
