import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersGuaranteeStatusRoute = () => {
  return (
    <ContentLayout title="Situation Caution">
      <Authorization permission="tenders:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation Caution</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersGuaranteeStatusRoute;