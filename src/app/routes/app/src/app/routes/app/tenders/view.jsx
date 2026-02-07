import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersviewRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - view">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: view</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersviewRoute;