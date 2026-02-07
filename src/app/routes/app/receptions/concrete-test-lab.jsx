import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsConcreteTestLabRoute = () => {
  return (
    <ContentLayout title="Essai béton (LABO)">
      <Authorization permission="receptions:create" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Essai béton (LABO)</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsConcreteTestLabRoute;
