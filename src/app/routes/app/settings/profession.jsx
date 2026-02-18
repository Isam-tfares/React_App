import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsProfessionRoute = () => {
  return (
    <ContentLayout title="Paramétrage Métier">
      <Authorization tache="Initiation_Table" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage Métier</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsProfessionRoute;
