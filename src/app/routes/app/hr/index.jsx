import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const HRRoute = () => {
  return (
    <ContentLayout title="Human Resources">
      <Authorization
        permission="hr:view"
        forbiddenFallback={<div>You don't have access to view HR.</div>}
      >
        <p>HR module content goes here.</p>
        <h1>Hi This is the HR Module</h1>
        {/* Add your HR components */}
      </Authorization>
    </ContentLayout>
  );
};

export default HRRoute;