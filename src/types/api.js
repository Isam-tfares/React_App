/**
 * @typedef {Object} BaseEntity
 * @property {string} id
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} role
 * @property {string} departmentId
 * @property {string} createdAt
 */

/**
 * @typedef {Object} AuthResponse
 * @property {string} jwt
 * @property {User} user
 */

/**
 * @typedef {Object} Meta
 * @property {number} page
 * @property {number} total
 * @property {number} totalPages
 */

export const UserRoles = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  SUPERVISOR_STOCKS: 'SUPERVISOR_STOCKS',
  SUPERVISOR_FINANCE: 'SUPERVISOR_FINANCE',
  SUPERVISOR_HR: 'SUPERVISOR_HR',
  TECHNICIAN: 'TECHNICIAN',
  EMPLOYEE: 'EMPLOYEE',
  VIEWER: 'VIEWER',
};