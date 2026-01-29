import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AppProvider } from './provider';

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};