import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ProjectsStatisticsRoute = () => {
  return (
    <ContentLayout title="Statistique Projets">
      <Authorization tache="Statistique" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Statistique Projets</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ProjectsStatisticsRoute;
