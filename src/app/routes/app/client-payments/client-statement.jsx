import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsClientStatementRoute = () => {
  return (
    <ContentLayout title="Relevé Client">
      <Authorization tache="Relevé_Client" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Relevé Client</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsClientStatementRoute;
