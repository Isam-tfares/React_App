import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsViewRoute = () => {
  return (
    <ContentLayout title="Consulter Règlements">
      <Authorization permission="clientPayments:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consulter Règlements</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsViewRoute;
