import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const MessagingInternalRoute = () => {
  return (
    <ContentLayout title="Message interne">
      <Authorization permission="messaging:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Message interne</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default MessagingInternalRoute;
