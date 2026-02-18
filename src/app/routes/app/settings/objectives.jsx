import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsObjectivesRoute = () => {
  return (
    <ContentLayout title="Paramétrage Objectifs">
      <Authorization tache="Objectifs" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage Objectifs</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsObjectivesRoute;
