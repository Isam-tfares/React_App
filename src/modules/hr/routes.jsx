import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { EmployeesListPage } from './pages/EmployeesListPage';
import { EmployeeFormPage } from './pages/EmployeeFormPage';

export default function HRRoutes() {
  return (
    <Routes>
      <Route index element={<EmployeesListPage />} />
      <Route path="employees" element={<EmployeesListPage />} />
      
      <Route element={<ProtectedRoute permission="hr:create" />}>
        <Route path="employees/new" element={<EmployeeFormPage />} />
      </Route>
      
      <Route element={<ProtectedRoute permission="hr:edit" />}>
        <Route path="employees/:id/edit" element={<EmployeeFormPage />} />
      </Route>
    </Routes>
  );
}
