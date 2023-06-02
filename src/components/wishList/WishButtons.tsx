export default function WishButtons() {
  return (
    <div className="flex gap-8 ">
      <button className="rounded-lg border border-solid  border-primary-main  px-14 py-1 text-primary-main">
        선택항목 장바구니
      </button>
      <button className="rounded-lg  border border-solid  border-transparent-navy-30  px-14 py-1 text-neutral-navy-100">
        선택항목 장바구니
      </button>
      <button className=" rounded-lg border border-solid border-transparent-navy-30  px-14 py-1 text-neutral-navy-100">
        전체 삭제
      </button>
    </div>
  )
}
