import { useCallback } from 'react';
import { useUser } from './auth';
import { TACHE_ROUTE_MAP } from '../config/taches-routes-map';

/**
 * Build a Set of allowed nom_tache from user's taches array
 */
const getUserTacheNames = (user) => {
  if (!user?.taches || !Array.isArray(user.taches)) return new Set();
  return new Set(user.taches.map(t => t.nom_tache));
};

/**
 * Build a Set of allowed modules from user's taches
 */
const getUserModules = (user) => {
  if (!user?.taches || !Array.isArray(user.taches)) return new Set();
  return new Set(user.taches.map(t => t.module));
};

/**
 * Build a Set of allowed paths from user's taches
 */
const getUserAllowedPaths = (user) => {
  const tacheNames = getUserTacheNames(user);
  const allowedPaths = new Set();
  
  for (const nomTache of tacheNames) {
    const mapping = TACHE_ROUTE_MAP[nomTache];
    if (mapping?.path) {
      allowedPaths.add(mapping.path);
    }
  }
  
  return allowedPaths;
};

export const useAuthorization = () => {
  const { data: user } = useUser();

  /**
   * Check if user has a specific tache by nom_tache
   */
  const hasTache = useCallback(
    (nomTache) => {
      if (!user?.taches) return false;
      return user.taches.some(t => t.nom_tache === nomTache);
    },
    [user]
  );

  /**
   * Check if user has ANY tache in a given module
   * (used for showing/hiding parent menu sections)
   */
  const hasModuleAccess = useCallback(
    (moduleName) => {
      if (!user?.taches) return false;
      return user.taches.some(t => t.module === moduleName);
    },
    [user]
  );

  /**
   * Check if user can access a specific route path
   */
  const canAccessPath = useCallback(
    (path) => {
      if (!user?.taches) return false;
      const allowedPaths = getUserAllowedPaths(user);
      return allowedPaths.has(path);
    },
    [user]
  );

  /**
   * Get all route paths the user is allowed to access
   */
  const getAllowedPaths = useCallback(() => {
    return getUserAllowedPaths(user);
  }, [user]);

  /**
   * Get all module names the user has access to
   */
  const getAllowedModules = useCallback(() => {
    return getUserModules(user);
  }, [user]);

  return {
    hasTache,
    hasModuleAccess,
    canAccessPath,
    getAllowedPaths,
    getAllowedModules,
    user,
  };
};

/**
 * Component that conditionally renders children based on tache access
 */
export const Authorization = ({
  tache,          // Check specific nom_tache
  module,         // Check any tache in module  
  path,           // Check specific route path
  forbiddenFallback = null,
  children,
}) => {
  const { hasTache, hasModuleAccess, canAccessPath } = useAuthorization();

  let canAccess = false;

  if (tache) {
    canAccess = hasTache(tache);
  } else if (module) {
    canAccess = hasModuleAccess(module);
  } else if (path) {
    canAccess = canAccessPath(path);
  }

  return canAccess ? children : forbiddenFallback;
};