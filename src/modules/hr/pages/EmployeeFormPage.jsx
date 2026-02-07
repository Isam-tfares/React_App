import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockHrApi } from '@/core/api/mockApi';

/**
 * Employee Form Page (Create/Edit)
 */
export const EmployeeFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    department: '',
    salary: 0,
    hireDate: '',
    status: 'active',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isEditing) {
      loadEmployee();
    }
  }, [id]);

  const loadEmployee = async () => {
    if (!id) return;
    
    setIsLoading(true);
    try {
      const employee = await mockHrApi.getEmployeeById(id);
      if (employee) {
        setFormData(employee);
      }
    } catch (error) {
      console.error('Failed to load employee:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'salary' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      if (isEditing && id) {
        await mockHrApi.updateEmployee(id, formData);
      } else {
        await mockHrApi.createEmployee(formData);
      }
      navigate('/hr/employees');
    } catch (error) {
      console.error('Failed to save employee:', error);
      alert('Failed to save employee. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {isEditing ? 'Edit Employee' : 'Add New Employee'}
        </h1>
        <p className="text-gray-600 mt-1">
          {isEditing ? 'Update employee information' : 'Enter employee details'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="label">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="label">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="email" className="label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div>
            <label htmlFor="position" className="label">Position</label>
            <input
              id="position"
              name="position"
              type="text"
              value={formData.position}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div>
            <label htmlFor="department" className="label">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="input"
              required
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Operations">Operations</option>
            </select>
          </div>

          <div>
            <label htmlFor="salary" className="label">Salary</label>
            <input
              id="salary"
              name="salary"
              type="number"
              value={formData.salary}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div>
            <label htmlFor="hireDate" className="label">Hire Date</label>
            <input
              id="hireDate"
              name="hireDate"
              type="date"
              value={formData.hireDate}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="label">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="input"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isSaving}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : isEditing ? 'Update Employee' : 'Add Employee'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/hr/employees')}
            className="btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
