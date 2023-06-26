import { LoginRequest } from '@/api/interface/auth'
import { login } from '@/api/service/auth'
import { setUser } from '@/store/userSlice'
import { setToken } from '@/utils/token'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'

export const useLogin = () => {
  const dispatch = useDispatch()

  const { mutate } = useMutation((account: LoginRequest) => login(account), {
    onSuccess: (data) => {
      dispatch(setUser(data.data.userId))
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })
  return { mutate }
}
