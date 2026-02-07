import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ReceptionsLabTreatmentRoute = () => {
  return (
    <ContentLayout title="Traitement des essai Labo">
      <Authorization permission="receptions:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Traitement des essai Labo</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ReceptionsLabTreatmentRoute;
