import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsGlobalRoute = () => {
  return (
    <ContentLayout title="Paramétrage Global">
      <Authorization permission="settings:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage Global</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsGlobalRoute;
