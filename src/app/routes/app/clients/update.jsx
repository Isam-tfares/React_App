import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientsUpdateRoute = () => {
  return (
    <ContentLayout title="Mise à jours">
      <Authorization permission="clients:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Mise à jours</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientsUpdateRoute;
