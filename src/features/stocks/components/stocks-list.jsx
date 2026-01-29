import { useState } from 'react';
import { useStocks } from '../api/get-stocks';
import { useDeleteStock } from '../api/delete-stock';
import { Authorization } from '../../../lib/authorization';
import { Spinner } from '../../../components/ui/spinner';
import { Button } from '../../../components/ui/button';
import './stocks.css';

export const StocksList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useStocks({ page });
  const deleteStock = useDeleteStock();

  if (isLoading) return <Spinner />;
  if (error) return <div className="error">Error loading stocks: {error.message}</div>;

  // Mock data for demonstration
  const stocks = data?.data || [
    { id: '1', name: 'Product A', quantity: 100, category: 'Electronics', price: 299.99 },
    { id: '2', name: 'Product B', quantity: 50, category: 'Furniture', price: 599.99 },
    { id: '3', name: 'Product C', quantity: 200, category: 'Electronics', price: 149.99 },
  ];

  return (
    <div className="stocks-list">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.category}</td>
              <td>{stock.quantity}</td>
              <td>${stock.price.toFixed(2)}</td>
              <td className="actions">
                <Authorization permission="stocks:edit">
                  <Button size="sm" variant="outline">Edit</Button>
                </Authorization>
                <Authorization permission="stocks:delete">
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteStock.mutate(stock.id)}
                    isLoading={deleteStock.isPending}
                  >
                    Delete
                  </Button>
                </Authorization>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <span>Page {page}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};