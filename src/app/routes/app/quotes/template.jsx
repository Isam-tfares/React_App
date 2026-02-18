import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const QuotesTemplateRoute = () => {
  return (
    <ContentLayout title="Paramétrage modèle">
      <Authorization tache="BTN_Modifier_devis" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Paramétrage modèle</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default QuotesTemplateRoute;
