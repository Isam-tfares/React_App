import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PurchasesSupplierRoute = () => {
  return (
    <ContentLayout title="Fournisseur">
      <Authorization tache="OPT_Fournisseur" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Fournisseur</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PurchasesSupplierRoute;
