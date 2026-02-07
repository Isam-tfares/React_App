import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ContractsViewRoute = () => {
  return (
    <ContentLayout title="Consulter Marché">
      <Authorization permission="contracts:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consulter Marché</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ContractsViewRoute;
