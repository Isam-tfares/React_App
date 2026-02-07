import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersPrepareRoute = () => {
  return (
    <ContentLayout title="Préparer">
      <Authorization permission="tenders:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Préparer</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersPrepareRoute;
