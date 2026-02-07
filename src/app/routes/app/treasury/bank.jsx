import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TreasuryBankRoute = () => {
  return (
    <ContentLayout title="Banque">
      <Authorization permission="treasury:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Banque</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TreasuryBankRoute;
