import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsOtherMaterialsTrackingRoute = () => {
  return (
    <ContentLayout title="Suivi autres matériaux">
      <Authorization permission="receptions:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Suivi autres matériaux</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsOtherMaterialsTrackingRoute;
