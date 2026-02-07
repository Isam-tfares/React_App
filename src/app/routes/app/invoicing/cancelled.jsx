import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingCancelledRoute = () => {
  return (
    <ContentLayout title="Factures/BL annulées">
      <Authorization permission="invoicing:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Factures/BL annulées</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingCancelledRoute;
