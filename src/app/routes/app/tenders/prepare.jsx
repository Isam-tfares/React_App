import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersPrepareRoute = () => {
  return (
    <ContentLayout title="Préparer Appel d'Offres">
      <Authorization permission="tenders:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Préparer Appel d'Offres</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersPrepareRoute;