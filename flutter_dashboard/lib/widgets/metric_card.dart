import 'package:flutter/material.dart';
import '../utils/app_colors.dart';
import '../utils/app_constants.dart';

/// A single metric summary card showing a KPI value and trend.
class MetricCard extends StatelessWidget {
  final String title;
  final String value;
  final String change;
  final bool isPositive;
  final IconData icon;
  final Color accentColor;

  const MetricCard({
    super.key,
    required this.title,
    required this.value,
    required this.change,
    required this.isPositive,
    required this.icon,
    required this.accentColor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(AppConstants.spacingLG),
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: BorderRadius.circular(AppConstants.radiusLG),
        border: Border.all(color: AppColors.border),
        boxShadow: [
          BoxShadow(
            color: AppColors.shadow,
            blurRadius: 12,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // ── Icon + Menu ──────────────────────────────────────────────────
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                width: 46,
                height: 46,
                decoration: BoxDecoration(
                  color: accentColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(AppConstants.radiusMD),
                ),
                child: Icon(icon, color: accentColor, size: 22),
              ),
              Icon(
                Icons.more_horiz_rounded,
                color: AppColors.textHint,
                size: 20,
              ),
            ],
          ),
          const Spacer(),
          // ── Value ────────────────────────────────────────────────────────
          Text(
            value,
            style: const TextStyle(
              color: AppColors.textPrimary,
              fontSize: AppConstants.fontXXL,
              fontWeight: FontWeight.w700,
              height: 1.1,
            ),
          ),
          const SizedBox(height: AppConstants.spacingXS),
          // ── Title ────────────────────────────────────────────────────────
          Text(
            title,
            style: const TextStyle(
              color: AppColors.textSecondary,
              fontSize: AppConstants.fontSM,
              fontWeight: FontWeight.w500,
            ),
          ),
          const SizedBox(height: AppConstants.spacingSM),
          // ── Trend badge ──────────────────────────────────────────────────
          _TrendBadge(change: change, isPositive: isPositive),
        ],
      ),
    );
  }
}

class _TrendBadge extends StatelessWidget {
  final String change;
  final bool isPositive;

  const _TrendBadge({required this.change, required this.isPositive});

  @override
  Widget build(BuildContext context) {
    final Color color = isPositive ? AppColors.success : AppColors.error;
    final IconData arrowIcon = isPositive
        ? Icons.arrow_upward_rounded
        : Icons.arrow_downward_rounded;

    return Row(
      children: [
        Container(
          padding: const EdgeInsets.symmetric(
            horizontal: AppConstants.spacingSM,
            vertical: AppConstants.spacingXS,
          ),
          decoration: BoxDecoration(
            color: color.withOpacity(0.1),
            borderRadius: BorderRadius.circular(AppConstants.radiusFull),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(arrowIcon, color: color, size: 12),
              const SizedBox(width: 2),
              Text(
                change,
                style: TextStyle(
                  color: color,
                  fontSize: AppConstants.fontXS,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ),
        ),
        const SizedBox(width: AppConstants.spacingXS),
        const Text(
          'vs last month',
          style: TextStyle(
            color: AppColors.textHint,
            fontSize: AppConstants.fontXS,
          ),
        ),
      ],
    );
  }
}
