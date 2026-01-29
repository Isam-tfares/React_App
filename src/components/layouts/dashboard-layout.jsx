import { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { paths } from '../../config/paths';
import { Spinner } from '../ui/spinner';
import { Sidebar } from './sidebar/sidebar';
import './layouts.css';

export const DashboardLayout = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="loading-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={paths.auth.login.getHref(location.pathname)}
        replace
      />
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        user={user}
        onLogout={logout}
      />
      <main className={`dashboard-main ${sidebarOpen ? '' : 'sidebar-closed'}`}>
        <Outlet />
      </main>
    </div>
  );
};