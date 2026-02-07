import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TreasuryBranchCashRoute = () => {
  return (
    <ContentLayout title="Caisse agence">
      <Authorization permission="treasury:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Caisse agence</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TreasuryBranchCashRoute;
