import { UserRole } from './permissionTypes.js';

export const ROLE_PERMISSIONS = {
  [UserRole.ADMIN]: [
    // Dashboard & HR (existing)
    'dashboard:view',
    'hr:view',
    'hr:create',
    'hr:edit',
    'hr:delete',
    
    // All new modules - Admin has full access
    'appels_offres:view',
    'appels_offres:create',
    'appels_offres:edit',
    'appels_offres:delete',
    
    'marches:view',
    'marches:create',
    'marches:edit',
    'marches:delete',
    
    'devis:view',
    'devis:create',
    'devis:edit',
    'devis:delete',
    
    'projets:view',
    'projets:create',
    'projets:edit',
    'projets:delete',
    
    'receptions:view',
    'receptions:create',
    'receptions:edit',
    'receptions:delete',
    
    'rapports:view',
    'rapports:create',
    'rapports:edit',
    'rapports:delete',
    
    'facturation:view',
    'facturation:create',
    'facturation:edit',
    'facturation:delete',
    
    'reglements_clients:view',
    'reglements_clients:create',
    'reglements_clients:edit',
    'reglements_clients:delete',
    
    'bordereaux:view',
    'bordereaux:create',
    'bordereaux:edit',
    'bordereaux:delete',
    
    'achats:view',
    'achats:create',
    'achats:edit',
    'achats:delete',
    
    'personnel:view',
    'personnel:create',
    'personnel:edit',
    'personnel:delete',
    
    'tresorerie:view',
    'tresorerie:create',
    'tresorerie:edit',
    'tresorerie:delete',
    
    'logistique:view',
    'logistique:create',
    'logistique:edit',
    'logistique:delete',
    
    'clients:view',
    'clients:create',
    'clients:edit',
    'clients:delete',
    
    'messagerie:view',
    'messagerie:create',
    'messagerie:edit',
    'messagerie:delete',
    
    'ged:view',
    'ged:create',
    'ged:edit',
    'ged:delete',
    
    'parametrage:view',
    'parametrage:create',
    'parametrage:edit',
    'parametrage:delete',
    
    'droits:view',
    'droits:create',
    'droits:edit',
    'droits:delete',
  ],

  [UserRole.HR_MANAGER]: [
    'dashboard:view',
    'hr:view',
    'hr:create',
    'hr:edit',
    
    // HR Manager can also access some modules
    'personnel:view',
    'personnel:create',
    'personnel:edit',
    
    'clients:view',
    'messagerie:view',
    'messagerie:create',
  ],

  [UserRole.EMPLOYEE]: [
    'dashboard:view',
    
    // Basic employee access
    'messagerie:view',
    'ged:view',
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
