import 'package:flutter/material.dart';
import 'app_constants.dart';

/// Helpers to determine the current screen size class and adapt layouts.
class ResponsiveHelper {
  ResponsiveHelper._();

  static bool isMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < AppConstants.breakpointMobile;

  static bool isTablet(BuildContext context) {
    final w = MediaQuery.of(context).size.width;
    return w >= AppConstants.breakpointMobile &&
        w < AppConstants.breakpointTablet;
  }

  static bool isDesktop(BuildContext context) =>
      MediaQuery.of(context).size.width >= AppConstants.breakpointTablet;

  /// Returns true when the sidebar should be persistent (always visible).
  static bool showPersistentSidebar(BuildContext context) =>
      isDesktop(context);

  /// Returns true when the sidebar should be collapsed to icons only.
  static bool showCollapsedSidebar(BuildContext context) =>
      isTablet(context);

  /// Content padding – smaller on mobile, larger on desktop.
  static EdgeInsets contentPadding(BuildContext context) {
    if (isMobile(context)) {
      return const EdgeInsets.all(AppConstants.spacingMD);
    }
    if (isTablet(context)) {
      return const EdgeInsets.all(AppConstants.spacingLG);
    }
    return const EdgeInsets.all(AppConstants.spacingXL);
  }

  /// Number of columns for the metric card grid.
  static int metricCardColumns(BuildContext context) {
    if (isMobile(context)) return 2;
    if (isTablet(context)) return 2;
    return 4;
  }

  /// Number of columns for the lower stats grid (charts + activity).
  static int lowerGridColumns(BuildContext context) {
    if (isMobile(context)) return 1;
    return 2;
  }
}
