import { ContentLayout } from '../../../../components/layouts';
import { Authorization } from '../../../../lib/authorization';

const ContractsFinalGuaranteeRoute = () => {
  return (
    <ContentLayout title="Caution définitive">
      <Authorization permission="contracts:view" forbiddenFallback={<div>Accès refusé.</div>}>
        <h1>Caution définitive</h1>
      </Authorization>
    </ContentLayout>
  );
};

export default ContractsFinalGuaranteeRoute;