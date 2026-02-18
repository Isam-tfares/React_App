import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const InvoicingReportsByProjectRoute = () => {
  return (
    <ContentLayout title="Rapport à facturer par projet">
      <Authorization tache="Rapport_à_facturer_Global" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Rapport à facturer par projet</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default InvoicingReportsByProjectRoute;
