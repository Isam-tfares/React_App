import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePermissions } from '@/shared/hooks/usePermissions';
import { ChevronDown, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { menuConfig, defaultMenuItems } from '@/config/menuConfig';

/**
 * Sidebar Navigation Component with Dropdown Menus
 */
export const Sidebar = () => {
  const location = useLocation();
  const { canAccessModule } = usePermissions();
  const [openMenus, setOpenMenus] = useState({});

  // Combine default items with menu config
  const allMenuItems = [...defaultMenuItems, ...menuConfig];

  // Filter accessible menu items
  const accessibleItems = allMenuItems.filter(item => {
    // Extract module name from permission (e.g., "appels_offres:view" -> "appels_offres")
    const moduleName = item.permission?.split(':')[0];
    return canAccessModule(moduleName || item.category.toLowerCase());
  });

  const toggleMenu = (category) => {
    setOpenMenus(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const isPathActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent || Icons.FileText;
  };

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col overflow-y-auto">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">LGC Portal</h1>
        <p className="text-xs text-gray-400 mt-1">Gestion Entreprise</p>
      </div>
      
      <nav className="flex-1 px-3 py-4">
        {accessibleItems.map(item => {
          const Icon = getIcon(item.icon);
          const isActive = isPathActive(item.path);
          const isOpen = openMenus[item.category];
          const hasSubMenus = item.subMenus && item.subMenus.length > 0;

          return (
            <div key={item.category} className="mb-1">
              {/* Main Menu Item */}
              {hasSubMenus ? (
                <button
                  onClick={() => toggleMenu(item.category)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                    transition-colors text-left
                    ${isActive 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span className="font-medium text-sm">{item.category}</span>
                  </div>
                  {isOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg
                    transition-colors
                    ${isActive 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="font-medium text-sm">{item.category}</span>
                </Link>
              )}

              {/* Sub Menus */}
              {hasSubMenus && isOpen && (
                <div className="mt-1 ml-6 space-y-0.5">
                  {item.subMenus.map((subMenu, index) => {
                    const isSubActive = location.pathname === subMenu.path;
                    return (
                      <Link
                        key={index}
                        to={subMenu.path}
                        className={`
                          block px-3 py-2 rounded-md text-sm
                          transition-colors
                          ${isSubActive
                            ? 'bg-primary-500 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                          }
                        `}
                      >
                        {subMenu.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800 text-sm text-gray-400">
        <p>v1.0.0</p>
      </div>
    </aside>
  );
};
