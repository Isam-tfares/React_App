import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsEditRoute = () => {
  return (
    <ContentLayout title="Modifier Projet">
      <Authorization permission="projects:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Modifier Projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsEditRoute;
