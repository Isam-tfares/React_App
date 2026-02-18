import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TreasuryHqCashRoute = () => {
  return (
    <ContentLayout title="Caisse siège">
      <Authorization tache="Caisse_siège" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Caisse siège</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TreasuryHqCashRoute;
