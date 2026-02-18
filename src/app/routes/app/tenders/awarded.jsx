import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersAwardedRoute = () => {
  return (
    <ContentLayout title="Attribué">
      <Authorization tache="Attribué" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Attribué</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersAwardedRoute;
