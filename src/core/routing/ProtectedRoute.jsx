import { Navigate, Outlet } from 'react-router-dom';
import { usePermissions } from '@/shared/hooks/usePermissions';

/**
 * Protected Route Component
 * Redirects to login if not authenticated, or to unauthorized if lacking permissions
 * @param {Object} props
 * @param {string|string[]} props.permission - Required permission(s)
 * @param {string|string[]} props.role - Required role(s)
 * @param {boolean} props.requireAll - If true, requires all permissions
 * @param {string} props.redirectTo - Where to redirect if unauthorized
 */
export const ProtectedRoute = ({
  permission,
  role,
  requireAll = false,
  redirectTo = '/unauthorized',
}) => {
  const { hasPermission, hasAllPermissions, hasRole, user } = usePermissions();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  let hasAccess = true;

  if (role) {
    hasAccess = hasRole(role);
  } else if (permission) {
    if (requireAll && Array.isArray(permission)) {
      hasAccess = hasAllPermissions(permission);
    } else {
      hasAccess = hasPermission(permission);
    }
  }

  return hasAccess ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
