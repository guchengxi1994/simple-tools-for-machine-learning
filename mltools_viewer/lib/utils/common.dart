/// copied from taichi_admin
import 'package:flutter/material.dart';

enum ScreenType { mobile, tablet, desktop }

class ScreenTypeUtils {
  static const thresMobile = 600;
  static const thresTablet = 1000;

  static bool isMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < thresMobile;

  static bool isTablet(BuildContext context) =>
      MediaQuery.of(context).size.width < thresTablet &&
      MediaQuery.of(context).size.width >= thresMobile;

  static bool isDesktop(BuildContext context) =>
      MediaQuery.of(context).size.width >= thresTablet;

  static ScreenType getScreenType(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    if (width < thresMobile) {
      return ScreenType.mobile;
    } else if (width >= thresMobile && width < thresTablet) {
      return ScreenType.tablet;
    } else {
      return ScreenType.desktop;
    }
  }
}
