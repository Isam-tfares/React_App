import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientsSituationRoute = () => {
  return (
    <ContentLayout title="Situation Clients">
      <Authorization permission="clients:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation Clients</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientsSituationRoute;
