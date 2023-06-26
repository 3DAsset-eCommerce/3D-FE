/**
 * 마이페이지-주문내역
 */
'use client'
import { FormEvent, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import MyOrderDetail from './orderHistoryDetail/MyOrderDetail'
import MyOrderCalendar from './calendar/MyOrderCalendar'
import MyOrderHistoryItem from './MyOrderHistoryItem'

export default function MyOrderHistory() {
  const router = useRouter()

  // const handleMoveToOrderDetail = async (e: FormEvent<HTMLFormElement>) => {
  const handleMoveToOrderDetail: MouseEventHandler<HTMLLIElement> = () => {
    // e.preventDefault()
    router.push('/my-page/orderHistory/detail')
    console.log('주문내역을 클릭 후 이동')
  }

  return (
    <>
      {/* list item click시, my order detail nevigate되도록 */}
      <section className="flex w-[97%] flex-col">
        {/* 주문내역 타이틀, 내역 갯수 */}
        <div className="h-full w-full">
          <h1 className="mt-10 w-full text-[2.4rem] font-semibold dark:text-neutral-navy-100">
            주문내역 <span className="text-[1.8rem] font-normal"> (100) </span>
          </h1>
        </div>
        <div className="mb-8 mt-6 w-full">
          <MyOrderCalendar />
        </div>
        <div className="h-[70%] w-full justify-center">
          <div className="mx-1 my-3 flex h-[2.5rem] w-full justify-between text-[1.2rem] dark:text-neutral-navy-100">
            <h1 className="mr-[20rem]">주문일자</h1>
            <h1 className="mr-[36.2rem]">주문번호</h1>
            <h1 className="mr-[3.4rem]">구매한 에셋 수</h1>
            <h1 className="mr-[2.2rem]">결제금액</h1>
          </div>
          <ul className="flex flex-col">
            <MyOrderHistoryItem />
            {/* <MyOrderHistoryItem onClick={handleMoveToOrderDetail} /> */}
            {/* {assets.map((asset) => (
        <MyOrderHistoryItem key={asset.id} asset={asset} />
      ))} */}
          </ul>
        </div>
      </section>
      {/* <MyOrderHistoryList /> */}
      {/* <MyOrderDetail /> */}
    </>
  )
}
