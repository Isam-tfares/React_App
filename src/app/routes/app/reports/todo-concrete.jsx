import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsTodoConcreteRoute = () => {
  return (
    <ContentLayout title="À faire : Béton">
      <Authorization tache="Béton2" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>À faire : Béton</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsTodoConcreteRoute;
