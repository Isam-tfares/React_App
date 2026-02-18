import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PurchasesExpenseRoute = () => {
  return (
    <ContentLayout title="Dépense fournisseurs">
      <Authorization tache="Facture_FOURNISSEUR" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Dépense fournisseurs</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PurchasesExpenseRoute;
