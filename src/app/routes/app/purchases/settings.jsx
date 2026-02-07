import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const PurchasesSettingsRoute = () => {
  return (
    <ContentLayout title="Paramétrage">
      <Authorization permission="purchases:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default PurchasesSettingsRoute;
