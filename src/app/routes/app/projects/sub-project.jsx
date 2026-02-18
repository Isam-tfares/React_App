import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsSubProjectRoute = () => {
  return (
    <ContentLayout title="Sous projet">
      <Authorization tache="Sous_projet" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Sous projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsSubProjectRoute;
