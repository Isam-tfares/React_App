import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingNewRoute = () => {
  return (
    <ContentLayout title="Nouvelle facture">
      <Authorization permission="invoicing:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouvelle facture</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingNewRoute;
