import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DeliveryNotesDeliveryRoute = () => {
  return (
    <ContentLayout title="Livraison">
      <Authorization tache="Consultation" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Livraison</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DeliveryNotesDeliveryRoute;
