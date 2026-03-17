import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/dashboard_controller.dart';
import '../utils/app_colors.dart';
import '../utils/app_constants.dart';

/// Left sidebar navigation.
///
/// When [isCollapsed] is true only icons are shown (tablet mode).
class Sidebar extends StatelessWidget {
  final bool isCollapsed;
  final VoidCallback? onClose; // used in drawer mode (mobile)

  const Sidebar({
    super.key,
    this.isCollapsed = false,
    this.onClose,
  });

  @override
  Widget build(BuildContext context) {
    final controller = Get.find<DashboardController>();
    final double width = isCollapsed
        ? AppConstants.sidebarCollapsedWidth
        : AppConstants.sidebarWidth;

    return AnimatedContainer(
      duration: AppConstants.animationNormal,
      curve: Curves.easeInOut,
      width: width,
      decoration: const BoxDecoration(
        color: AppColors.sidebarBackground,
        boxShadow: [
          BoxShadow(
            color: Color(0x33000000),
            blurRadius: 20,
            offset: Offset(4, 0),
          ),
        ],
      ),
      child: Column(
        children: [
          _SidebarHeader(isCollapsed: isCollapsed, onClose: onClose),
          const SizedBox(height: AppConstants.spacingSM),
          _SidebarSectionLabel(
            label: 'MAIN MENU',
            isCollapsed: isCollapsed,
          ),
          Expanded(
            child: Obx(() => ListView.builder(
                  padding: EdgeInsets.symmetric(
                    horizontal: isCollapsed ? 8 : AppConstants.spacingMD,
                    vertical: AppConstants.spacingSM,
                  ),
                  itemCount: controller.navItems.length,
                  itemBuilder: (context, index) {
                    final isActive = controller.selectedIndex.value == index;
                    return _NavTile(
                      item: controller.navItems[index],
                      isActive: isActive,
                      isCollapsed: isCollapsed,
                      onTap: () {
                        controller.selectNavItem(index);
                        // close drawer on mobile after selection
                        if (onClose != null) onClose!();
                      },
                    );
                  },
                )),
          ),
          _SidebarFooter(isCollapsed: isCollapsed),
        ],
      ),
    );
  }
}

// ── Sub-widgets ───────────────────────────────────────────────────────────────

class _SidebarHeader extends StatelessWidget {
  final bool isCollapsed;
  final VoidCallback? onClose;

  const _SidebarHeader({required this.isCollapsed, this.onClose});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: AppConstants.headerHeight,
      padding: EdgeInsets.symmetric(
        horizontal: isCollapsed ? 0 : AppConstants.spacingMD,
      ),
      decoration: BoxDecoration(
        border: Border(
          bottom: BorderSide(
            color: Colors.white.withOpacity(0.08),
          ),
        ),
      ),
      child: isCollapsed
          ? const Center(
              child: _LogoIcon(),
            )
          : Row(
              children: [
                const _LogoIcon(),
                const SizedBox(width: AppConstants.spacingMD),
                Expanded(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'DashPro',
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: AppConstants.fontXL,
                          fontWeight: FontWeight.w700,
                          letterSpacing: 0.5,
                        ),
                      ),
                      Text(
                        'Admin Dashboard',
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.45),
                          fontSize: AppConstants.fontSM,
                        ),
                      ),
                    ],
                  ),
                ),
                if (onClose != null)
                  IconButton(
                    icon: const Icon(Icons.close, color: AppColors.sidebarText),
                    onPressed: onClose,
                    tooltip: 'Close menu',
                  ),
              ],
            ),
    );
  }
}

class _LogoIcon extends StatelessWidget {
  const _LogoIcon({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 36,
      height: 36,
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [AppColors.primaryLight, AppColors.primary],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(AppConstants.radiusSM),
      ),
      child: const Icon(Icons.speed, color: Colors.white, size: 20),
    );
  }
}

class _SidebarSectionLabel extends StatelessWidget {
  final String label;
  final bool isCollapsed;

  const _SidebarSectionLabel({
    required this.label,
    required this.isCollapsed,
  });

  @override
  Widget build(BuildContext context) {
    if (isCollapsed) {
      return Padding(
        padding: const EdgeInsets.symmetric(vertical: AppConstants.spacingSM),
        child: Divider(
          color: Colors.white.withOpacity(0.1),
          height: 1,
          indent: 16,
          endIndent: 16,
        ),
      );
    }
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        AppConstants.spacingMD,
        AppConstants.spacingSM,
        AppConstants.spacingMD,
        AppConstants.spacingXS,
      ),
      child: Text(
        label,
        style: TextStyle(
          color: Colors.white.withOpacity(0.35),
          fontSize: AppConstants.fontXS,
          fontWeight: FontWeight.w600,
          letterSpacing: 1.2,
        ),
      ),
    );
  }
}

class _NavTile extends StatefulWidget {
  final NavItem item;
  final bool isActive;
  final bool isCollapsed;
  final VoidCallback onTap;

  const _NavTile({
    required this.item,
    required this.isActive,
    required this.isCollapsed,
    required this.onTap,
  });

  @override
  State<_NavTile> createState() => _NavTileState();
}

class _NavTileState extends State<_NavTile> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    final bool highlighted = widget.isActive || _isHovered;

    return Padding(
      padding: const EdgeInsets.only(bottom: AppConstants.spacingXS),
      child: MouseRegion(
        onEnter: (_) => setState(() => _isHovered = true),
        onExit: (_) => setState(() => _isHovered = false),
        child: GestureDetector(
          onTap: widget.onTap,
          child: AnimatedContainer(
            duration: AppConstants.animationFast,
            decoration: BoxDecoration(
              color: widget.isActive
                  ? AppColors.sidebarActive
                  : _isHovered
                      ? AppColors.sidebarHover
                      : Colors.transparent,
              borderRadius: BorderRadius.circular(AppConstants.radiusMD),
            ),
            padding: EdgeInsets.symmetric(
              horizontal: widget.isCollapsed ? 0 : AppConstants.spacingMD,
              vertical: AppConstants.spacingMD - 2,
            ),
            child: widget.isCollapsed
                ? Tooltip(
                    message: widget.item.label,
                    preferBelow: false,
                    child: Center(
                      child: Icon(
                        widget.isActive
                            ? widget.item.activeIcon
                            : widget.item.icon,
                        color: highlighted
                            ? Colors.white
                            : AppColors.sidebarIcon,
                        size: 22,
                      ),
                    ),
                  )
                : Row(
                    children: [
                      Icon(
                        widget.isActive
                            ? widget.item.activeIcon
                            : widget.item.icon,
                        color: highlighted ? Colors.white : AppColors.sidebarIcon,
                        size: 20,
                      ),
                      const SizedBox(width: AppConstants.spacingMD),
                      Expanded(
                        child: Text(
                          widget.item.label,
                          style: TextStyle(
                            color: highlighted
                                ? AppColors.sidebarActiveText
                                : AppColors.sidebarText,
                            fontSize: AppConstants.fontMD,
                            fontWeight: widget.isActive
                                ? FontWeight.w600
                                : FontWeight.w400,
                          ),
                        ),
                      ),
                      if (widget.isActive)
                        Container(
                          width: 6,
                          height: 6,
                          decoration: const BoxDecoration(
                            color: Colors.white,
                            shape: BoxShape.circle,
                          ),
                        ),
                    ],
                  ),
          ),
        ),
      ),
    );
  }
}

class _SidebarFooter extends StatelessWidget {
  final bool isCollapsed;

  const _SidebarFooter({required this.isCollapsed});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: isCollapsed ? 8 : AppConstants.spacingMD,
        vertical: AppConstants.spacingMD,
      ),
      decoration: BoxDecoration(
        border: Border(
          top: BorderSide(color: Colors.white.withOpacity(0.08)),
        ),
      ),
      child: isCollapsed
          ? Center(
              child: CircleAvatar(
                radius: 18,
                backgroundColor: AppColors.sidebarActive,
                child: const Text(
                  'A',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 14,
                  ),
                ),
              ),
            )
          : Row(
              children: [
                CircleAvatar(
                  radius: 18,
                  backgroundColor: AppColors.sidebarActive,
                  child: const Text(
                    'A',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 14,
                    ),
                  ),
                ),
                const SizedBox(width: AppConstants.spacingMD),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Text(
                        'Admin User',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: AppConstants.fontMD,
                          fontWeight: FontWeight.w600,
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                      Text(
                        'admin@dashpro.io',
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.4),
                          fontSize: AppConstants.fontXS,
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
                Icon(
                  Icons.logout_outlined,
                  color: Colors.white.withOpacity(0.4),
                  size: 18,
                ),
              ],
            ),
    );
  }
}
