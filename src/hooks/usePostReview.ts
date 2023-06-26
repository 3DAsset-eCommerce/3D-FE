import { CreateReview } from '@/api/interface/review'
import { postReview } from '@/api/service/review'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const usePostReview = (id: number) => {
  const queryClient = useQueryClient()

  const { mutate: createReview } = useMutation({
    mutationFn: (review: CreateReview) => postReview(review, id),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['review', id] })

      // Snapshot the previous value
      const prevReview = queryClient.getQueryData(['review', id])

      // Optimistically update to the new value
      queryClient.setQueryData(['review', id], data)

      // Return a context with the previous and new todo
      return { prevReview, data }
    },
    onError: (_error, _data, context) => {
      queryClient.setQueriesData(['review', id], context?.prevReview)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['review', id])
    },
  })

  return { createReview }
}
