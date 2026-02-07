import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersResultsRoute = () => {
  return (
    <ContentLayout title="Résultat AO">
      <Authorization permission="tenders:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Résultat AO</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersResultsRoute;
