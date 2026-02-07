import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersNewRoute = () => {
  return (
    <ContentLayout title="Nouveau Appel d'Offres">
      <Authorization permission="tenders:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouveau Appel d'Offres</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersNewRoute;
