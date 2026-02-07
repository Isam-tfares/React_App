import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DocumentsDeleteRoute = () => {
  return (
    <ContentLayout title="Supprimer document">
      <Authorization permission="documents:delete" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Supprimer document</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DocumentsDeleteRoute;
