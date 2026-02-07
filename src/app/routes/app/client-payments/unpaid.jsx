import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsUnpaidRoute = () => {
  return (
    <ContentLayout title="État Impayé">
      <Authorization permission="clientPayments:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>État Impayé</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsUnpaidRoute;
