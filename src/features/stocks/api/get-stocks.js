import { useQuery } from '@tanstack/react-query';
import { api } from '../../../lib/api-client';

export const getStocks = async (params = {}) => {
  const response = await api.get('/stocks', { params });
  return response;
};

export const getStocksQueryOptions = (params = {}) => ({
  queryKey: ['stocks', params],
  queryFn: () => getStocks(params),
});

export const useStocks = (params = {}) => {
  return useQuery(getStocksQueryOptions(params));
};