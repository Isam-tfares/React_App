import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientsInvoiceSituationRoute = () => {
  return (
    <ContentLayout title="Situation Client/Facture">
      <Authorization tache="Situation_client_Facture" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation Client/Facture</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientsInvoiceSituationRoute;
