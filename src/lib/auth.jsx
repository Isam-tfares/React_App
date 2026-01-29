import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

// Mock users database
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@company.com',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'User',
    role: 'SUPER_ADMIN',
    departmentId: '1',
  },
  {
    id: '2',
    email: 'stocks@company.com',
    password: 'stocks123',
    firstName: 'Stock',
    lastName: 'Manager',
    role: 'SUPERVISOR_STOCKS',
    departmentId: '2',
  },
  {
    id: '3',
    email: 'finance@company.com',
    password: 'finance123',
    firstName: 'Finance',
    lastName: 'Manager',
    role: 'SUPERVISOR_FINANCE',
    departmentId: '3',
  },
  {
    id: '4',
    email: 'hr@company.com',
    password: 'hr123',
    firstName: 'HR',
    lastName: 'Manager',
    role: 'SUPERVISOR_HR',
    departmentId: '4',
  },
  {
    id: '5',
    email: 'tech@company.com',
    password: 'tech123',
    firstName: 'John',
    lastName: 'Technician',
    role: 'TECHNICIAN',
    departmentId: '2',
  },
  {
    id: '6',
    email: 'employee@company.com',
    password: 'employee123',
    firstName: 'Jane',
    lastName: 'Employee',
    role: 'EMPLOYEE',
    departmentId: '1',
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (credentials) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const { email, password } = credentials;
    
    // Find user in mock database
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    // Remove password from user object before storing
    const { password: _, ...userWithoutPassword } = foundUser;
    
    localStorage.setItem('token', 'mock-jwt-token-' + foundUser.id);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    setUser(userWithoutPassword);
    
    return userWithoutPassword;
  }, []);

  const register = useCallback(async (data) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if email already exists
    const existingUser = MOCK_USERS.find((u) => u.email === data.email);
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Create new user (in real app, this would be saved to backend)
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: 'EMPLOYEE', // Default role for new registrations
      departmentId: '1',
    };

    localStorage.setItem('token', 'mock-jwt-token-' + newUser.id);
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    
    return newUser;
  }, []);

  const logout = useCallback(async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
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