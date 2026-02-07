import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const LogisticsFacilitiesRoute = () => {
  return (
    <ContentLayout title="Foyers">
      <Authorization permission="logistics:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Foyers</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default LogisticsFacilitiesRoute;
