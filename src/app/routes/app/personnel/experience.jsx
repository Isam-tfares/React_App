import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PersonnelExperienceRoute = () => {
  return (
    <ContentLayout title="Expérience">
      <Authorization permission="personnel:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Expérience</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PersonnelExperienceRoute;
