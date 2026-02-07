import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsGedRoute = () => {
  return (
    <ContentLayout title="Paramétrage G.E.D">
      <Authorization permission="settings:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage G.E.D</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsGedRoute;
