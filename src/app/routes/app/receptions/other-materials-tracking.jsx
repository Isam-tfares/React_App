import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsOtherMaterialsTrackingRoute = () => {
  return (
    <ContentLayout title="Suivi autres matériaux">
      <Authorization tache="Suivi_Reception" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Suivi autres matériaux</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsOtherMaterialsTrackingRoute;
