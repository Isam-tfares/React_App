import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersglobalRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - global">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: global</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersglobalRoute;