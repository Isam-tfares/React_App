import { usePermissions } from '@/shared/hooks/usePermissions';

/**
 * Component that conditionally renders children based on permissions
 * @param {Object} props
 * @param {string|string[]} props.permission - Required permission(s)
 * @param {string|string[]} props.role - Required role(s)
 * @param {boolean} props.requireAll - If true, requires all permissions (AND), otherwise any (OR)
 * @param {React.ReactNode} props.fallback - What to show if permission denied
 * @param {React.ReactNode} props.children - Content to show if permission granted
 */
export const PermissionGate = ({
  permission,
  role,
  requireAll = false,
  fallback = null,
  children,
}) => {
  const { hasPermission, hasAllPermissions, hasRole } = usePermissions();

  let hasAccess = false;

  if (role) {
    hasAccess = hasRole(role);
  } else if (permission) {
    if (requireAll && Array.isArray(permission)) {
      hasAccess = hasAllPermissions(permission);
    } else {
      hasAccess = hasPermission(permission);
    }
  }

  return hasAccess ? <>{children}</> : <>{fallback}</>;
};
