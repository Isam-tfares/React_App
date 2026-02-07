import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersresultsRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - results">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: results</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersresultsRoute;