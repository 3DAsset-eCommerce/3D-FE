import { axiosInstance } from '../axios'
import { CreateReview, CreateReviewResponse, DeleteReviewResponse, ReviewReponse } from '../interface/review'

export const getAllReviews = async <T = ReviewReponse>(id: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${id}/reviews`)
  return res.data
}

export const postReview = async <T = CreateReviewResponse>(
  review: CreateReview,
  id: number,
): Promise<T> => {
  const res = await axiosInstance.post<T>(`s/assets/${id}/reviews`, review)
  return res.data
}

export const editReview = async <T = CreateReviewResponse>(
  id: number,
  reviewId: number,
): Promise<T> => {
  const res = await axiosInstance.post<T>(`s/assets/${id}/reviews/${reviewId}`)
  return res.data
}

export const deleteReview = async <T = DeleteReviewResponse>(
  id: number,
  reviewId: number,
): Promise<T> => {
  const res = await axiosInstance.post<T>(`s/assets/${id}/reviews${reviewId}/delete`)
  return res.data
}
