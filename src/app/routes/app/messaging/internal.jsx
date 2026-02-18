import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const MessagingInternalRoute = () => {
  return (
    <ContentLayout title="Message interne">
      <Authorization tache="Message" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Message interne</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default MessagingInternalRoute;
