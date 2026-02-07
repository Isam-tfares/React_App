import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsNewRoute = () => {
  return (
    <ContentLayout title="Nouveau Règlement">
      <Authorization permission="clientPayments:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouveau Règlement</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsNewRoute;
