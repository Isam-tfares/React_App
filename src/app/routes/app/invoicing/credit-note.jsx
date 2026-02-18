import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingCreditNoteRoute = () => {
  return (
    <ContentLayout title="Facture avoir">
      <Authorization tache="Facture_avoir" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Facture avoir</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingCreditNoteRoute;
