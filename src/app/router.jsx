import { createBrowserRouter } from 'react-router-dom';
import { paths } from '../config/paths';

// Layouts
import { AuthLayout, DashboardLayout } from '../components/layouts';

// Public routes
import LoginRoute from './routes/public/login';
import RegisterRoute from './routes/public/register';

// App routes
import DashboardRoute from './routes/app/dashboard';
import StocksRoute from './routes/app/stocks';
import FinanceRoute from './routes/app/finance';
import HRRoute from './routes/app/hr';
import UsersRoute from './routes/app/users';

export const router = createBrowserRouter([
  // Public routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: paths.auth.login.path,
        element: <LoginRoute />,
      },
      {
        path: paths.auth.register.path,
        element: <RegisterRoute />,
      },
    ],
  },

  // Protected app routes
  {
    path: paths.app.root.path,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardRoute />,
      },
      {
        path: paths.app.dashboard.path,
        element: <DashboardRoute />,
      },
      {
        path: paths.app.stocks.path,
        element: <StocksRoute />,
      },
      {
        path: paths.app.finance.path,
        element: <FinanceRoute />,
      },
      {
        path: paths.app.hr.path,
        element: <HRRoute />,
      },
      {
        path: paths.app.users.path,
        element: <UsersRoute />,
      },
    ],
  },

  // Redirect root to login
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginRoute />,
      },
    ],
  },
]);