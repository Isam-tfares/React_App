import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsInitializationRoute = () => {
  return (
    <ContentLayout title="Initialisation">
      <Authorization tache="Initialisation" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Initialisation</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsInitializationRoute;
