import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DeliveryNotesEditViewRoute = () => {
  return (
    <ContentLayout title="Modification/Edition">
      <Authorization permission="deliveryNotes:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Modification/Edition</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DeliveryNotesEditViewRoute;
