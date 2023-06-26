import { UserId } from '@/api/interface/auth'
import { getUser } from '@/api/service/auth'
import { getToken } from '@/utils/token'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useUser = () => {
  const queryClient = useQueryClient()

  const userId: UserId | undefined = queryClient.getQueryData(['user', 'id'])

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      if (!userId) {
        return null
      } else {
        getUser(userId.userId)
      }
    },
  })

  // const updateUser = (newUser) => {
  //   queryClient.setQueryData(['user'], newUser)
  // }

  // const clearUser = () => {
  //   queryClient.setQueryData(['user'], null)
  // }

  return { user }
}
