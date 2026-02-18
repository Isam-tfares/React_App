import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ContractsNewRoute = () => {
  return (
    <ContentLayout title="Nouveau Marché">
      <Authorization tache="Nouveau2" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouveau Marché</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ContractsNewRoute;
