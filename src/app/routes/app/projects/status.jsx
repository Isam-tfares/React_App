import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsStatusRoute = () => {
  return (
    <ContentLayout title="Situation projets">
      <Authorization permission="projects:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation projets</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsStatusRoute;
