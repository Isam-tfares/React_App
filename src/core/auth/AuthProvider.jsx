import { createContext, useState, useEffect } from 'react';
import { authService } from './authService.js';

export const AuthContext = createContext({
  user: null,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
});

/**
 * Authentication Provider Component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const currentUser = await authService.getCurrentUser(token);
          setUser(currentUser);
        } catch (error) {
          localStorage.removeItem('authToken');
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    const { user, token } = await authService.login({ email, password });
    localStorage.setItem('authToken', token);
    setUser(user);
  };

  const logout = async () => {
    await authService.logout();
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
