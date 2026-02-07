import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsCancelledRoute = () => {
  return (
    <ContentLayout title="Règlements annulés">
      <Authorization permission="clientPayments:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Règlements annulés</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsCancelledRoute;
