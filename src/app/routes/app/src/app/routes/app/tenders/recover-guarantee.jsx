import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersrecoverguaranteeRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - recover-guarantee">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: recover-guarantee</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersrecoverguaranteeRoute;