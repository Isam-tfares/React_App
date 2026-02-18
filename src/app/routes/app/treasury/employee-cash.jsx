import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TreasuryEmployeeCashRoute = () => {
  return (
    <ContentLayout title="Caisse employé">
      <Authorization tache="Caisse_employé" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Caisse employé</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TreasuryEmployeeCashRoute;
