import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersguaranteestatusRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - guarantee-status">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: guarantee-status</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersguaranteestatusRoute;