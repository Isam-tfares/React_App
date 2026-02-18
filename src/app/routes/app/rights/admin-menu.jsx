import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const RightsAdminMenuRoute = () => {
  return (
    <ContentLayout title="Menu Administrateur">
      <Authorization tache="Mnu" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Menu Administrateur</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default RightsAdminMenuRoute;
