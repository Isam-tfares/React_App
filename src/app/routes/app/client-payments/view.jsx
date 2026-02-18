import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsViewRoute = () => {
  return (
    <ContentLayout title="Consulter Règlements">
      <Authorization tache="Consulter_rg_clt" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consulter Règlements</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsViewRoute;
