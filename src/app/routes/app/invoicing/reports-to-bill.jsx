import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingReportsToBillRoute = () => {
  return (
    <ContentLayout title="Rapport à facturer">
      <Authorization permission="invoicing:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Rapport à facturer</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingReportsToBillRoute;
