// Mock data for HR employees
const MOCK_EMPLOYEES = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    position: 'Software Engineer',
    department: 'IT',
    salary: 75000,
    hireDate: '2022-01-15',
    status: 'active',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@company.com',
    position: 'HR Manager',
    department: 'Human Resources',
    salary: 65000,
    hireDate: '2021-03-20',
    status: 'active',
  },
  {
    id: '3',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@company.com',
    position: 'Sales Representative',
    department: 'Sales',
    salary: 55000,
    hireDate: '2023-06-10',
    status: 'active',
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarah.williams@company.com',
    position: 'Marketing Specialist',
    department: 'Marketing',
    salary: 60000,
    hireDate: '2022-09-05',
    status: 'active',
  },
];

// Simulated API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mock HR API
 */
export const mockHrApi = {
  /**
   * Get all employees
   * @returns {Promise<Array>}
   */
  getEmployees: async () => {
    await delay(500);
    return [...MOCK_EMPLOYEES];
  },

  /**
   * Get employee by ID
   * @param {string} id - Employee ID
   * @returns {Promise<Object|null>}
   */
  getEmployeeById: async (id) => {
    await delay(300);
    return MOCK_EMPLOYEES.find(emp => emp.id === id) || null;
  },

  /**
   * Create new employee
   * @param {Object} employee - Employee data (without id)
   * @returns {Promise<Object>}
   */
  createEmployee: async (employee) => {
    await delay(500);
    const newEmployee = {
      ...employee,
      id: String(Date.now()),
    };
    MOCK_EMPLOYEES.push(newEmployee);
    return newEmployee;
  },

  /**
   * Update employee
   * @param {string} id - Employee ID
   * @param {Object} updates - Fields to update
   * @returns {Promise<Object>}
   */
  updateEmployee: async (id, updates) => {
    await delay(500);
    const index = MOCK_EMPLOYEES.findIndex(emp => emp.id === id);
    if (index === -1) throw new Error('Employee not found');
    
    MOCK_EMPLOYEES[index] = { ...MOCK_EMPLOYEES[index], ...updates };
    return MOCK_EMPLOYEES[index];
  },

  /**
   * Delete employee
   * @param {string} id - Employee ID
   * @returns {Promise<void>}
   */
  deleteEmployee: async (id) => {
    await delay(500);
    const index = MOCK_EMPLOYEES.findIndex(emp => emp.id === id);
    if (index === -1) throw new Error('Employee not found');
    
    MOCK_EMPLOYEES.splice(index, 1);
  },
};
