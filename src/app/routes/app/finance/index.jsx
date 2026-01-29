import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const FinanceRoute = () => {
  return (
    <ContentLayout title="Finance">
      <Authorization
        permission="finance:view"
        forbiddenFallback={<div>You don't have access to view finance.</div>}
      >
        <p>Finance module content goes here.</p>
        {/* Add your finance components */}
      </Authorization>
    </ContentLayout>
  );
};

export default FinanceRoute;