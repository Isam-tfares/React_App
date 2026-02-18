import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PersonnelPayrollRoute = () => {
  return (
    <ContentLayout title="Paie">
      <Authorization tache="Préparation_paie" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paie</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PersonnelPayrollRoute;
