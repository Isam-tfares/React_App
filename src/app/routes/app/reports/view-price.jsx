import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsViewPriceRoute = () => {
  return (
    <ContentLayout title="Consulter Rapport/Prix">
      <Authorization permission="reports:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consulter Rapport/Prix</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsViewPriceRoute;
