import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TenderspendingRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - pending">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: pending</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TenderspendingRoute;