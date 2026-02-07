import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsConcreteTestRoute = () => {
  return (
    <ContentLayout title="Essai Béton">
      <Authorization permission="receptions:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Essai Béton</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsConcreteTestRoute;
