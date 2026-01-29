import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../lib/api-client';

export const createStock = async (data) => {
  const response = await api.post('/stocks', data);
  return response;
};

export const useCreateStock = ({ onSuccess } = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createStock,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['stocks'] });
      onSuccess?.(data);
    },
  });
};