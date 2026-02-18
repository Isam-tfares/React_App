import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientsProjectSituationRoute = () => {
  return (
    <ContentLayout title="Situation Client/Projet">
      <Authorization tache="Situation_Client" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation Client/Projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientsProjectSituationRoute;
