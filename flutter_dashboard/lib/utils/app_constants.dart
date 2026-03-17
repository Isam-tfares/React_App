/// App-wide spacing, sizing, and typography constants.
class AppConstants {
  AppConstants._();

  // ── Sidebar ───────────────────────────────────────────────────────────────
  static const double sidebarWidth = 260.0;
  static const double sidebarCollapsedWidth = 72.0;

  // ── Header ────────────────────────────────────────────────────────────────
  static const double headerHeight = 68.0;

  // ── Spacing ───────────────────────────────────────────────────────────────
  static const double spacingXS = 4.0;
  static const double spacingSM = 8.0;
  static const double spacingMD = 16.0;
  static const double spacingLG = 24.0;
  static const double spacingXL = 32.0;
  static const double spacingXXL = 48.0;

  // ── Border radius ─────────────────────────────────────────────────────────
  static const double radiusSM = 6.0;
  static const double radiusMD = 12.0;
  static const double radiusLG = 16.0;
  static const double radiusXL = 24.0;
  static const double radiusFull = 100.0;

  // ── Card elevation ────────────────────────────────────────────────────────
  static const double cardElevation = 0.0;

  // ── Font sizes ────────────────────────────────────────────────────────────
  static const double fontXS = 11.0;
  static const double fontSM = 12.0;
  static const double fontMD = 14.0;
  static const double fontLG = 16.0;
  static const double fontXL = 18.0;
  static const double fontXXL = 24.0;
  static const double fontDisplay = 32.0;

  // ── Responsive breakpoints ────────────────────────────────────────────────
  static const double breakpointMobile = 768.0;
  static const double breakpointTablet = 1024.0;
  static const double breakpointDesktop = 1280.0;

  // ── Animation durations ───────────────────────────────────────────────────
  static const Duration animationFast = Duration(milliseconds: 150);
  static const Duration animationNormal = Duration(milliseconds: 250);
  static const Duration animationSlow = Duration(milliseconds: 400);
}
