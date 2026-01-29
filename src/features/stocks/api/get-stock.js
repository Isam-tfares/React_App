import { useQuery } from '@tanstack/react-query';
import { api } from '../../../lib/api-client';

export const getStock = async (stockId) => {
  const response = await api.get(`/stocks/${stockId}`);
  return response;
};

export const getStockQueryOptions = (stockId) => ({
  queryKey: ['stock', stockId],
  queryFn: () => getStock(stockId),
  enabled: !!stockId,
});

export const useStock = (stockId) => {
  return useQuery(getStockQueryOptions(stockId));
};