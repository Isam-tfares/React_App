import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingAttachmentRoute = () => {
  return (
    <ContentLayout title="Attachement">
      <Authorization permission="invoicing:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Attachement</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingAttachmentRoute;
