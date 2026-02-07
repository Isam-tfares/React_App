// User Roles
export const UserRole = {
  ADMIN: 'admin',
  HR_MANAGER: 'hr_manager',
  EMPLOYEE: 'employee',
};

// Modules
export const Module = {
  DASHBOARD: 'dashboard',
  HR: 'hr',
};

// Actions
export const Action = {
  VIEW: 'view',
  CREATE: 'create',
  EDIT: 'edit',
  DELETE: 'delete',
};

// Helper to create permission string
export const createPermission = (module, action) => `${module}:${action}`;
