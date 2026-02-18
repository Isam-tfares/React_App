import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const MessagingCancelRequestRoute = () => {
  return (
    <ContentLayout title="Demande annulation">
      <Authorization tache="Creation_Consultation" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Demande annulation</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default MessagingCancelRequestRoute;
