import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PurchasesPaymentsRoute = () => {
  return (
    <ContentLayout title="Règlements fournisseurs">
      <Authorization permission="purchases:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Règlements fournisseurs</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PurchasesPaymentsRoute;
