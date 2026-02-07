import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DocumentsSearchRoute = () => {
  return (
    <ContentLayout title="Rechercher documents">
      <Authorization permission="documents:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Rechercher documents</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DocumentsSearchRoute;
