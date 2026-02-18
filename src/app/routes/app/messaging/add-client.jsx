import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const MessagingAddClientRoute = () => {
  return (
    <ContentLayout title="Demande ajout client">
      <Authorization tache="Demande_ajout_client" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Demande ajout client</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default MessagingAddClientRoute;
