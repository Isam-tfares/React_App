import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const SettingsCompanyRoute = () => {
  return (
    <ContentLayout title="Paramétrage Société">
      <Authorization tache="Société" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage Société</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default SettingsCompanyRoute;
