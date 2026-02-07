import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersprepareRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - prepare">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: prepare</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersprepareRoute;