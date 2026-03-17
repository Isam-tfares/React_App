import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/dashboard_controller.dart';
import '../utils/app_constants.dart';
import '../utils/app_colors.dart';
import '../utils/responsive_helper.dart';
import '../widgets/sidebar.dart';
import '../widgets/header.dart';
import '../widgets/metric_card.dart';
import '../widgets/chart_widgets.dart';
import '../widgets/recent_activity.dart';

/// The main responsive dashboard screen.
///
/// Layout strategy:
///   - Desktop (≥ 1024 px): persistent sidebar + full content
///   - Tablet  (768–1023): collapsed (icon-only) sidebar + content
///   - Mobile  (< 768 px): hidden sidebar in a Drawer + content
class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = Get.find<DashboardController>();
    final isMobile = ResponsiveHelper.isMobile(context);
    final isTablet = ResponsiveHelper.isTablet(context);

    return Scaffold(
      backgroundColor: AppColors.background,
      // ── Mobile drawer ────────────────────────────────────────────────────
      drawer: isMobile
          ? Drawer(
              width: AppConstants.sidebarWidth,
              child: Sidebar(
                isCollapsed: false,
                onClose: () => Navigator.pop(context),
              ),
            )
          : null,

      body: Row(
        children: [
          // ── Desktop / tablet persistent sidebar ──────────────────────────
          if (!isMobile)
            Obx(() {
              final collapsed =
                  isTablet ? true : controller.isSidebarCollapsed.value;
              return Sidebar(isCollapsed: collapsed);
            }),

          // ── Main content area ────────────────────────────────────────────
          Expanded(
            child: Column(
              children: [
                const DashboardHeader(),
                Expanded(
                  child: SingleChildScrollView(
                    padding: ResponsiveHelper.contentPadding(context),
                    child: _DashboardBody(),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ── Dashboard body ────────────────────────────────────────────────────────────

class _DashboardBody extends StatelessWidget {
  const _DashboardBody({super.key});
  Widget build(BuildContext context) {
    final controller = Get.find<DashboardController>();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // ── Welcome banner ───────────────────────────────────────────────
        _WelcomeBanner(),
        const SizedBox(height: AppConstants.spacingLG),

        // ── Metric cards grid ────────────────────────────────────────────
        _MetricGrid(metrics: controller.metrics),
        const SizedBox(height: AppConstants.spacingLG),

        // ── Charts row ───────────────────────────────────────────────────
        const _ChartsRow(),
        const SizedBox(height: AppConstants.spacingLG),

        // ── Bottom row: traffic donut + activity ─────────────────────────
        const _BottomRow(),
        const SizedBox(height: AppConstants.spacingLG),
      ],
    );
  }
}

// ── Welcome banner ────────────────────────────────────────────────────────────

class _WelcomeBanner extends StatelessWidget {
  const _WelcomeBanner({super.key});
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(AppConstants.spacingLG),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [AppColors.primary, AppColors.primaryDark],
          begin: Alignment.centerLeft,
          end: Alignment.centerRight,
        ),
        borderRadius: BorderRadius.circular(AppConstants.radiusLG),
        boxShadow: [
          BoxShadow(
            color: AppColors.primary.withOpacity(0.35),
            blurRadius: 20,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Good morning, Admin! 👋",
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.8),
                    fontSize: AppConstants.fontMD,
                  ),
                ),
                const SizedBox(height: AppConstants.spacingXS),
                const Text(
                  'Welcome back to DashPro',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: AppConstants.fontXXL,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(height: AppConstants.spacingXS),
                Text(
                  "Here's what's happening with your data today.",
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.65),
                    fontSize: AppConstants.fontMD,
                  ),
                ),
                const SizedBox(height: AppConstants.spacingLG),
                _BannerButton(),
              ],
            ),
          ),
          if (!ResponsiveHelper.isMobile(context))
            Padding(
              padding: const EdgeInsets.only(left: AppConstants.spacingXL),
              child: Icon(
                Icons.insert_chart_outlined_rounded,
                size: 80,
                color: Colors.white.withOpacity(0.15),
              ),
            ),
        ],
      ),
    );
  }
}

class _BannerButton extends StatelessWidget {
  const _BannerButton({super.key});
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: () {},
      icon: const Icon(Icons.download_outlined, size: 16),
      label: const Text('Download Report'),
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.white,
        foregroundColor: AppColors.primary,
        elevation: 0,
        padding: const EdgeInsets.symmetric(
          horizontal: AppConstants.spacingLG,
          vertical: AppConstants.spacingMD - 4,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(AppConstants.radiusFull),
        ),
        textStyle: const TextStyle(
          fontWeight: FontWeight.w600,
          fontSize: AppConstants.fontSM,
        ),
      ),
    );
  }
}

// ── Metric cards grid ─────────────────────────────────────────────────────────

class _MetricGrid extends StatelessWidget {
  final List metrics;

  const _MetricGrid({required this.metrics});

  @override
  Widget build(BuildContext context) {
    final columns = ResponsiveHelper.metricCardColumns(context);
    const cardHeight = 160.0;
    const spacing = AppConstants.spacingMD;

    return LayoutBuilder(
      builder: (context, constraints) {
        final totalSpacing = spacing * (columns - 1);
        final cardWidth = (constraints.maxWidth - totalSpacing) / columns;
        return GridView.builder(
          physics: const NeverScrollableScrollPhysics(),
          shrinkWrap: true,
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: columns,
            crossAxisSpacing: spacing,
            mainAxisSpacing: spacing,
            childAspectRatio: cardWidth / cardHeight,
          ),
          itemCount: metrics.length,
          itemBuilder: (_, index) {
            final m = metrics[index];
            return MetricCard(
              title: m.title,
              value: m.value,
              change: m.change,
              isPositive: m.isPositive,
              icon: m.icon,
              accentColor: m.color,
            );
          },
        );
      },
    );
  }
}

// ── Charts row ────────────────────────────────────────────────────────────────

class _ChartsRow extends StatelessWidget {
  const _ChartsRow();

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveHelper.isMobile(context);

    if (isMobile) {
      return Column(
        children: [
          const SizedBox(height: 300, child: RevenueLineChart()),
          const SizedBox(height: AppConstants.spacingMD),
          const SizedBox(height: 280, child: UserActivityBarChart()),
        ],
      );
    }

    return SizedBox(
      height: 300,
      child: Row(
        children: [
          const Expanded(flex: 3, child: RevenueLineChart()),
          const SizedBox(width: AppConstants.spacingMD),
          const Expanded(flex: 2, child: UserActivityBarChart()),
        ],
      ),
    );
  }
}

// ── Bottom row ────────────────────────────────────────────────────────────────

class _BottomRow extends StatelessWidget {
  const _BottomRow();

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveHelper.isMobile(context);

    if (isMobile) {
      return Column(
        children: [
          const SizedBox(height: 280, child: TrafficDonutChart()),
          const SizedBox(height: AppConstants.spacingMD),
          const SizedBox(height: 380, child: RecentActivityCard()),
        ],
      );
    }

    return SizedBox(
      height: 380,
      child: Row(
        children: [
          const Expanded(flex: 2, child: TrafficDonutChart()),
          const SizedBox(width: AppConstants.spacingMD),
          const Expanded(flex: 3, child: RecentActivityCard()),
        ],
      ),
    );
  }
}
