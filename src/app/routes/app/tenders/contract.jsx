import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersContractRoute = () => {
  return (
    <ContentLayout title="Marché">
      <Authorization permission="tenders:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Marché</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersContractRoute;
