import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsDeleteRoute = () => {
  return (
    <ContentLayout title="Supprimer Projet">
      <Authorization permission="projects:delete" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Supprimer Projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsDeleteRoute;