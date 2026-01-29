import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../lib/api-client';

export const updateStock = async ({ stockId, data }) => {
  const response = await api.patch(`/stocks/${stockId}`, data);
  return response;
};

export const useUpdateStock = ({ onSuccess } = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStock,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['stocks'] });
      onSuccess?.(data);
    },
  });
};