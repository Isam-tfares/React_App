import { useCallback } from 'react';
import { useUser } from './auth';

// Define all roles
export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  DIRECTEUR: 'DIRECTEUR',
  RESPONSABLE_LABO: 'RESPONSABLE_LABO',
  TECHNICIEN_LABO: 'TECHNICIEN_LABO',
  COMMERCIAL: 'COMMERCIAL',
  COMPTABLE: 'COMPTABLE',
  RH: 'RH',
  LOGISTICIEN: 'LOGISTICIEN',
  EMPLOYEE: 'EMPLOYEE',
  VIEWER: 'VIEWER',
};

// Define permissions for each module
export const PERMISSIONS = {
  // Dashboard
  'dashboard:view': Object.values(ROLES), // Everyone

  // Appels d'Offres (Tenders)
  'tenders:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'tenders:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'tenders:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'tenders:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR],

  // Marchés (Contracts)
  'contracts:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'contracts:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR],
  'contracts:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR],
  'contracts:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Devis (Quotes)
  'quotes:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL, ROLES.RESPONSABLE_LABO],
  'quotes:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'quotes:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL],
  'quotes:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR],

  // Projets (Projects)
  'projects:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO, ROLES.COMMERCIAL],
  'projects:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO],
  'projects:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO],
  'projects:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR],

  // Réceptions (Lab Testing/Reception)
  'receptions:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'receptions:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'receptions:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'receptions:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RESPONSABLE_LABO],

  // Rapports (Reports)
  'reports:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'reports:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RESPONSABLE_LABO, ROLES.TECHNICIEN_LABO],
  'reports:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RESPONSABLE_LABO],
  'reports:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Facturation (Invoicing)
  'invoicing:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMPTABLE],
  'invoicing:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMPTABLE],
  'invoicing:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMPTABLE],
  'invoicing:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Règlements Clients (Client Payments)
  'clientPayments:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMPTABLE],
  'clientPayments:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMPTABLE],
  'clientPayments:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMPTABLE],
  'clientPayments:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Bordereaux (Delivery Notes)
  'deliveryNotes:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RESPONSABLE_LABO, ROLES.COMPTABLE],
  'deliveryNotes:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RESPONSABLE_LABO],
  'deliveryNotes:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RESPONSABLE_LABO],

  // Achats (Purchases)
  'purchases:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMPTABLE],
  'purchases:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMPTABLE],
  'purchases:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMPTABLE],
  'purchases:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Personnel (HR)
  'personnel:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.RH],
  'personnel:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RH],
  'personnel:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.RH],
  'personnel:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Trésorerie (Treasury)
  'treasury:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMPTABLE],
  'treasury:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMPTABLE],
  'treasury:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMPTABLE],

  // Logistique (Logistics)
  'logistics:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.LOGISTICIEN],
  'logistics:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.LOGISTICIEN],
  'logistics:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.LOGISTICIEN],
  'logistics:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Clients
  'clients:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR, ROLES.COMMERCIAL, ROLES.COMPTABLE],
  'clients:create': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMMERCIAL],
  'clients:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COMMERCIAL],
  'clients:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Messagerie (Messaging)
  'messaging:view': Object.values(ROLES), // Everyone can view messages
  'messaging:send': Object.values(ROLES).filter(r => r !== ROLES.VIEWER),

  // G.E.D (Document Management)
  'documents:view': Object.values(ROLES),
  'documents:upload': Object.values(ROLES).filter(r => r !== ROLES.VIEWER),
  'documents:delete': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR],

  // Paramétrage (Settings)
  'settings:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.DIRECTEUR],
  'settings:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN],

  // Droits (Rights)
  'rights:view': [ROLES.SUPER_ADMIN, ROLES.ADMIN],
  'rights:edit': [ROLES.SUPER_ADMIN, ROLES.ADMIN],
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

// Authorization component
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