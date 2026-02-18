import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsCylinderManagementRoute = () => {
  return (
    <ContentLayout title="Gestion cylindre">
      <Authorization tache="Gestion_cylindre" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Gestion cylindre</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsCylinderManagementRoute;
