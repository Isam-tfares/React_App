import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsViewRoute = () => {
  return (
    <ContentLayout title="Consulter Projets">
      <Authorization tache="Suivi_projet" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consulter Projets</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsViewRoute;
