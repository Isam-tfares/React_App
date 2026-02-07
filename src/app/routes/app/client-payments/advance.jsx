import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsAdvanceRoute = () => {
  return (
    <ContentLayout title="Avance">
      <Authorization permission="clientPayments:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Avance</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsAdvanceRoute;
