/**
 * 마이페이지 API - 유저정보조회, 회원탈퇴, 주문내역, 주문상세내역
 */

import { axiosInstance } from '../axios'
import { UserId } from '../interface/auth'
import { WithdrawRequest } from '../interface/myPage'
import { OrderHistoryResponseData } from '../interface/payment'

//유저정보조회
export const myPageGetUser = async ({ userId }: UserId) => {
  if (!userId) return null
  const res = await axiosInstance.get(`/s/user/${userId}`)
  return res
}

//회원 탈퇴
export const withdrawal = async ({ id, withdrawData }: WithdrawRequest) => {
  const { message, deleteConfirm } = withdrawData
  const { data } = await axiosInstance.post(`/s/user/${id}/withdraw`, {
    message,
    deleteConfirm,
  })
  return data
}

// 주문내역 - 달력 필터링에도 사용가능할지도
export const myPageGetOrderHistory = async (id: number, startDate: Date, endDate: Date) => {
  const { data } = await axiosInstance.get(`/s/user/${id}/orders
  ?startDate=${startDate}&endDate=${endDate}`)
  return data
}

// 주문상세내역
export const myPageGetOrderHistoryDetail = async (id: number, orderId: number) => {
  const { data } = await axiosInstance.get(`/s/user/${id}/orders/${orderId}`)
  return data
}
