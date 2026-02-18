import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersGlobalRoute = () => {
  return (
    <ContentLayout title="Consultation Globale">
      <Authorization tache="Consultation_Globale" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Consultation Globale</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersGlobalRoute;
