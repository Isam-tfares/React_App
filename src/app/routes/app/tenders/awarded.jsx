import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersAwardedRoute = () => {
  return (
    <ContentLayout title="Attribué">
      <Authorization permission="tenders:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Attribué</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersAwardedRoute;
