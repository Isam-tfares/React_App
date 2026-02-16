import { ContentLayout } from '../../../../components/layouts';
import { useUser } from '../../../../lib/auth';
import './dashboard.css';

const DashboardRoute = () => {
  const { data: user } = useUser();

  return (
    <ContentLayout title="Tableau de Bord">
      <div className="dashboard-container">
        
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <h1 className="welcome-title">
              Bienvenue, {user?.full_name || user?.username}! 👋
            </h1>
            <p className="welcome-subtitle">
              Voici un aperçu de vos activités du laboratoire
            </p>
          </div>
          <div className="user-badge">
            <div className="user-avatar">
              {(user?.full_name || user?.username)?.charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
              <div className="user-name">{user?.full_name || user?.username}</div>
              <div className="user-role">{user?.lib_fonction_person}</div>
              <div className="user-email">{user?.email}</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card stat-blue">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-label">Projets Actifs</div>
              <div className="stat-value">24</div>
              <div className="stat-change positive">
                <span className="change-icon">↗</span>
                <span>+12% ce mois</span>
              </div>
            </div>
          </div>

          <div className="stat-card stat-green">
            <div className="stat-icon">🔬</div>
            <div className="stat-content">
              <div className="stat-label">Tests Effectués</div>
              <div className="stat-value">1,234</div>
              <div className="stat-change positive">
                <span className="change-icon">↗</span>
                <span>+8% ce mois</span>
              </div>
            </div>
          </div>

          <div className="stat-card stat-orange">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <div className="stat-label">En Attente</div>
              <div className="stat-value">47</div>
              <div className="stat-change negative">
                <span className="change-icon">↘</span>
                <span>-3% ce mois</span>
              </div>
            </div>
          </div>

          <div className="stat-card stat-purple">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <div className="stat-label">Tests Validés</div>
              <div className="stat-value">856</div>
              <div className="stat-change positive">
                <span className="change-icon">↗</span>
                <span>+15% ce mois</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="dashboard-row">
          
          {/* Quick Actions */}
          <div className="dashboard-card quick-actions">
            <div className="card-header">
              <h3 className="card-title">Actions Rapides</h3>
            </div>
            <div className="card-body">
              <div className="action-grid">
                <button className="action-button action-primary">
                  <span className="action-icon">➕</span>
                  <span className="action-text">Nouveau Projet</span>
                </button>
                <button className="action-button action-success">
                  <span className="action-icon">🔬</span>
                  <span className="action-text">Nouvelle Réception</span>
                </button>
                <button className="action-button action-warning">
                  <span className="action-icon">📄</span>
                  <span className="action-text">Créer Rapport</span>
                </button>
                <button className="action-button action-info">
                  <span className="action-icon">💳</span>
                  <span className="action-text">Facturation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-card recent-activity">
            <div className="card-header">
              <h3 className="card-title">Activités Récentes</h3>
            </div>
            <div className="card-body">
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon activity-blue">📊</div>
                  <div className="activity-content">
                    <div className="activity-title">Projet LGC-2024-001 créé</div>
                    <div className="activity-time">Il y a 2 heures</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon activity-green">✅</div>
                  <div className="activity-content">
                    <div className="activity-title">Rapport R-456 validé</div>
                    <div className="activity-time">Il y a 5 heures</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon activity-orange">🔬</div>
                  <div className="activity-content">
                    <div className="activity-title">Test béton en cours</div>
                    <div className="activity-time">Il y a 1 jour</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon activity-purple">💳</div>
                  <div className="activity-content">
                    <div className="activity-title">Facture F-789 émise</div>
                    <div className="activity-time">Il y a 2 jours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="dashboard-row">
          
          {/* Tests Progress */}
          <div className="dashboard-card tests-progress">
            <div className="card-header">
              <h3 className="card-title">Progression des Tests</h3>
            </div>
            <div className="card-body">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Tests Béton</span>
                  <span className="progress-percentage">75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '75%', background: '#3b82f6' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Tests Sols</span>
                  <span className="progress-percentage">60%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '60%', background: '#22c55e' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Analyse Matériaux</span>
                  <span className="progress-percentage">85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%', background: '#f59e0b' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Études Géotechniques</span>
                  <span className="progress-percentage">45%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '45%', background: '#8b5cf6' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="dashboard-card quick-stats">
            <div className="card-header">
              <h3 className="card-title">Statistiques Rapides</h3>
            </div>
            <div className="card-body">
              <div className="stat-row">
                <div className="stat-item">
                  <div className="stat-item-icon">📋</div>
                  <div className="stat-item-content">
                    <div className="stat-item-value">156</div>
                    <div className="stat-item-label">Rapports ce mois</div>
                  </div>
                </div>
                <div className="stat-row-divider"></div>
                <div className="stat-item">
                  <div className="stat-item-icon">👥</div>
                  <div className="stat-item-content">
                    <div className="stat-item-value">42</div>
                    <div className="stat-item-label">Clients actifs</div>
                  </div>
                </div>
              </div>
              <div className="stat-row-separator"></div>
              <div className="stat-row">
                <div className="stat-item">
                  <div className="stat-item-icon">💰</div>
                  <div className="stat-item-content">
                    <div className="stat-item-value">€45.8K</div>
                    <div className="stat-item-label">Revenus ce mois</div>
                  </div>
                </div>
                <div className="stat-row-divider"></div>
                <div className="stat-item">
                  <div className="stat-item-icon">⏱️</div>
                  <div className="stat-item-content">
                    <div className="stat-item-value">2.5j</div>
                    <div className="stat-item-label">Délai moyen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ContentLayout>
  );
};

export default DashboardRoute;