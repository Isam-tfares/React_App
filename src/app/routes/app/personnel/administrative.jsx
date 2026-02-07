import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PersonnelAdministrativeRoute = () => {
  return (
    <ContentLayout title="Dossier Administratif">
      <Authorization permission="personnel:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Dossier Administratif</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PersonnelAdministrativeRoute;
