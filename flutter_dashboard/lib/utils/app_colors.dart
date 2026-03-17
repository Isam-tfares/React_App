import 'package:flutter/material.dart';

/// Central color palette for the dashboard.
/// Primary surface: white. Accent: blue scale.
class AppColors {
  AppColors._();

  // ── Surfaces ──────────────────────────────────────────────────────────────
  static const Color background = Color(0xFFF4F6FA);
  static const Color surface = Color(0xFFFFFFFF);
  static const Color surfaceVariant = Color(0xFFEFF2F8);

  // ── Sidebar ───────────────────────────────────────────────────────────────
  static const Color sidebarBackground = Color(0xFF0D1B2A);
  static const Color sidebarActive = Color(0xFF1565C0);
  static const Color sidebarHover = Color(0xFF1A2B3C);
  static const Color sidebarIcon = Color(0xFF90A4AE);
  static const Color sidebarText = Color(0xFFCFD8DC);
  static const Color sidebarActiveText = Color(0xFFFFFFFF);

  // ── Primary / Accent (blue scale) ─────────────────────────────────────────
  static const Color primary = Color(0xFF1565C0);
  static const Color primaryLight = Color(0xFF42A5F5);
  static const Color primaryDark = Color(0xFF0D47A1);
  static const Color accent = Color(0xFF2196F3);

  // ── Text ──────────────────────────────────────────────────────────────────
  static const Color textPrimary = Color(0xFF1A1A2E);
  static const Color textSecondary = Color(0xFF6B7280);
  static const Color textHint = Color(0xFFB0BEC5);

  // ── Status ────────────────────────────────────────────────────────────────
  static const Color success = Color(0xFF4CAF50);
  static const Color warning = Color(0xFFFFC107);
  static const Color error = Color(0xFFF44336);
  static const Color info = Color(0xFF2196F3);
  static const Color infoAlt = Color(0xFF0288D1);

  // ── Metric card accent colours ────────────────────────────────────────────
  static const Color cardBlue = Color(0xFF1565C0);
  static const Color cardGreen = Color(0xFF2E7D32);
  static const Color cardOrange = Color(0xFFE65100);
  static const Color cardPurple = Color(0xFF6A1B9A);

  // ── Misc ──────────────────────────────────────────────────────────────────
  static const Color divider = Color(0xFFE0E7FF);
  static const Color shadow = Color(0x1A1565C0);
  static const Color border = Color(0xFFE5E9F0);
  static const Color searchFill = Color(0xFFF0F3FA);
}
