import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const LogisticsEquipmentRoute = () => {
  return (
    <ContentLayout title="Matériel">
      <Authorization tache="Matériel" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Matériel</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default LogisticsEquipmentRoute;
