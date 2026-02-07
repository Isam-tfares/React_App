import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const MessagingAppRemarkRoute = () => {
  return (
    <ContentLayout title="Remarque application">
      <Authorization permission="messaging:send" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Remarque application</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default MessagingAppRemarkRoute;
