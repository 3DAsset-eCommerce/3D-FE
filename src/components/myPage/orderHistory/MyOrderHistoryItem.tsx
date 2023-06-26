'use client'

import { Asset } from '@/api/interface/asset'
import { formatPrice } from '@/utils/formatPrice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DetailList from './orderHistoryDetail/DetailList'

interface Props {
  asset: Asset
}

// export default function MyOrderHistoryItem({ asset }: Props) {
export default function MyOrderHistoryItem() {
  const router = useRouter()

  const handleOrderNumberClick = () => {
    console.log('주문번호 클릭!')
  }

  return (
    <>
      <li
        onClick={handleOrderNumberClick}
        className="my-4 flex h-[3.75rem] w-full justify-between border-b border-neutral-navy-300 pb-3 text-[0.8rem] hover:cursor-pointer hover:border-b hover:border-sky-500"
      >
        <span className="ml-[0.5rem] mr-[8.4rem] pt-3">2023-06-02</span>
        <span className="mr-[18rem] text-[1.2rem] underline underline-offset-4">
          20230602-0000001
        </span>
        <span className="mr-[0.5rem] pt-3">3개</span>
        <span className="mr-[0.5rem] text-[1.2rem]">{formatPrice(183500)}</span>
        {/* <span className="mr-[0.5rem] text-[18px]">￦ {formatPrice(asset.price)}</span> */}
      </li>
    </>
  )
}
