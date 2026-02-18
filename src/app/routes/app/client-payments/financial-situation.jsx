import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsFinancialSituationRoute = () => {
  return (
    <ContentLayout title="Situation globale financière">
      <Authorization tache="Situation_globale2" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation globale financière</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsFinancialSituationRoute;
