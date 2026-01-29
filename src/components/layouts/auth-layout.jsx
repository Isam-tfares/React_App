import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { paths } from '../../config/paths';
import { Spinner } from '../ui/spinner';
import './layouts.css';

export const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={paths.app.dashboard.path} replace />;
  }

  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-logo">
          <h1>Enterprise System</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};