import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DocumentsScanRoute = () => {
  return (
    <ContentLayout title="Scanner document">
      <Authorization permission="documents:upload" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Scanner document</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DocumentsScanRoute;
