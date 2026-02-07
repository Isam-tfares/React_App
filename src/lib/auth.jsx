import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

// Mock users database for your lab system
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@lgc.dz',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'System',
    role: 'SUPER_ADMIN',
    departmentId: '1',
  },
  {
    id: '2',
    email: 'directeur@lgc.dz',
    password: 'dir123',
    firstName: 'Mohammed',
    lastName: 'Directeur',
    role: 'DIRECTEUR',
    departmentId: '1',
  },
  {
    id: '3',
    email: 'responsable@lgc.dz',
    password: 'resp123',
    firstName: 'Ahmed',
    lastName: 'Responsable',
    role: 'RESPONSABLE_LABO',
    departmentId: '2',
  },
  {
    id: '4',
    email: 'technicien@lgc.dz',
    password: 'tech123',
    firstName: 'Karim',
    lastName: 'Technicien',
    role: 'TECHNICIEN_LABO',
    departmentId: '2',
  },
  {
    id: '5',
    email: 'commercial@lgc.dz',
    password: 'com123',
    firstName: 'Yacine',
    lastName: 'Commercial',
    role: 'COMMERCIAL',
    departmentId: '3',
  },
  {
    id: '6',
    email: 'comptable@lgc.dz',
    password: 'compta123',
    firstName: 'Fatima',
    lastName: 'Comptable',
    role: 'COMPTABLE',
    departmentId: '4',
  },
  {
    id: '7',
    email: 'rh@lgc.dz',
    password: 'rh123',
    firstName: 'Sara',
    lastName: 'RH',
    role: 'RH',
    departmentId: '5',
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (credentials) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const { email, password } = credentials;
    
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error('Email ou mot de passe incorrect');
    }

    const { password: _, ...userWithoutPassword } = foundUser;
    
    localStorage.setItem('token', 'mock-jwt-token-' + foundUser.id);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    setUser(userWithoutPassword);
    
    return userWithoutPassword;
  }, []);

  const register = useCallback(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const existingUser = MOCK_USERS.find((u) => u.email === data.email);
    if (existingUser) {
      throw new Error('Email déjà enregistré');
    }

    const newUser = {
      id: String(MOCK_USERS.length + 1),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: 'EMPLOYEE',
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