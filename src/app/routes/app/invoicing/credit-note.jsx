import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingCreditNoteRoute = () => {
  return (
    <ContentLayout title="Facture avoir">
      <Authorization permission="invoicing:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Facture avoir</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingCreditNoteRoute;
