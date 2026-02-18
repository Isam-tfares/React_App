import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const RightsFunctionalMenuRoute = () => {
  return (
    <ContentLayout title="Menu Fonctionnelle">
      <Authorization tache="Menu_Fonctionnelle" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Menu Fonctionnelle</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default RightsFunctionalMenuRoute;
