import { AuthProvider } from '../lib/auth';
import { QueryProvider } from '../lib/react-query';

export const AppProvider = ({ children }) => {
  return (
    <QueryProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryProvider>
  );
};