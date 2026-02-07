import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingViewEditRoute = () => {
  return (
    <ContentLayout title="Consultation/Edition Factures">
      <Authorization permission="invoicing:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consultation/Edition Factures</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingViewEditRoute;
