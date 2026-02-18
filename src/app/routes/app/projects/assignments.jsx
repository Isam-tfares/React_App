import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsAssignmentsRoute = () => {
  return (
    <ContentLayout title="Changement des affectations">
      <Authorization tache="BTN_Supprimer_projets2" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Changement des affectations</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsAssignmentsRoute;
