import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ClientsBilledReportsRoute = () => {
  return (
    <ContentLayout title="Liste rapports facturés">
      <Authorization permission="clients:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Liste rapports facturés</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ClientsBilledReportsRoute;
