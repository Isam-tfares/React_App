import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsNewTractionRoute = () => {
  return (
    <ContentLayout title="Nouvelle Réception (Traction)">
      <Authorization permission="receptions:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouvelle Réception (Traction)</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsNewTractionRoute;
