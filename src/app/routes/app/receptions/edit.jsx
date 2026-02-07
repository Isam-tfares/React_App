import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsEditRoute = () => {
  return (
    <ContentLayout title="Modifier réception">
      <Authorization permission="receptions:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Modifier réception</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsEditRoute;
