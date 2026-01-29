import { ContentLayout } from '../../../../components/layouts';
import { StocksList, CreateStock } from '../../../../features/stocks/components';
import { Authorization } from '../../../../lib/authorization';

const StocksRoute = () => {
  return (
    <ContentLayout title="Stock Management">
      <Authorization
        permission="stocks:view"
        forbiddenFallback={<div>You don't have access to view stocks.</div>}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <Authorization permission="stocks:create">
            <CreateStock />
          </Authorization>
        </div>
        <StocksList />
      </Authorization>
    </ContentLayout>
  );
};

export default StocksRoute;