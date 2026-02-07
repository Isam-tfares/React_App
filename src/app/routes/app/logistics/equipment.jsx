import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const LogisticsEquipmentRoute = () => {
  return (
    <ContentLayout title="Matériel">
      <Authorization permission="logistics:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Matériel</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default LogisticsEquipmentRoute;
