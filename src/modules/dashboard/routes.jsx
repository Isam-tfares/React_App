import { Routes, Route } from 'react-router-dom';
import { DashboardOverviewPage } from './pages/DashboardOverviewPage';

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardOverviewPage />} />
    </Routes>
  );
}
