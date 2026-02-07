import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const QuotesDetailsRoute = () => {
  return (
    <ContentLayout title="Détails devis">
      <Authorization permission="quotes:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Détails devis</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default QuotesDetailsRoute;