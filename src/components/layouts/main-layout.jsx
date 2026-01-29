import { Outlet } from 'react-router-dom';
import './layouts.css';

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
};