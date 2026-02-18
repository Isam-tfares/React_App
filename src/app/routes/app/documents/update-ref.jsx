import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DocumentsUpdateRefRoute = () => {
  return (
    <ContentLayout title="Mise à jour référencement">
      <Authorization tache="maj_referencement" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Mise à jour référencement</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DocumentsUpdateRefRoute;
