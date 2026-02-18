import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PurchasesFileRoute = () => {
  return (
    <ContentLayout title="Dossier Achat">
      <Authorization tache="Dossier_Achat" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Dossier Achat</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PurchasesFileRoute;
