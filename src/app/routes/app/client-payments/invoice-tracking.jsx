import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsInvoiceTrackingRoute = () => {
  return (
    <ContentLayout title="Suivi paiement factures">
      <Authorization tache="Suivi_reglement" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Suivi paiement factures</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsInvoiceTrackingRoute;
