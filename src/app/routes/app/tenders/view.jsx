import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersViewRoute = () => {
  return (
    <ContentLayout title="Consulter Appels d'Offres">
      <Authorization tache="Nouveau_AO" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consulter Appels d'Offres</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersViewRoute;