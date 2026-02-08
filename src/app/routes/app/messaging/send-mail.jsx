import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const MessagingSendMailRoute = () => {
  return (
    <ContentLayout title="Envoi courrier">
      <Authorization permission="messaging:send" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Envoi courrier Simo</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default MessagingSendMailRoute;
