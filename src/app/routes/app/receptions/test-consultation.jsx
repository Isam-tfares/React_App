import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsTestConsultationRoute = () => {
  return (
    <ContentLayout title="Consultation essai">
      <Authorization permission="receptions:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consultation essai</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsTestConsultationRoute;
