import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const UsersRoute = () => {
  return (
    <ContentLayout title="User Management">
      <Authorization
        permission="users:view"
        forbiddenFallback={<div>Only administrators can view this page.</div>}
      >
        <p>User management content goes here.</p>
        {/* Add your users components */}
      </Authorization>
    </ContentLayout>
  );
};

export default UsersRoute;