import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsConnectionRoute = () => {
  return (
    <ContentLayout title="Paramétrage Connexion">
      <Authorization permission="settings:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage Connexion</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsConnectionRoute;
