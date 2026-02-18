import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const RightsTaskListRoute = () => {
  return (
    <ContentLayout title="Liste des Tâches">
      <Authorization tache="Tâches" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Liste des Tâches</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default RightsTaskListRoute;
