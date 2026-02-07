import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PersonnelEmployeeRoute = () => {
  return (
    <ContentLayout title="Dossier Salarié">
      <Authorization permission="personnel:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Dossier Salarié</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PersonnelEmployeeRoute;
