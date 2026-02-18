import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersQualificationRoute = () => {
  return (
    <ContentLayout title="Qualification AO">
      <Authorization tache="BTN_Nouveau_qualif" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Qualification AO</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersQualificationRoute;
