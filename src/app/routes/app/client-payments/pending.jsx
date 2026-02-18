import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsPendingRoute = () => {
  return (
    <ContentLayout title="En instance">
      <Authorization tache="En_instance" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>En instance</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsPendingRoute;
