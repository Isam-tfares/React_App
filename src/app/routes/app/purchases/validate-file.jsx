import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PurchasesValidateFileRoute = () => {
  return (
    <ContentLayout title="Validation Dossier Achat">
      <Authorization permission="purchases:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Validation Dossier Achat</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PurchasesValidateFileRoute;
