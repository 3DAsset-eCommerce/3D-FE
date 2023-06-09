'use client'

interface CheckoutData {
  userId?: string
  id?: number
}
export default function WishButtons({ id }: CheckoutData) {
  return (
    <div className=" flex  h-10 w-[45rem] gap-5">
      <button
        onClick={() => {
          alert('클릭')
        }}
        className="flex-1 whitespace-nowrap rounded-lg border border-solid border-primary-main text-sm text-primary-main"
      >
        선택항목 장바구니
      </button>
      <button
        onClick={() => {
          alert('클릭')
        }}
        className="flex-1 whitespace-nowrap rounded-lg border border-solid border-transparent-navy-30 text-sm text-neutral-navy-100"
      >
        선택항목 삭제
      </button>
      <button
        onClick={() => {
          alert('클릭')
        }}
        className="flex-1 rounded-lg border border-solid border-transparent-navy-30 text-sm text-neutral-navy-100"
      >
        전체 삭제
      </button>
    </div>
  )
}
