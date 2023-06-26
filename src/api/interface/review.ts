import { ApiResponse } from '.'

export interface Review {
  reviewId: number
  rating: number
  content: string
  userId: number
  firstName: string
  lastName: string
}

export type CreateReview = Omit<Review, 'reviewId' | 'firstName' | 'lastName'>
export type DeleteReview = Omit<CreateReview, 'rating' | 'content'>

export interface ReviewData {
  hasAsset: boolean
  hasReview: boolean
  hasWishlist: boolean
  reviewList: Review[] | []
}

export type ReviewReponse = ApiResponse<ReviewData>
export type CreateReviewResponse = ApiResponse<CreateReview>
export type DeleteReviewResponse = ApiResponse<DeleteReview>
