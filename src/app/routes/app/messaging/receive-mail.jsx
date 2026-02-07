import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const MessagingReceiveMailRoute = () => {
  return (
    <ContentLayout title="Réception courrier">
      <Authorization permission="messaging:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Réception courrier</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default MessagingReceiveMailRoute;
