import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TreasuryBranchCashRoute = () => {
  return (
    <ContentLayout title="Caisse agence">
      <Authorization tache="Caisse_agence" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Caisse agence</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TreasuryBranchCashRoute;
