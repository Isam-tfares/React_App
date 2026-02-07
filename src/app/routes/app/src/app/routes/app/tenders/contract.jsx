import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TenderscontractRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - contract">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: contract</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TenderscontractRoute;