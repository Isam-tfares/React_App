import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsGeolocationRoute = () => {
  return (
    <ContentLayout title="Géolocalisation">
      <Authorization permission="projects:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Géolocalisation Projets</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsGeolocationRoute;