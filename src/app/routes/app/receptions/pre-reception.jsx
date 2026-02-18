import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsPreReceptionRoute = () => {
  return (
    <ContentLayout title="Pré Réception">
      <Authorization tache="Nouveau5" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Pré Réception</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsPreReceptionRoute;
