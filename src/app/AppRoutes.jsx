import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { MainLayout } from '@/shared/components/layout/MainLayout';
import { LoginPage } from '@/modules/auth/pages/LoginPage';
import { UnauthorizedPage } from '@/modules/auth/pages/UnauthorizedPage';

// Lazy load modules for better performance
const DashboardModule = lazy(() => import('@/modules/dashboard/routes'));
const HRModule = lazy(() => import('@/modules/hr/routes'));

const PageLoader = () => (
  <div className="flex items-center justify-center h-64">
    <div className="text-gray-600">Loading...</div>
  </div>
);

/**
 * Main Application Routes
 */
export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          
          {/* Dashboard - accessible to all authenticated users */}
          <Route path="/dashboard" element={
            <Suspense fallback={<PageLoader />}>
              <DashboardModule />
            </Suspense>
          } />

          {/* HR module - requires hr:view permission */}
          <Route element={<ProtectedRoute permission="hr:view" />}>
            <Route path="/hr/*" element={
              <Suspense fallback={<PageLoader />}>
                <HRModule />
              </Suspense>
            } />
          </Route>

          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Route>

      {/* 404 - catch all */}
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
            <p className="text-gray-600">Page not found</p>
            <a href="/dashboard" className="btn-primary mt-4 inline-block">
              Go to Dashboard
            </a>
          </div>
        </div>
      } />
    </Routes>
  );
};
