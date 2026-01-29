import { NavLink } from 'react-router-dom';
import { useAuthorization } from '../../../lib/authorization';
import { paths } from '../../../config/paths';
import './sidebar.css';

const navItems = [
  {
    name: 'Dashboard',
    path: paths.app.dashboard.path,
    icon: '📊',
    permission: 'dashboard:view',
  },
  {
    name: 'Stocks',
    path: paths.app.stocks.path,
    icon: '📦',
    permission: 'stocks:view',
  },
  {
    name: 'Finance',
    path: paths.app.finance.path,
    icon: '💰',
    permission: 'finance:view',
  },
  {
    name: 'HR',
    path: paths.app.hr.path,
    icon: '👥',
    permission: 'hr:view',
  },
  {
    name: 'Users',
    path: paths.app.users.path,
    icon: '⚙️',
    permission: 'users:view',
  },
];

export const Sidebar = ({ isOpen, onToggle, user, onLogout }) => {
  const { checkPermission } = useAuthorization();

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-logo">{isOpen ? 'EMS' : 'E'}</h2>
        <button className="sidebar-toggle" onClick={onToggle}>
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          if (!checkPermission(item.permission)) return null;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              {isOpen && <span className="nav-text">{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        {isOpen && user && (
          <div className="user-info">
            <span className="user-name">
              {user.firstName} {user.lastName}
            </span>
            <span className="user-role">{user.role}</span>
          </div>
        )}
        <button className="logout-btn" onClick={onLogout}>
          {isOpen ? 'Logout' : '🚪'}
        </button>
      </div>
    </aside>
  );
};