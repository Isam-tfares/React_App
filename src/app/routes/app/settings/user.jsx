import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsUserRoute = () => {
  return (
    <ContentLayout title="Paramétrage Utilisateur">
      <Authorization tache="Utilisateur" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage Utilisateur</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsUserRoute;
