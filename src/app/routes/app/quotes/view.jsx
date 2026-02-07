import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const QuotesViewRoute = () => {
  return (
    <ContentLayout title="Consulter Devis">
      <Authorization permission="quotes:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consulter Devis</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default QuotesViewRoute;