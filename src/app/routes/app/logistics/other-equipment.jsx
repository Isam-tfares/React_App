import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const LogisticsOtherEquipmentRoute = () => {
  return (
    <ContentLayout title="Autre Matériel">
      <Authorization permission="logistics:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Autre Matériel</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default LogisticsOtherEquipmentRoute;
