import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersStatisticsRoute = () => {
  return (
    <ContentLayout title="Statistique AO">
      <Authorization tache="Statistique_Ao" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Statistique AO</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersStatisticsRoute;
