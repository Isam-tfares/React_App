import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersparticipationRoute = () => {
  return (
    <ContentLayout title="Appel d'Offres - participation">
      <Authorization
        permission="tenders:view"
        forbiddenFallback={<div>Accès refusé.</div>}
      >
        <div className="page-content">
          <p>Page: participation</p>
        </div>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersparticipationRoute;