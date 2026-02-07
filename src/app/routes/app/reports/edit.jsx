import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsEditRoute = () => {
  return (
    <ContentLayout title="Modifier Rapport">
      <Authorization permission="reports:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Modifier Rapport</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsEditRoute;
