import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TreasuryExpensesRoute = () => {
  return (
    <ContentLayout title="Dépenses">
      <Authorization tache="Dépenses" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Dépenses</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TreasuryExpensesRoute;
