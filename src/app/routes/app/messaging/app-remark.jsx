import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const MessagingAppRemarkRoute = () => {
  return (
    <ContentLayout title="Remarque application">
      <Authorization tache="Demande_annulation" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Remarque application</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default MessagingAppRemarkRoute;
