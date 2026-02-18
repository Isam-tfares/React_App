import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PurchasesValidateFileRoute = () => {
  return (
    <ContentLayout title="Validation Dossier Achat">
      <Authorization tache="Demande_et_Validation" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Validation Dossier Achat</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PurchasesValidateFileRoute;
