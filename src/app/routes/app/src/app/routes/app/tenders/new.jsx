import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersnewRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - new">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: new</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersnewRoute;