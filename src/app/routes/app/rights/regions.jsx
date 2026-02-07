import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const RightsRegionsRoute = () => {
  return (
    <ContentLayout title="Régions et Villes">
      <Authorization permission="rights:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Régions et Villes</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default RightsRegionsRoute;
