import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientsSituationRoute = () => {
  return (
    <ContentLayout title="Situation Clients">
      <Authorization tache="Situation_Clients" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation Clients</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientsSituationRoute;
