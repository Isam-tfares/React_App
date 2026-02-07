import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersPendingRoute = () => {
  return (
    <ContentLayout title="En attente résultat">
      <Authorization permission="tenders:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>En attente résultat</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersPendingRoute;