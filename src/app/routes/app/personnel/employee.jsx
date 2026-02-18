import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PersonnelEmployeeRoute = () => {
  return (
    <ContentLayout title="Dossier Salarié">
      <Authorization tache="OPT_Dossier_Salarié" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Dossier Salarié</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PersonnelEmployeeRoute;
