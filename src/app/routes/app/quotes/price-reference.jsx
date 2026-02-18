import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const QuotesPriceRefRoute = () => {
  return (
    <ContentLayout title="Référentiel des prix">
      <Authorization tache="Referenciel_Prix" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Référentiel des prix</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default QuotesPriceRefRoute;
