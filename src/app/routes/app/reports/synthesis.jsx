import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReportsSynthesisRoute = () => {
  return (
    <ContentLayout title="Rapport de synthèse">
      <Authorization tache="Consulter_par_réfèrence" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Rapport de synthèse</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReportsSynthesisRoute;
