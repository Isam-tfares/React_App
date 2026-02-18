import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientsUpdateRoute = () => {
  return (
    <ContentLayout title="Mise à jours">
      <Authorization tache="Mise_à_jours" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Mise à jours</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientsUpdateRoute;
