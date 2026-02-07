import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsInitTableRoute = () => {
  return (
    <ContentLayout title="Initiation Table">
      <Authorization permission="settings:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Initiation Table</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsInitTableRoute;
