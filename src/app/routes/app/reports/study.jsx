import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsStudyRoute = () => {
  return (
    <ContentLayout title="Rapport d'étude">
      <Authorization permission="reports:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Rapport d'étude</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsStudyRoute;
