import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientPaymentsProjectStatementRoute = () => {
  return (
    <ContentLayout title="Relevé par projet">
      <Authorization permission="clientPayments:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Relevé par projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientPaymentsProjectStatementRoute;
