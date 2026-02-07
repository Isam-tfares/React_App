import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersstatisticsRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - statistics">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: statistics</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersstatisticsRoute;