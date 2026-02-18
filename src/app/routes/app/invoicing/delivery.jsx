import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingDeliveryRoute = () => {
  return (
    <ContentLayout title="En livraison Factures">
      <Authorization tache="Etat_livraison_Factures" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>En livraison Factures</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingDeliveryRoute;
