import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersupdateguaranteeRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - update-guarantee">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: update-guarantee</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersupdateguaranteeRoute;