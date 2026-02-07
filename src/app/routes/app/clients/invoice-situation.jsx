import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientsInvoiceSituationRoute = () => {
  return (
    <ContentLayout title="Situation Client/Facture">
      <Authorization permission="clients:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation Client/Facture</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientsInvoiceSituationRoute;
