import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { api } from './api-client';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (credentials) => {
    try {
      // Call real API
      const response = await api.post('/auth/login', {
        username: credentials.username,
        password: credentials.password,
      });

      // Extract data from response
      const { access_token, user_info } = response;

      // Store token and user info
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user_info));
      
      console.log('Login successful:', user_info);
      // Update state
      setUser(user_info);
      
      return user_info;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  }, []);

  const register = useCallback(async (data) => {
    try {
      // Call real register API (if you have one)
      const response = await api.post('/auth/register', {
        username: data.username,
        email: data.email,
        password: data.password,
        full_name: `${data.firstName} ${data.lastName}`,
      });

      const { access_token, user_info } = response;

      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user_info));
      setUser(user_info);
      
      return user_info;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      // Optional: Call logout API if you have one
      // await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
    }
  }, []);

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useUser = () => {
  const { user, isLoading } = useAuth();
  return { data: user, isLoading };
};