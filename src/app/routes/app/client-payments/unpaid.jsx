import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsUnpaidRoute = () => {
  return (
    <ContentLayout title="État Impayé">
      <Authorization tache="Suivi_reglement" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>État Impayé</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsUnpaidRoute;
