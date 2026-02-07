import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingPreInvoiceRoute = () => {
  return (
    <ContentLayout title="Pré-facture (BL)">
      <Authorization permission="invoicing:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Pré-facture (BL)</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingPreInvoiceRoute;
