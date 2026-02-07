import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersViewRoute = () => {
  return (
    <ContentLayout title="Consulter Appels d'Offres">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <h2>Liste des appels d'offres</h2>
          <p>Liste à implémenter...</p>
          {/* Add your TendersList component here later */}
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersViewRoute;