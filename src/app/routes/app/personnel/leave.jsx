import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PersonnelLeaveRoute = () => {
  return (
    <ContentLayout title="Congé">
      <Authorization tache="OPT_Congé" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Congé</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PersonnelLeaveRoute;
