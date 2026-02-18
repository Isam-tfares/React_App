import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsTodoGlobalRoute = () => {
  return (
    <ContentLayout title="À faire Global">
      <Authorization tache="Autre_Matériaux" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>À faire Global</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsTodoGlobalRoute;
