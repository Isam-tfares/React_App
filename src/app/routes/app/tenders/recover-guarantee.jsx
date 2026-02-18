import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersRecoverGuaranteeRoute = () => {
  return (
    <ContentLayout title="Caution à récupérer">
      <Authorization tache="Caution_à_recupere" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Caution à récupérer</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersRecoverGuaranteeRoute;
