import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsTestConsultationRoute = () => {
  return (
    <ContentLayout title="Consultation essai">
      <Authorization tache="Connsultation_essai_Interne_Exetrne" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consultation essai</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsTestConsultationRoute;
