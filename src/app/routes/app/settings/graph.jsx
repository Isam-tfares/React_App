import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsGraphRoute = () => {
  return (
    <ContentLayout title="Paramétrage Graphe">
      <Authorization tache="Initiation_Table" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage Graphe</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsGraphRoute;
