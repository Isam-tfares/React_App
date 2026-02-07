import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockHrApi } from '@/core/api/mockApi';
import { PermissionGate } from '@/core/permissions/PermissionGate';
import { Plus, Edit, Trash2 } from 'lucide-react';

/**
 * Employees List Page
 */
export const EmployeesListPage = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    setIsLoading(true);
    try {
      const data = await mockHrApi.getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Failed to load employees:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this employee?')) return;

    try {
      await mockHrApi.deleteEmployee(id);
      loadEmployees();
    } catch (error) {
      console.error('Failed to delete employee:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading employees...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-600 mt-1">Manage your company's workforce</p>
        </div>

        <PermissionGate permission="hr:create">
          <button
            onClick={() => navigate('/hr/employees/new')}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={20} />
            Add Employee
          </button>
        </PermissionGate>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Position</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Department</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">
                      {employee.firstName} {employee.lastName}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{employee.email}</td>
                  <td className="py-3 px-4 text-gray-600">{employee.position}</td>
                  <td className="py-3 px-4 text-gray-600">{employee.department}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`
                        px-2 py-1 text-xs font-medium rounded-full
                        ${employee.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                        }
                      `}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <PermissionGate permission="hr:edit">
                        <button
                          onClick={() => navigate(`/hr/employees/${employee.id}/edit`)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                      </PermissionGate>

                      <PermissionGate permission="hr:delete">
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </PermissionGate>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {employees.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No employees found. Add your first employee to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
