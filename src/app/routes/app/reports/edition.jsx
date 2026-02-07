import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsEditionRoute = () => {
  return (
    <ContentLayout title="Édition Rapport">
      <Authorization permission="reports:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Édition Rapport</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsEditionRoute;
