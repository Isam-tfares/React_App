import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingCreateRoute = () => {
  return (
    <ContentLayout title="Création Facture">
      <Authorization tache="Creation_facture1" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Création Facture</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingCreateRoute;
