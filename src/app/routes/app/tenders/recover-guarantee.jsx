import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersRecoverGuaranteeRoute = () => {
  return (
    <ContentLayout title="Caution à récupérer">
      <Authorization permission="tenders:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Caution à récupérer</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersRecoverGuaranteeRoute;