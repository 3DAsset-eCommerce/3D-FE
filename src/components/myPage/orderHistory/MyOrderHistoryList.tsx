/**
 * 마이페이지-주문내역
 */

import MyOrderHistoryItem from './MyOrderHistoryItem'
import { OrderHistory } from '@/api/interface/payment'

interface OrderHistoryProps {
  orderHistories: OrderHistory[] | undefined
}

export default function MyOrderHistoryList({ orderHistories }: OrderHistoryProps) {
  if (!orderHistories) return null

  return (
    <>
      <ul className="flex flex-col">
        {orderHistories.map((orderHistory) => (
          <MyOrderHistoryItem key={orderHistory.orderId} orderHistory={orderHistory} />
        ))}
      </ul>
    </>
  )
}
