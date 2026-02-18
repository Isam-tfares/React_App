import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const RightsClientRoute = () => {
  return (
    <ContentLayout title="Droits Client">
      <Authorization tache="Client" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Droits Client</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default RightsClientRoute;
