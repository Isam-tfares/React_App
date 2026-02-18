import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const LogisticsFacilitiesRoute = () => {
  return (
    <ContentLayout title="Foyers">
      <Authorization tache="Loyer" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Foyers</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default LogisticsFacilitiesRoute;
