import { useNavigate } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

/**
 * Unauthorized Access Page
 */
export const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-100 rounded-full">
            <ShieldAlert size={48} className="text-red-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-lg text-gray-600 mb-8">
          You don't have permission to access this page.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="btn-secondary"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn-primary"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
