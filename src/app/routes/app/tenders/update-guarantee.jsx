import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const TendersUpdateGuaranteeRoute = () => {
  return (
    <ContentLayout title="M.à.j Caution">
      <Authorization permission="tenders:edit" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>M.à.j Caution</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default TendersUpdateGuaranteeRoute;
