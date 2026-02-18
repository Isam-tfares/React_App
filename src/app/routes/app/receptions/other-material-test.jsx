import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsOtherMaterialTestRoute = () => {
  return (
    <ContentLayout title="Essai autre matériaux">
      <Authorization tache="Essai_autre_materiaux" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Essai autre matériaux</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsOtherMaterialTestRoute;
