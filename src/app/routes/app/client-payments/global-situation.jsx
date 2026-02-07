import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsGlobalSituationRoute = () => {
  return (
    <ContentLayout title="Situation globale/projet">
      <Authorization permission="clientPayments:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation globale/projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsGlobalSituationRoute;
