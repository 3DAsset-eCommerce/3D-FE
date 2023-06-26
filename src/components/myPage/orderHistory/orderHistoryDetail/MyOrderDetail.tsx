import Image from 'next/image'
import MyOrderHistoryItem from '../MyOrderHistoryItem'

export default function MyOrderDetail() {
  return (
    <section className="mx-6 flex w-[97%] flex-col ">
      <div className="mb-6 mt-[3.3rem] flex w-full">
        <Image src="/icons/arrowLeft.svg" alt="edit" width={24} height={24} />
        <h1 className="ml-4 text-[1.5rem] font-semibold dark:text-neutral-navy-100">
          주문상세내역
        </h1>
      </div>
      <div className="mx-1 my-3 flex h-[2.5rem] w-full justify-between text-[0.9rem] dark:text-neutral-navy-100">
        <h1 className="mr-[20rem]">주문일자</h1>
        <h1 className="mr-[36.2rem]">주문번호</h1>
        <h1 className="mr-[3.4rem]">구매한 에셋 수</h1>
        <h1 className="mr-[2.2rem]">결제금액</h1>
      </div>
      <MyOrderHistoryItem />
    </section>
  )
}
