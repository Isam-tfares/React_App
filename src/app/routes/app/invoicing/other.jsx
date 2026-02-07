import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingOtherRoute = () => {
  return (
    <ContentLayout title="Autres factures">
      <Authorization permission="invoicing:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Autres factures</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingOtherRoute;
