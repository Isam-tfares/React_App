import { useCallback } from 'react';
import { useUser } from './auth';

// Define all roles (matching your API)
export const ROLES = {
  ADMIN: 'admin',
  DIRECTEUR: 'directeur',
  RESPONSABLE_LABO: 'responsable_labo',
  TECHNICIEN_LABO: 'technicien_labo',
  COMMERCIAL: 'commercial',
  COMPTABLE: 'comptable',
  RH: 'rh',
  LOGISTICIEN: 'logisticien',
  EMPLOYEE: 'employee',
  VIEWER: 'viewer',
};

// Define permissions for each module
export const PERMISSIONS = {
  // Dashboard
  'dashboard:view': Object.values(ROLES), // Everyone

  // Appels d'Offres (Tenders)
  'tenders:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'tenders:create': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'tenders:edit': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'tenders:delete': [ROLES.ADMIN, ROLES.DIRECTEUR],

  // Contracts
  'contracts:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'contracts:create': [ROLES.ADMIN, ROLES.DIRECTEUR],
  'contracts:edit': [ROLES.ADMIN, ROLES.DIRECTEUR],
  'contracts:delete': [ROLES.ADMIN],

  // Quotes
  'quotes:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL, ROLES.RESPONSABLE_LABO],
  'quotes:create': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'quotes:edit': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'quotes:delete': [ROLES.ADMIN, ROLES.DIRECTEUR],

  // Projects
  'projects:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO, ROLES.COMMERCIAL],
  'projects:create': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO],
  'projects:edit': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO],
  'projects:delete': [ROLES.ADMIN, ROLES.DIRECTEUR],

  // Receptions
  'receptions:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'receptions:create': [ROLES.ADMIN, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'receptions:edit': [ROLES.ADMIN, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'receptions:delete': [ROLES.ADMIN, ROLES.RESPONSABLE_LABO],

  // Reports
  'reports:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'reports:create': [ROLES.ADMIN, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'reports:edit': [ROLES.ADMIN, ROLES.RESPONSABLE_LABO],
  'reports:delete': [ROLES.ADMIN],

  // Invoicing
  'invoicing:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMPTABLE],
  'invoicing:create': [ROLES.ADMIN, ROLES.COMPTABLE],
  'invoicing:edit': [ROLES.ADMIN, ROLES.COMPTABLE],
  'invoicing:delete': [ROLES.ADMIN],

  // Client Payments
  'clientPayments:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMPTABLE],
  'clientPayments:create': [ROLES.ADMIN, ROLES.COMPTABLE],
  'clientPayments:edit': [ROLES.ADMIN, ROLES.COMPTABLE],
  'clientPayments:delete': [ROLES.ADMIN],

  // Delivery Notes
  'deliveryNotes:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO, ROLES.COMPTABLE],
  'deliveryNotes:create': [ROLES.ADMIN, ROLES.RESPONSABLE_LABO],
  'deliveryNotes:edit': [ROLES.ADMIN, ROLES.RESPONSABLE_LABO],

  // Purchases
  'purchases:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMPTABLE],
  'purchases:create': [ROLES.ADMIN, ROLES.COMPTABLE],
  'purchases:edit': [ROLES.ADMIN, ROLES.COMPTABLE],
  'purchases:delete': [ROLES.ADMIN],

  // Personnel
  'personnel:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RH],
  'personnel:create': [ROLES.ADMIN, ROLES.RH],
  'personnel:edit': [ROLES.ADMIN, ROLES.RH],
  'personnel:delete': [ROLES.ADMIN],

  // Treasury
  'treasury:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMPTABLE],
  'treasury:create': [ROLES.ADMIN, ROLES.COMPTABLE],
  'treasury:edit': [ROLES.ADMIN, ROLES.COMPTABLE],

  // Logistics
  'logistics:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.LOGISTICIEN],
  'logistics:create': [ROLES.ADMIN, ROLES.LOGISTICIEN],
  'logistics:edit': [ROLES.ADMIN, ROLES.LOGISTICIEN],
  'logistics:delete': [ROLES.ADMIN],

  // Clients
  'clients:view': [ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL, ROLES.COMPTABLE],
  'clients:create': [ROLES.ADMIN, ROLES.COMMERCIAL],
  'clients:edit': [ROLES.ADMIN, ROLES.COMMERCIAL],
  'clients:delete': [ROLES.ADMIN],

  // Messaging
  'messaging:view': Object.values(ROLES),
  'messaging:send': Object.values(ROLES).filter(r => r !== ROLES.VIEWER),

  // Documents
  'documents:view': Object.values(ROLES),
  'documents:upload': Object.values(ROLES).filter(r => r !== ROLES.VIEWER),
  'documents:delete': [ROLES.ADMIN, ROLES.DIRECTEUR],

  // Settings
  'settings:view': [ROLES.ADMIN, ROLES.DIRECTEUR],
  'settings:edit': [ROLES.ADMIN],

  // Rights
  'rights:view': [ROLES.ADMIN],
  'rights:edit': [ROLES.ADMIN],
};

export const useAuthorization = () => {
  const { data: user } = useUser();

  const checkAccess = useCallback(
    ({ allowedRoles }) => {
      if (!user) return false;
      // Get role from user_info (role_name from API)
      const userRole = user.role_name;
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles.includes(userRole);
      }
      return true;
    },
    [user]
  );

  const checkPermission = useCallback(
    (permission) => {
      if (!user) return false;
      const userRole = user.role_name;
      const allowedRoles = PERMISSIONS[permission];
      if (!allowedRoles) return false;
      return allowedRoles.includes(userRole);
    },
    [user]
  );

  return { 
    checkAccess, 
    checkPermission, 
    role: user?.role_name,
    user 
  };
};

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