import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsPendingRoute = () => {
  return (
    <ContentLayout title="En instance">
      <Authorization permission="clientPayments:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>En instance</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsPendingRoute;
