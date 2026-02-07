import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsDeleteRoute = () => {
  return (
    <ContentLayout title="Supprimer réception">
      <Authorization permission="receptions:delete" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Supprimer réception</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsDeleteRoute;
