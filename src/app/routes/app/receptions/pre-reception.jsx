import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsPreReceptionRoute = () => {
  return (
    <ContentLayout title="Pré Réception">
      <Authorization permission="receptions:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Pré Réception</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsPreReceptionRoute;
