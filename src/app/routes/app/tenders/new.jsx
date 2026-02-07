import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersNewRoute = () => {
  return (
    <ContentLayout title="Nouveau Appel d'Offres">
      <Authorization
        permission="tenders:create"
        forbiddenFallback={<div>Accès refusé. Vous n'avez pas la permission de créer des appels d'offres.</div>}
      >
        <div className="page-content">
          <h2>Créer un nouvel appel d'offres</h2>
          <p>Formulaire à implémenter...</p>
          {/* Add your TenderForm component here later */}
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersNewRoute;