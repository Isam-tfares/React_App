import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersParticipationRoute = () => {
  return (
    <ContentLayout title="Accord Participation">
      <Authorization permission="tenders:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Accord Participation</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersParticipationRoute;