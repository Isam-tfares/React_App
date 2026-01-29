import { useCallback } from 'react';
import { useUser } from './auth';

// Define all roles
export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  SUPERVISOR_STOCKS: 'SUPERVISOR_STOCKS',
  SUPERVISOR_FINANCE: 'SUPERVISOR_FINANCE',
  SUPERVISOR_HR: 'SUPERVISOR_HR',
  TECHNICIAN: 'TECHNICIAN',
  EMPLOYEE: 'EMPLOYEE',
  VIEWER: 'VIEWER',
};

// Define permissions for each module
export const PERMISSIONS = {
  // Stocks module
  'stocks:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_STOCKS, ROLES.TECHNICIAN],
  'stocks:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_STOCKS],
  'stocks:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_STOCKS],
  'stocks:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Finance module
  'finance:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_FINANCE],
  'finance:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_FINANCE],
  'finance:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_FINANCE],
  'finance:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // HR module
  'hr:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_HR],
  'hr:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_HR],
  'hr:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.SUPERVISOR_HR],
  'hr:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Users management
  'users:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN],
  'users:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN],
  'users:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN],
  'users:delete': [ROLES.SUPER_ADMIN],

  // Dashboard
  'dashboard:view': Object.values(ROLES), // Everyone can view dashboard
};

// Hook to check authorization
export const useAuthorization = () => {
  const { data: user } = useUser();

  const checkAccess = useCallback(
    ({ allowedRoles }) => {
      if (!user) return false;
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles.includes(user.role);
      }
      return true;
    },
    [user]
  );

  const checkPermission = useCallback(
    (permission) => {
      if (!user) return false;
      const allowedRoles = PERMISSIONS[permission];
      if (!allowedRoles) return false;
      return allowedRoles.includes(user.role);
    },
    [user]
  );

  return { 
    checkAccess, 
    checkPermission, 
    role: user?.role,
    user 
  };
};

// Authorization component for declarative permission checks
export const Authorization = ({
  permission,
  allowedRoles,
  forbiddenFallback = null,
  children,
}) => {
  const { checkAccess, checkPermission } = useAuthorization();

  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles });
  }

  if (permission) {
    canAccess = checkPermission(permission);
  }

  return canAccess ? children : forbiddenFallback;
};

// HOC for protecting routes
export const withAuthorization = (Component, { permission, allowedRoles, fallback }) => {
  return function ProtectedComponent(props) {
    return (
      <Authorization
        permission={permission}
        allowedRoles={allowedRoles}
        forbiddenFallback={fallback || <div>Access Denied</div>}
      >
        <Component {...props} />
      </Authorization>
    );
  };
};