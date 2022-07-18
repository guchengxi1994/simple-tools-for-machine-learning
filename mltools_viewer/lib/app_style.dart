/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-16 23:42:01
 */
/// copied from taichi_admin
import 'package:flutter/material.dart';

class AppStyle {
  AppStyle._();

  static InputDecoration getInputDecotation() {
    return const InputDecoration(
      isCollapsed: true,
      contentPadding:
          EdgeInsets.symmetric(horizontal: 8, vertical: 10), //内容内边距，影响高度
      border: OutlineInputBorder(
        ///设置边框四个角的弧度
        borderRadius: BorderRadius.all(Radius.circular(10)),

        ///用来配置边框的样式
        borderSide: BorderSide(
          ///设置边框的颜色
          color: Colors.red,

          ///设置边框的粗细
          width: 2.0,
        ),
      ),
    );
  }

  static const double defaultPadding = 20;

  static const double headerHeight = 200;
  static const double sidemenuWidth = 300;
  static const double dialogWidth = 400;
  static const double sidemenuWidthHalf = 150;
  static const double collapseSidemenuWidth = 50;
  static const double appbarHeight = 50;

  static const Color notWhite = Color(0xFFEDF0F2);
  static const Color nearlyWhite = Color(0xFFFEFEFE);
  static const Color white = Color(0xFFFFFFFF);
  static const Color nearlyBlack = Color(0xFF213333);
  static const Color grey = Color(0xFF3A5160);
  // ignore: constant_identifier_names
  static const Color dark_grey = Color(0xFF313A44);

  static const Color lightBlue = Colors.lightBlueAccent;
  static const Color darkBlue = Color.fromARGB(255, 6, 93, 136);

  static const Color darkText = Color(0xFF253840);
  static const Color darkerText = Color(0xFF17262A);
  static const Color lightText = Color(0xFF4A6572);
  static const Color deactivatedText = Color(0xFF767676);
  static const Color dismissibleBackground = Color(0xFF364A54);
  static const Color chipBackground = Color(0xFFEEF1F3);
  static const Color spacer = Color(0xFFF2F2F2);

  static const double desktopCardWidth = 200;
  static const double desktopCardHeight = 200;

  static const double labelHeight = 50;
  static const double iconWidgetHeight = 60;

  static const double tabletCardWidth = 125;
  static const double tabletCardHeight = 125;

  static const double mobileCardWidth = 100;
  static const double mobileCardHeight = 125;

  static const TextStyle menuBar = TextStyle(
    fontWeight: FontWeight.w400,
    fontSize: 16,
    letterSpacing: 0.2,
    color: Colors.white, // was lightText
  );

  static const TextStyle form2CommonTitle = TextStyle(
    fontWeight: FontWeight.w400,
    fontSize: 16,
    letterSpacing: 0.2,
    color: Colors.black, // was lightText
  );
}
