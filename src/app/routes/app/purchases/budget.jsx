import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PurchasesBudgetRoute = () => {
  return (
    <ContentLayout title="Budget et Objectif">
      <Authorization tache="Budget" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Budget et Objectif</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PurchasesBudgetRoute;
