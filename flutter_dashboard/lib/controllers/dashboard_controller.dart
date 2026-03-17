import 'package:get/get.dart';
import 'package:flutter/material.dart';
import '../utils/app_colors.dart';

/// A navigation item definition used by the sidebar.
class NavItem {
  final String label;
  final IconData icon;
  final IconData activeIcon;

  const NavItem({
    required this.label,
    required this.icon,
    required this.activeIcon,
  });
}

/// A metric card data model.
class MetricData {
  final String title;
  final String value;
  final String change;
  final bool isPositive;
  final IconData icon;
  final Color color;

  const MetricData({
    required this.title,
    required this.value,
    required this.change,
    required this.isPositive,
    required this.icon,
    required this.color,
  });
}

/// A recent activity item model.
class ActivityItem {
  final String title;
  final String subtitle;
  final String time;
  final IconData icon;
  final Color iconColor;

  const ActivityItem({
    required this.title,
    required this.subtitle,
    required this.time,
    required this.icon,
    required this.iconColor,
  });
}

/// Central GetX controller for the dashboard.
class DashboardController extends GetxController {
  // ── Sidebar state ─────────────────────────────────────────────────────────
  final RxInt selectedIndex = 0.obs;
  final RxBool isSidebarCollapsed = false.obs;

  // ── Navigation items ──────────────────────────────────────────────────────
  final List<NavItem> navItems = const [
    NavItem(
      label: 'Dashboard',
      icon: Icons.dashboard_outlined,
      activeIcon: Icons.dashboard,
    ),
    NavItem(
      label: 'Analytics',
      icon: Icons.bar_chart_outlined,
      activeIcon: Icons.bar_chart,
    ),
    NavItem(
      label: 'Users',
      icon: Icons.people_outline,
      activeIcon: Icons.people,
    ),
    NavItem(
      label: 'Projects',
      icon: Icons.folder_outlined,
      activeIcon: Icons.folder,
    ),
    NavItem(
      label: 'Messages',
      icon: Icons.chat_bubble_outline,
      activeIcon: Icons.chat_bubble,
    ),
    NavItem(
      label: 'Calendar',
      icon: Icons.calendar_today_outlined,
      activeIcon: Icons.calendar_today,
    ),
    NavItem(
      label: 'Reports',
      icon: Icons.insert_chart_outlined,
      activeIcon: Icons.insert_chart,
    ),
    NavItem(
      label: 'Settings',
      icon: Icons.settings_outlined,
      activeIcon: Icons.settings,
    ),
  ];

  // ── Metric cards data ─────────────────────────────────────────────────────
  final List<MetricData> metrics = [
    MetricData(
      title: 'Total Users',
      value: '24,521',
      change: '+12.5%',
      isPositive: true,
      icon: Icons.people_alt_outlined,
      color: AppColors.cardBlue,
    ),
    MetricData(
      title: 'Revenue',
      value: '\$86,400',
      change: '+8.2%',
      isPositive: true,
      icon: Icons.attach_money_outlined,
      color: AppColors.cardGreen,
    ),
    MetricData(
      title: 'New Orders',
      value: '1,893',
      change: '-3.1%',
      isPositive: false,
      icon: Icons.shopping_cart_outlined,
      color: AppColors.cardOrange,
    ),
    MetricData(
      title: 'Conversion',
      value: '5.27%',
      change: '+1.8%',
      isPositive: true,
      icon: Icons.trending_up_outlined,
      color: AppColors.cardPurple,
    ),
  ];

  // ── Recent activity data ───────────────────────────────────────────────────
  final List<ActivityItem> recentActivity = [
    ActivityItem(
      title: 'New user registered',
      subtitle: 'John Doe joined the platform',
      time: '2 min ago',
      icon: Icons.person_add_alt_1,
      iconColor: AppColors.cardBlue,
    ),
    ActivityItem(
      title: 'New order placed',
      subtitle: 'Order #4521 – \$240.00',
      time: '15 min ago',
      icon: Icons.shopping_bag_outlined,
      iconColor: AppColors.cardGreen,
    ),
    ActivityItem(
      title: 'Report generated',
      subtitle: 'Monthly revenue report is ready',
      time: '1 hr ago',
      icon: Icons.insert_chart_outlined,
      iconColor: AppColors.cardPurple,
    ),
    ActivityItem(
      title: 'Server alert',
      subtitle: 'CPU usage exceeded 85%',
      time: '2 hr ago',
      icon: Icons.warning_amber_outlined,
      iconColor: AppColors.warning,
    ),
    ActivityItem(
      title: 'Deployment successful',
      subtitle: 'v2.4.1 deployed to production',
      time: '3 hr ago',
      icon: Icons.rocket_launch_outlined,
      iconColor: AppColors.infoAlt,
    ),
    ActivityItem(
      title: 'New message',
      subtitle: 'Sarah replied to your comment',
      time: '5 hr ago',
      icon: Icons.chat_bubble_outline,
      iconColor: AppColors.cardOrange,
    ),
  ];

  // ── Notification count ────────────────────────────────────────────────────
  final RxInt notificationCount = 3.obs;

  // ── Page title ────────────────────────────────────────────────────────────
  String get currentPageTitle => navItems[selectedIndex.value].label;

  // ── Actions ───────────────────────────────────────────────────────────────
  void selectNavItem(int index) => selectedIndex.value = index;

  void toggleSidebar() =>
      isSidebarCollapsed.value = !isSidebarCollapsed.value;
}
