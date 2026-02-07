import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DeliveryNotesDeliveryRoute = () => {
  return (
    <ContentLayout title="Livraison">
      <Authorization permission="deliveryNotes:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Livraison</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DeliveryNotesDeliveryRoute;
