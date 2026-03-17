import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import '../utils/app_colors.dart';
import '../utils/app_constants.dart';

// ── Revenue Line Chart ────────────────────────────────────────────────────────

/// Line chart showing revenue over the past 7 months.
class RevenueLineChart extends StatefulWidget {
  const RevenueLineChart({super.key});

  @override
  State<RevenueLineChart> createState() => _RevenueLineChartState();
}

class _RevenueLineChartState extends State<RevenueLineChart> {
  int _touchedIndex = -1;

  static const List<double> _revenueData = [
    42000,
    58000,
    51000,
    67000,
    75000,
    86000,
    79000,
  ];

  static const List<String> _months = [
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
  ];

  @override
  Widget build(BuildContext context) {
    return _ChartCard(
      title: 'Revenue Overview',
      subtitle: 'Last 7 months',
      trailing: _LegendDot(color: AppColors.primary, label: 'Revenue'),
      child: Padding(
        padding: const EdgeInsets.only(
          top: AppConstants.spacingLG,
          right: AppConstants.spacingMD,
        ),
        child: LineChart(
          LineChartData(
            lineTouchData: LineTouchData(
              touchCallback:
                  (FlTouchEvent event, LineTouchResponse? response) {
                setState(() {
                  if (!event.isInterestedForInteractions ||
                      response == null ||
                      response.lineBarSpots == null) {
                    _touchedIndex = -1;
                    return;
                  }
                  _touchedIndex =
                      response.lineBarSpots!.first.spotIndex;
                });
              },
              touchTooltipData: LineTouchTooltipData(
                getTooltipItems: (touchedSpots) => touchedSpots
                    .map(
                      (spot) => LineTooltipItem(
                        '\$${(spot.y / 1000).toStringAsFixed(0)}k',
                        const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                          fontSize: AppConstants.fontSM,
                        ),
                      ),
                    )
                    .toList(),
              ),
            ),
            gridData: FlGridData(
              show: true,
              drawVerticalLine: false,
              horizontalInterval: 20000,
              getDrawingHorizontalLine: (value) => FlLine(
                color: AppColors.border,
                strokeWidth: 1,
              ),
            ),
            titlesData: FlTitlesData(
              leftTitles: AxisTitles(
                sideTitles: SideTitles(
                  showTitles: true,
                  reservedSize: 44,
                  getTitlesWidget: (value, meta) => Text(
                    '\$${(value / 1000).toInt()}k',
                    style: const TextStyle(
                      color: AppColors.textSecondary,
                      fontSize: 10,
                    ),
                  ),
                  interval: 20000,
                ),
              ),
              bottomTitles: AxisTitles(
                sideTitles: SideTitles(
                  showTitles: true,
                  reservedSize: 24,
                  getTitlesWidget: (value, meta) {
                    final index = value.toInt();
                    if (index < 0 || index >= _months.length) {
                      return const SizedBox.shrink();
                    }
                    return Text(
                      _months[index],
                      style: const TextStyle(
                        color: AppColors.textSecondary,
                        fontSize: 11,
                      ),
                    );
                  },
                ),
              ),
              topTitles: const AxisTitles(
                sideTitles: SideTitles(showTitles: false),
              ),
              rightTitles: const AxisTitles(
                sideTitles: SideTitles(showTitles: false),
              ),
            ),
            borderData: FlBorderData(show: false),
            minX: 0,
            maxX: 6,
            minY: 0,
            maxY: 100000,
            lineBarsData: [
              LineChartBarData(
                spots: _revenueData
                    .asMap()
                    .entries
                    .map((e) => FlSpot(e.key.toDouble(), e.value))
                    .toList(),
                isCurved: true,
                color: AppColors.primary,
                barWidth: 3,
                isStrokeCapRound: true,
                dotData: FlDotData(
                  show: true,
                  getDotPainter: (spot, percent, bar, index) =>
                      FlDotCirclePainter(
                    radius: _touchedIndex == index ? 6 : 4,
                    color: Colors.white,
                    strokeWidth: 2.5,
                    strokeColor: AppColors.primary,
                  ),
                ),
                belowBarData: BarAreaData(
                  show: true,
                  gradient: LinearGradient(
                    colors: [
                      AppColors.primary.withOpacity(0.25),
                      AppColors.primary.withOpacity(0.0),
                    ],
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ── User Activity Bar Chart ───────────────────────────────────────────────────

/// Bar chart comparing new vs returning users per week day.
class UserActivityBarChart extends StatelessWidget {
  const UserActivityBarChart({super.key});

  static const List<String> _days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  static const List<double> _newUsers = [320, 480, 410, 590, 720, 350, 280];
  static const List<double> _returning = [250, 310, 390, 420, 510, 290, 200];

  @override
  Widget build(BuildContext context) {
    return _ChartCard(
      title: 'User Activity',
      subtitle: 'This week',
      trailing: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          const _LegendDot(color: AppColors.primary, label: 'New'),
          const SizedBox(width: AppConstants.spacingMD),
          const _LegendDot(color: AppColors.primaryLight, label: 'Returning'),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.only(
          top: AppConstants.spacingLG,
          right: AppConstants.spacingMD,
        ),
        child: BarChart(
          BarChartData(
            barTouchData: BarTouchData(
              touchTooltipData: BarTouchTooltipData(
                getTooltipItem: (group, groupIndex, rod, rodIndex) =>
                    BarTooltipItem(
                  rod.toY.toInt().toString(),
                  const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: AppConstants.fontSM,
                  ),
                ),
              ),
            ),
            titlesData: FlTitlesData(
              bottomTitles: AxisTitles(
                sideTitles: SideTitles(
                  showTitles: true,
                  reservedSize: 24,
                  getTitlesWidget: (value, meta) {
                    final index = value.toInt();
                    if (index < 0 || index >= _days.length) {
                      return const SizedBox.shrink();
                    }
                    return Text(
                      _days[index],
                      style: const TextStyle(
                        color: AppColors.textSecondary,
                        fontSize: 11,
                      ),
                    );
                  },
                ),
              ),
              leftTitles: AxisTitles(
                sideTitles: SideTitles(
                  showTitles: true,
                  reservedSize: 36,
                  interval: 200,
                  getTitlesWidget: (value, meta) => Text(
                    value.toInt().toString(),
                    style: const TextStyle(
                      color: AppColors.textSecondary,
                      fontSize: 10,
                    ),
                  ),
                ),
              ),
              topTitles: const AxisTitles(
                sideTitles: SideTitles(showTitles: false),
              ),
              rightTitles: const AxisTitles(
                sideTitles: SideTitles(showTitles: false),
              ),
            ),
            gridData: FlGridData(
              show: true,
              drawVerticalLine: false,
              horizontalInterval: 200,
              getDrawingHorizontalLine: (value) => FlLine(
                color: AppColors.border,
                strokeWidth: 1,
              ),
            ),
            borderData: FlBorderData(show: false),
            barGroups: List.generate(_days.length, (index) {
              return BarChartGroupData(
                x: index,
                barRods: [
                  BarChartRodData(
                    toY: _newUsers[index],
                    color: AppColors.primary,
                    width: 8,
                    borderRadius: const BorderRadius.vertical(
                      top: Radius.circular(4),
                    ),
                  ),
                  BarChartRodData(
                    toY: _returning[index],
                    color: AppColors.primaryLight,
                    width: 8,
                    borderRadius: const BorderRadius.vertical(
                      top: Radius.circular(4),
                    ),
                  ),
                ],
              );
            }),
          ),
        ),
      ),
    );
  }
}

// ── Traffic Donut Chart ───────────────────────────────────────────────────────

/// Donut chart showing traffic source breakdown.
class TrafficDonutChart extends StatefulWidget {
  const TrafficDonutChart({super.key});

  @override
  State<TrafficDonutChart> createState() => _TrafficDonutChartState();
}

class _TrafficDonutChartState extends State<TrafficDonutChart> {
  int _touchedIndex = -1;

  static const List<_TrafficSlice> _slices = [
    _TrafficSlice('Organic', 38, AppColors.primary),
    _TrafficSlice('Direct', 25, AppColors.primaryLight),
    _TrafficSlice('Referral', 20, Color(0xFF42B883)),
    _TrafficSlice('Social', 17, Color(0xFFFFC107)),
  ];

  @override
  Widget build(BuildContext context) {
    return _ChartCard(
      title: 'Traffic Sources',
      subtitle: 'This month',
      child: Row(
        children: [
          Expanded(
            flex: 5,
            child: PieChart(
              PieChartData(
                pieTouchData: PieTouchData(
                  touchCallback: (FlTouchEvent event, response) {
                    setState(() {
                      if (!event.isInterestedForInteractions ||
                          response == null ||
                          response.touchedSection == null) {
                        _touchedIndex = -1;
                        return;
                      }
                      _touchedIndex =
                          response.touchedSection!.touchedSectionIndex;
                    });
                  },
                ),
                sectionsSpace: 3,
                centerSpaceRadius: 52,
                sections: _slices.asMap().entries.map((entry) {
                  final isTouched = entry.key == _touchedIndex;
                  return PieChartSectionData(
                    value: entry.value.percent,
                    color: entry.value.color,
                    radius: isTouched ? 58 : 52,
                    title: '${entry.value.percent.toInt()}%',
                    titleStyle: TextStyle(
                      color: Colors.white,
                      fontSize: isTouched ? 13 : 11,
                      fontWeight: FontWeight.bold,
                    ),
                  );
                }).toList(),
              ),
            ),
          ),
          Expanded(
            flex: 4,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: _slices
                  .map((s) => Padding(
                        padding: const EdgeInsets.symmetric(
                          vertical: AppConstants.spacingXS,
                        ),
                        child: Row(
                          children: [
                            Container(
                              width: 10,
                              height: 10,
                              decoration: BoxDecoration(
                                color: s.color,
                                shape: BoxShape.circle,
                              ),
                            ),
                            const SizedBox(width: AppConstants.spacingSM),
                            Expanded(
                              child: Text(
                                s.label,
                                style: const TextStyle(
                                  color: AppColors.textSecondary,
                                  fontSize: AppConstants.fontSM,
                                ),
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                            Text(
                              '${s.percent.toInt()}%',
                              style: const TextStyle(
                                color: AppColors.textPrimary,
                                fontSize: AppConstants.fontSM,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ],
                        ),
                      ))
                  .toList(),
            ),
          ),
        ],
      ),
    );
  }
}

class _TrafficSlice {
  final String label;
  final double percent;
  final Color color;

  const _TrafficSlice(this.label, this.percent, this.color);
}

// ── Shared chart card wrapper ─────────────────────────────────────────────────

class _ChartCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final Widget? trailing;
  final Widget child;

  const _ChartCard({
    required this.title,
    required this.subtitle,
    this.trailing,
    required this.child,
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
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: const TextStyle(
                      color: AppColors.textPrimary,
                      fontSize: AppConstants.fontLG,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    subtitle,
                    style: const TextStyle(
                      color: AppColors.textSecondary,
                      fontSize: AppConstants.fontSM,
                    ),
                  ),
                ],
              ),
              if (trailing != null) trailing!,
            ],
          ),
          const SizedBox(height: AppConstants.spacingMD),
          Expanded(child: child),
        ],
      ),
    );
  }
}

class _LegendDot extends StatelessWidget {
  final Color color;
  final String label;

  const _LegendDot({required this.color, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 8,
          height: 8,
          decoration: BoxDecoration(color: color, shape: BoxShape.circle),
        ),
        const SizedBox(width: AppConstants.spacingXS),
        Text(
          label,
          style: const TextStyle(
            color: AppColors.textSecondary,
            fontSize: AppConstants.fontXS,
          ),
        ),
      ],
    );
  }
}
