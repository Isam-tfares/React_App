import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersQualificationRoute = () => {
  return (
    <ContentLayout title="Qualification AO">
      <Authorization permission="tenders:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Qualification Appels d'Offres</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersQualificationRoute;