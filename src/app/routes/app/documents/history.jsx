import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const DocumentsHistoryRoute = () => {
  return (
    <ContentLayout title="Historique mouvement">
      <Authorization permission="documents:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Historique mouvement</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default DocumentsHistoryRoute;
