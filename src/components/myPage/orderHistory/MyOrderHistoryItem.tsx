'use client'

import { formatPrice } from '@/utils/formatPrice'
import { OrderHistory } from '@/api/interface/payment'
import { useDispatch } from 'react-redux'
import { setClickedOrderHistory } from '@/store/clickedOrderHistorySlice'
import { hideOrderHistoryDetail, showOrderHistoryDetail } from '@/store/orderHistoryDetailSlice'
import MyOrderDetail from './orderHistoryDetail/MyOrderDetail'
import { useState } from 'react'

interface MyOrderHistoryItemProps {
  orderHistory: OrderHistory
}
export default function MyOrderHistoryItem({ orderHistory }: MyOrderHistoryItemProps) {
  const [showItemDetail, setShowItemDetail] = useState(false)
  const dispatch = useDispatch()

  const handleOrderNumberClick = () => {
    dispatch(setClickedOrderHistory(orderHistory.orderId))
    console.log(setClickedOrderHistory(orderHistory.orderId), 'handleOrderNumberClick')

    if (showItemDetail) {
      dispatch(hideOrderHistoryDetail())
    } else {
      dispatch(showOrderHistoryDetail())
    }

    setShowItemDetail(!showItemDetail)
  }

  return (
    <>
      <li
        onClick={handleOrderNumberClick}
        className="my-4 flex h-[3.75rem] w-full justify-between border-b border-neutral-navy-300 pb-3 text-[0.8rem] hover:cursor-pointer hover:border-b hover:border-sky-500"
      >
        <span className="ml-[0.5rem] mr-[8.4rem] pt-3">{orderHistory.orderDate}</span>
        <span className="mr-[18rem] text-[1.2rem] underline underline-offset-4">
          {orderHistory.orderNumber}
        </span>
        <span className="mr-[0.5rem] pt-3">{orderHistory.assetCount}&nbsp;개</span>
        <span className="mr-[0.5rem] text-[1.2rem]">{formatPrice(orderHistory.totalPrice)}</span>
      </li>

      {showItemDetail && <MyOrderDetail />}
    </>
  )
}
