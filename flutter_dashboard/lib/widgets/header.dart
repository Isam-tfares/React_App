import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/dashboard_controller.dart';
import '../utils/app_colors.dart';
import '../utils/app_constants.dart';
import '../utils/responsive_helper.dart';

/// Top application header bar with hamburger, search, notifications and profile.
class DashboardHeader extends StatelessWidget {
  const DashboardHeader({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = Get.find<DashboardController>();
    final isMobile = ResponsiveHelper.isMobile(context);

    return Container(
      height: AppConstants.headerHeight,
      padding: const EdgeInsets.symmetric(
        horizontal: AppConstants.spacingLG,
      ),
      decoration: const BoxDecoration(
        color: AppColors.surface,
        border: Border(
          bottom: BorderSide(color: AppColors.border),
        ),
        boxShadow: [
          BoxShadow(
            color: Color(0x0A000000),
            blurRadius: 10,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: Row(
        children: [
          // ── Hamburger / collapse toggle ──────────────────────────────────
          _HamburgerButton(
            isMobile: isMobile,
            onTap: () {
              if (isMobile) {
                Scaffold.of(context).openDrawer();
              } else {
                controller.toggleSidebar();
              }
            },
          ),
          const SizedBox(width: AppConstants.spacingMD),

          // ── Page title ───────────────────────────────────────────────────
          Obx(() => Text(
                controller.currentPageTitle,
                style: const TextStyle(
                  color: AppColors.textPrimary,
                  fontSize: AppConstants.fontXL,
                  fontWeight: FontWeight.w700,
                ),
              )),

          const Spacer(),

          // ── Search bar ───────────────────────────────────────────────────
          if (!isMobile) const _SearchBar(),
          if (!isMobile) const SizedBox(width: AppConstants.spacingLG),

          // ── Action icons ─────────────────────────────────────────────────
          _NotificationButton(controller: controller),
          const SizedBox(width: AppConstants.spacingSM),
          const _SettingsButton(),
          const SizedBox(width: AppConstants.spacingMD),
          const _UserAvatar(),
        ],
      ),
    );
  }
}

// ── Sub-widgets ───────────────────────────────────────────────────────────────

class _HamburgerButton extends StatelessWidget {
  final bool isMobile;
  final VoidCallback onTap;

  const _HamburgerButton({required this.isMobile, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(AppConstants.radiusSM),
      child: Padding(
        padding: const EdgeInsets.all(6.0),
        child: Icon(
          Icons.menu_rounded,
          color: AppColors.textSecondary,
          size: 22,
        ),
      ),
    );
  }
}

class _SearchBar extends StatelessWidget {
  const _SearchBar();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 260,
      height: 38,
      decoration: BoxDecoration(
        color: AppColors.searchFill,
        borderRadius: BorderRadius.circular(AppConstants.radiusFull),
        border: Border.all(color: AppColors.border),
      ),
      padding: const EdgeInsets.symmetric(horizontal: AppConstants.spacingMD),
      child: Row(
        children: [
          const Icon(
            Icons.search_rounded,
            color: AppColors.textHint,
            size: 18,
          ),
          const SizedBox(width: AppConstants.spacingSM),
          Expanded(
            child: TextField(
              decoration: const InputDecoration(
                hintText: 'Search anything…',
                hintStyle: TextStyle(
                  color: AppColors.textHint,
                  fontSize: AppConstants.fontMD,
                ),
                border: InputBorder.none,
                isDense: true,
              ),
              style: const TextStyle(
                fontSize: AppConstants.fontMD,
                color: AppColors.textPrimary,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _NotificationButton extends StatelessWidget {
  final DashboardController controller;

  const _NotificationButton({required this.controller});

  @override
  Widget build(BuildContext context) {
    return Obx(() => Stack(
          clipBehavior: Clip.none,
          children: [
            _HeaderIconButton(
              icon: Icons.notifications_none_rounded,
              tooltip: 'Notifications',
              onTap: () {},
            ),
            if (controller.notificationCount.value > 0)
              Positioned(
                right: 2,
                top: 2,
                child: Container(
                  width: 16,
                  height: 16,
                  decoration: const BoxDecoration(
                    color: AppColors.error,
                    shape: BoxShape.circle,
                  ),
                  child: Center(
                    child: Text(
                      controller.notificationCount.value.toString(),
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 9,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ),
          ],
        ));
  }
}

class _SettingsButton extends StatelessWidget {
  const _SettingsButton();

  @override
  Widget build(BuildContext context) {
    return _HeaderIconButton(
      icon: Icons.settings_outlined,
      tooltip: 'Settings',
      onTap: () {},
    );
  }
}

class _HeaderIconButton extends StatelessWidget {
  final IconData icon;
  final String tooltip;
  final VoidCallback onTap;

  const _HeaderIconButton({
    required this.icon,
    required this.tooltip,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: tooltip,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(AppConstants.radiusMD),
        child: Container(
          width: 38,
          height: 38,
          decoration: BoxDecoration(
            color: AppColors.searchFill,
            borderRadius: BorderRadius.circular(AppConstants.radiusMD),
            border: Border.all(color: AppColors.border),
          ),
          child: Icon(icon, color: AppColors.textSecondary, size: 20),
        ),
      ),
    );
  }
}

class _UserAvatar extends StatelessWidget {
  const _UserAvatar();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        CircleAvatar(
          radius: 17,
          backgroundColor: AppColors.primary,
          child: const Text(
            'A',
            style: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
              fontSize: 13,
            ),
          ),
        ),
        if (!ResponsiveHelper.isMobile(context)) ...[
          const SizedBox(width: AppConstants.spacingSM),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'Admin User',
                style: TextStyle(
                  color: AppColors.textPrimary,
                  fontSize: AppConstants.fontSM,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const Text(
                'Super Admin',
                style: TextStyle(
                  color: AppColors.textSecondary,
                  fontSize: AppConstants.fontXS,
                ),
              ),
            ],
          ),
          const SizedBox(width: AppConstants.spacingXS),
          const Icon(
            Icons.keyboard_arrow_down_rounded,
            color: AppColors.textSecondary,
            size: 18,
          ),
        ],
      ],
    );
  }
}
