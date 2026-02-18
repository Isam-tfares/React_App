import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PersonnelExperienceRoute = () => {
  return (
    <ContentLayout title="Expérience">
      <Authorization tache="OPT_Dossier_Salarié" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Expérience</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PersonnelExperienceRoute;
