import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsSubProjectRoute = () => {
  return (
    <ContentLayout title="Sous projet">
      <Authorization permission="projects:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Sous projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsSubProjectRoute;