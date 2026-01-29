import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../lib/api-client';

export const deleteStock = async (stockId) => {
  const response = await api.delete(`/stocks/${stockId}`);
  return response;
};

export const useDeleteStock = ({ onSuccess } = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stocks'] });
      onSuccess?.();
    },
  });
};