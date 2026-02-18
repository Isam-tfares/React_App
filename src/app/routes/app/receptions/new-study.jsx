import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsNewStudyRoute = () => {
  return (
    <ContentLayout title="Nouvelle réception étude">
      <Authorization tache="Nouveau5" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Nouvelle réception étude</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsNewStudyRoute;
