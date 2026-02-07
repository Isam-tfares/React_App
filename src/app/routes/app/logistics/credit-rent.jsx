import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const LogisticsCreditRentRoute = () => {
  return (
    <ContentLayout title="Crédit & loyer">
      <Authorization permission="logistics:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Crédit & loyer</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default LogisticsCreditRentRoute;
