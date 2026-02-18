import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsNewRoute = () => {
  return (
    <ContentLayout title="Nouveau Projet">
      <Authorization tache="Nouveau3" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouveau Projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsNewRoute;
