import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DocumentsUploadRoute = () => {
  return (
    <ContentLayout title="Télécharger document">
      <Authorization tache="Telecharger_document" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Télécharger document</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DocumentsUploadRoute;
