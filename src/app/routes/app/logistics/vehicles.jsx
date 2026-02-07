import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const LogisticsVehiclesRoute = () => {
  return (
    <ContentLayout title="Véhicules">
      <Authorization permission="logistics:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Véhicules</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default LogisticsVehiclesRoute;
