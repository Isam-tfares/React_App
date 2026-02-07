import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersawardedRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - awarded">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: awarded</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersawardedRoute;