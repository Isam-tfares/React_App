import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsDeliveryStatusRoute = () => {
  return (
    <ContentLayout title="État livraison rapports">
      <Authorization tache="Etat_livraison_rapports" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>État livraison rapports</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsDeliveryStatusRoute;
