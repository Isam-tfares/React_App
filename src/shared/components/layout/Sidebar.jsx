import { Link, useLocation } from 'react-router-dom';
import { usePermissions } from '@/shared/hooks/usePermissions';
import { LayoutDashboard, Users } from 'lucide-react';
import { Module } from '@/core/permissions/permissionTypes';

/**
 * Sidebar Navigation Component
 */
export const Sidebar = () => {
  const location = useLocation();
  const { canAccessModule } = usePermissions();

  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      module: Module.DASHBOARD,
    },
    {
      label: 'HR Management',
      icon: Users,
      path: '/hr',
      module: Module.HR,
    },
  ];

  const accessibleItems = menuItems.filter(item => canAccessModule(item.module));

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">Company Portal</h1>
      </div>
      
      <nav className="flex-1 px-3">
        {accessibleItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-3 py-3 rounded-lg mb-1
                transition-colors
                ${isActive 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800 text-sm text-gray-400">
        <p>v1.0.0</p>
      </div>
    </aside>
  );
};
