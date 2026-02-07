import { useContext } from 'react';
import { AuthContext } from '@/core/auth/AuthProvider';
import { getUserPermissions } from '@/core/permissions/permissions.config.js';

/**
 * Hook to access user permissions
 * @returns {Object} Permission utilities
 */
export const usePermissions = () => {
  const { user } = useContext(AuthContext);

  const userPermissions = user ? getUserPermissions(user) : [];

  /**
   * Check if user has a permission
   * @param {string|string[]} permission - Permission(s) to check
   * @returns {boolean}
   */
  const hasPermission = (permission) => {
    if (!user) return false;

    if (Array.isArray(permission)) {
      return permission.some(p => userPermissions.includes(p));
    }

    return userPermissions.includes(permission);
  };

  /**
   * Check if user has all permissions
   * @param {string[]} permissions - Permissions to check
   * @returns {boolean}
   */
  const hasAllPermissions = (permissions) => {
    if (!user) return false;
    return permissions.every(p => userPermissions.includes(p));
  };

  /**
   * Check if user has a role
   * @param {string|string[]} role - Role(s) to check
   * @returns {boolean}
   */
  const hasRole = (role) => {
    if (!user) return false;

    if (Array.isArray(role)) {
      return role.some(r => user.roles.includes(r));
    }

    return user.roles.includes(role);
  };

  /**
   * Check if user can access a module
   * @param {string} module - Module name
   * @returns {boolean}
   */
  const canAccessModule = (module) => {
    return userPermissions.some(p => p.startsWith(`${module}:`));
  };

  return {
    hasPermission,
    hasAllPermissions,
    hasRole,
    canAccessModule,
    permissions: userPermissions,
    user,
  };
};
