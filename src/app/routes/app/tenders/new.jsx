import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersNewRoute = () => {
  return (
    <ContentLayout title="Nouveau Appel d'Offres">
      <Authorization tache="AO_Créer" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouveau Appel d'Offres</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersNewRoute;
