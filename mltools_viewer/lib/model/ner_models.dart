import 'package:flutter/material.dart';

enum NerItems {
  // 人名
  name,
  // 机构名
  institution,
  // 地名
  location,
  // 时间
  time,
  // 日期
  date,
  // 货币
  money,
  // 百分比
  percent,
  // none
  none
}

extension NerExtension on NerItems {
  String toStr() {
    switch (this) {
      case NerItems.name:
        return "人名";
      case NerItems.institution:
        return "机构名";
      case NerItems.location:
        return "地名";
      case NerItems.time:
        return "时间";
      case NerItems.date:
        return "日期";
      case NerItems.money:
        return "货币";
      case NerItems.percent:
        return "百分比";
      case NerItems.none:
        return "无";
      default:
        return "未知";
    }
  }

  Color getColor() {
    switch (this) {
      case NerItems.name:
        return const Color.fromARGB(255, 228, 96, 40);
      case NerItems.institution:
        return const Color.fromARGB(255, 23, 193, 43);
      case NerItems.location:
        return const Color.fromARGB(255, 104, 20, 176);
      case NerItems.time:
        return const Color.fromARGB(255, 220, 141, 24);
      case NerItems.date:
        return const Color.fromARGB(255, 222, 229, 20);
      case NerItems.money:
        return const Color.fromARGB(255, 226, 33, 243);
      case NerItems.percent:
        return const Color.fromARGB(255, 77, 126, 69);
      case NerItems.none:
        return Colors.black;
    }
  }
}
