import { UserRole } from '@/core/permissions/permissionTypes.js';

// Mock users database
const MOCK_USERS = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@company.com',
    roles: [UserRole.ADMIN],
    department: 'IT',
  },
  {
    id: '2',
    name: 'HR Manager',
    email: 'hr@company.com',
    roles: [UserRole.HR_MANAGER],
    department: 'Human Resources',
  },
];

// Simulated API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mock authentication service
 */
export const authService = {
  /**
   * Login user
   * @param {Object} credentials - Login credentials
   * @param {string} credentials.email - User email
   * @param {string} credentials.password - User password
   * @returns {Promise<{user: Object, token: string}>}
   */
  login: async ({ email, password }) => {
    // Simulate API call
    await delay(500);

    // Mock password check (in real app, this is done on backend)
    const mockPasswords = {
      'admin@company.com': 'admin123',
      'hr@company.com': 'hr123',
    };

    const user = MOCK_USERS.find(u => u.email === email);

    if (!user || mockPasswords[email] !== password) {
      throw new Error('Invalid email or password');
    }

    return {
      user,
      token: 'mock-jwt-token-' + user.id,
    };
  },

  /**
   * Logout user
   * @returns {Promise<void>}
   */
  logout: async () => {
    // Simulate API call
    await delay(200);
  },

  /**
   * Get current user from token
   * @param {string} token - Auth token
   * @returns {Promise<Object>}
   */
  getCurrentUser: async (token) => {
    // Simulate API call
    await delay(300);

    // Extract user ID from token (mock)
    const userId = token.replace('mock-jwt-token-', '');
    const user = MOCK_USERS.find(u => u.id === userId);

    if (!user) {
      throw new Error('Invalid token');
    }

    return user;
  },
};
