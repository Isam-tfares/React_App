import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const QuotesNewRoute = () => {
  return (
    <ContentLayout title="Nouveau Devis">
      <Authorization tache="Nouveau_devis1" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouveau Devis</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default QuotesNewRoute;
