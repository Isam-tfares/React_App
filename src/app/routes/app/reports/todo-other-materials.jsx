import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsTodoOtherMaterialsRoute = () => {
  return (
    <ContentLayout title="À faire : Autres Matériaux">
      <Authorization permission="reports:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>À faire : Autres Matériaux</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsTodoOtherMaterialsRoute;
