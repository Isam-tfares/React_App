import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const QuotesDetailsRoute = () => {
  return (
    <ContentLayout title="Détails devis">
      <Authorization tache="etatdevis" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Détails devis</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default QuotesDetailsRoute;
