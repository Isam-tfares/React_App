import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsProjectsRoute = () => {
  return (
    <ContentLayout title="Paramétrage Projets">
      <Authorization tache="Initiation_Table" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage Projets</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsProjectsRoute;
