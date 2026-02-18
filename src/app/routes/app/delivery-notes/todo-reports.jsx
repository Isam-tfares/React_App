import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DeliveryNotesTodoRoute = () => {
  return (
    <ContentLayout title="Bordereau à faire/Rapports">
      <Authorization tache="Bordereau_à_faire" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Bordereau à faire/Rapports</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DeliveryNotesTodoRoute;
