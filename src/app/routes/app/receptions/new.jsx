import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsNewRoute = () => {
  return (
    <ContentLayout title="Nouvelle Réception">
      <Authorization tache="Nouveau5" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouvelle Réception</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsNewRoute;
