/**
 * 로그인, 회원가입 등 인증관련 API
 */

import { setToken } from '@/utils/token'
import { axiosInstance } from '../axios'
import {
  EmailCheckRequest,
  JoinVerifyCodeSend,
  JoinVerifyCodeSendResponse,
  JoinVerifyConfirmRequest,
  LoginRequest,
  LoginResponse,
  PasswordChangeRequest,
  PasswordCheckRequest,
  PasswordSendRequest,
  Register,
  RegisterEnroll,
  User,
  UserResponseData,
} from '../interface/auth'
import { AxiosResponse } from 'axios'

//로그인
export const login = async <T = LoginResponse>(account: LoginRequest): Promise<T> => {
  const res = await axiosInstance.post<T>('/login', account)
  if ((res.status = 200)) {
    setToken(res.headers.authorization)
  }
  return res.data
}

export const getUser = async (user: number) => {
  if (!user) return null
  const res = await axiosInstance.get(`/s/user/${user}`)
  return res
}

//회원정보 수정
export const editUser = async (id: number) => {
  if (!id) return null
  const res = await axiosInstance.get(`/s/user/${id}`)
  return res
}

// 로그아웃
export const logout = async () => {
  const { data } = await axiosInstance.post('/logout')
  return data
}

// 비밀번호 변경 - 인증코드 전송
export const passwordSend = async (user: PasswordSendRequest) => {
  try {
    const { data } = await axiosInstance.post('/login/send', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

// 비밀번호 변경 - 인증코드 확인
export const passwordCheck = async (user: PasswordCheckRequest) => {
  try {
    const { data } = await axiosInstance.post('/login/check', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

// 비밀번호 변경
export const passwordChange = async (user: PasswordChangeRequest) => {
  try {
    const { data } = await axiosInstance.post('/login/change', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

//회원가입
export const join = async (user: Register) => {
  try {
    const { data } = await axiosInstance.post('/signup', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

//이메일 중복 체크
export const emailDuplicateCheck = async (email: string) => {
  try {
    const data = await axiosInstance.post<EmailCheckRequest>('/signup/duplicate', {
      email,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

//회원가입 - 입력한 이메일로 인증코드 전송
// export const joinVerifyCodeSend = async <T = LoginResponse>(
//   data: JoinVerifyCodeSend,
// ): Promise<T | undefined> => {
//   try {
//     const res = await axiosInstance.post<T>('/signup/send', data)
//     return res.data
//   } catch (error) {
//     console.log(error)
//   }
//   return undefined
// }
// export const joinVerifyCodeSend = async (
//   data: JoinVerifyCodeSend,
// ): Promise<JoinVerifyCodeSendResponse | undefined> => {
//   try {
//     const res = await axiosInstance.post<JoinVerifyCodeSendResponse>('/signup/send', data)
//     return res.data
//   } catch (error) {
//     console.log(error)
//     return undefined
//   }
// }

// 회원가입 - 인증코드 전송
export const joinVerifyCodeSend = async (
  data: JoinVerifyCodeSend,
): Promise<AxiosResponse<JoinVerifyCodeSend> | undefined> => {
  try {
    const res = await axiosInstance.post<AxiosResponse<JoinVerifyCodeSend>>('/signup/send', data)
    return res.data
  } catch (error) {
    console.log(error)
    return undefined
  }
}

// 회원가입 - 인증코드 확인
export const joinVerifyConfirm = async <T = LoginResponse>(
  data: JoinVerifyConfirmRequest,
): Promise<T | undefined> => {
  try {
    const res = await axiosInstance.post<T>('/signup/check', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
  return undefined
}
