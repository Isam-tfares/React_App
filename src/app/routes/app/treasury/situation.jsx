import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TreasurySituationRoute = () => {
  return (
    <ContentLayout title="Situation">
      <Authorization tache="Situation1" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TreasurySituationRoute;
