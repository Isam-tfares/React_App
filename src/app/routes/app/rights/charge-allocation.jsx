import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const RightsChargeAllocationRoute = () => {
  return (
    <ContentLayout title="Affectation charges">
      <Authorization permission="rights:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Affectation charges</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default RightsChargeAllocationRoute;
