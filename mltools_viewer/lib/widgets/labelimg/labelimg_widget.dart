/*
 * @Descripttion: 
 * @version: 
 * @Author: xiaoshuyui
 * @email: guchengxi1994@qq.com
 * @Date: 2022-07-15 19:04:06
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2022-07-16 17:49:33
 */
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/annotation_controller.dart';
import 'package:mltools_viewer/controllers/image_controller.dart';
// import 'package:mltools_viewer/model/labelimg_objs.dart';
import 'package:provider/provider.dart';
import 'package:taichi/taichi.dart' show TaichiDevUtils;

part './rect_v2.dart';

const double pointSize = 20;
const double defaultRectSize = 100;
