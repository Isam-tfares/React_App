import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const QuotesOrderStatusRoute = () => {
  return (
    <ContentLayout title="Situation BC">
      <Authorization permission="quotes:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Situation BC</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default QuotesOrderStatusRoute;
