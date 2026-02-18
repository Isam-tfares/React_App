import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PersonnelLeaveRightsRoute = () => {
  return (
    <ContentLayout title="Droit congé">
      <Authorization tache="Droit_congé" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Droit congé</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PersonnelLeaveRightsRoute;
