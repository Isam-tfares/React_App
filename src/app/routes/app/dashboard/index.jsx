import { ContentLayout } from '../../../../components/layouts';
import { useUser } from '../../../../lib/auth';

const DashboardRoute = () => {
  const { data: user } = useUser();

  return (
    <ContentLayout title="Dashboard">
      <div className="dashboard">
        <h2>Welcome, {user?.firstName} {user?.lastName}!</h2>
        <p>Your role: <strong>{user?.role}</strong></p>
        
        <div className="stats-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginTop: '24px' 
        }}>
          <div className="stat-card" style={{ 
            padding: '20px', 
            background: '#eff6ff', 
            borderRadius: '8px' 
          }}>
            <h3>Total Stocks</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>1,234</p>
          </div>
          <div className="stat-card" style={{ 
            padding: '20px', 
            background: '#f0fdf4', 
            borderRadius: '8px' 
          }}>
            <h3>Revenue</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#22c55e' }}>$45,678</p>
          </div>
          <div className="stat-card" style={{ 
            padding: '20px', 
            background: '#fefce8', 
            borderRadius: '8px' 
          }}>
            <h3>Employees</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#eab308' }}>56</p>
          </div>
          <div className="stat-card" style={{ 
            padding: '20px', 
            background: '#fdf2f8', 
            borderRadius: '8px' 
          }}>
            <h3>Departments</h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ec4899' }}>8</p>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default DashboardRoute;