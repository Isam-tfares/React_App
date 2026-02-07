import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsPlanningRoute = () => {
  return (
    <ContentLayout title="Planning">
      <Authorization permission="receptions:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Planning</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsPlanningRoute;
