import { usePermissions } from '@/shared/hooks/usePermissions';
import { LayoutDashboard, Users, TrendingUp, Clock } from 'lucide-react';

/**
 * Dashboard Overview Page
 */
export const DashboardOverviewPage = () => {
  const { user, canAccessModule } = usePermissions();

  const stats = [
    {
      label: 'Total Employees',
      value: '248',
      icon: Users,
      color: 'bg-blue-500',
      visible: canAccessModule('hr'),
    },
    {
      label: 'Active Projects',
      value: '12',
      icon: LayoutDashboard,
      color: 'bg-green-500',
      visible: true,
    },
    {
      label: 'Tasks This Week',
      value: '34',
      icon: Clock,
      color: 'bg-yellow-500',
      visible: true,
    },
    {
      label: 'Performance',
      value: '94%',
      icon: TrendingUp,
      color: 'bg-purple-500',
      visible: true,
    },
  ];

  const visibleStats = stats.filter(stat => stat.visible);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to your company portal, {user?.name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {visibleStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <ActivityItem
              title="New employee onboarded"
              description="Sarah Williams joined the Marketing team"
              time="2 hours ago"
            />
            <ActivityItem
              title="Project milestone completed"
              description="Q1 Report finalized and submitted"
              time="5 hours ago"
            />
            <ActivityItem
              title="Team meeting scheduled"
              description="Weekly sync on Friday at 2 PM"
              time="1 day ago"
            />
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {canAccessModule('hr') && (
              <QuickActionButton
                label="Add New Employee"
                href="/hr/employees/new"
              />
            )}
            <QuickActionButton
              label="View Reports"
              href="/reports"
            />
            <QuickActionButton
              label="Settings"
              href="/settings"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityItem = ({ title, description, time }) => (
  <div className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0">
    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
    <div className="flex-1">
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

const QuickActionButton = ({ label, href }) => (
  <a
    href={href}
    className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-900 font-medium"
  >
    {label}
  </a>
);
