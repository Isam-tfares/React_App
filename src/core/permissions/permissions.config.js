import { UserRole } from './permissionTypes.js';

export const ROLE_PERMISSIONS = {
  [UserRole.ADMIN]: [
    // Full access to everything
    'dashboard:view',
    'hr:view',
    'hr:create',
    'hr:edit',
    'hr:delete',
  ],

  [UserRole.HR_MANAGER]: [
    'dashboard:view',
    'hr:view',
    'hr:create',
    'hr:edit',
  ],

  [UserRole.EMPLOYEE]: [
    'dashboard:view',
  ],
};

/**
 * Get all permissions for a user
 * @param {Object} user - User object with roles array
 * @returns {string[]} Array of permission strings
 */
export const getUserPermissions = (user) => {
  if (!user || !user.roles) return [];
  
  const rolePermissions = user.roles.flatMap(role => ROLE_PERMISSIONS[role] || []);
  
  // Combine and deduplicate
  return [...new Set([...rolePermissions])];
};
