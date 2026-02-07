import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersqualificationRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - qualification">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: qualification</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersqualificationRoute;