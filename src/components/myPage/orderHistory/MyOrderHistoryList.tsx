/**
 * 마이페이지-주문내역
 */

import { Asset } from '@/api/service/assets'
import { useState } from 'react'
import MyOrderHistoryItem from './MyOrderHistoryItem'

interface Props {
  assets: Asset[]
}

// export default function MyOrderHistoryList({ assets }: Props) {
export default function MyOrderHistoryList() {
  return (
    <>
      <ul className="flex flex-col">
        <MyOrderHistoryItem />
        {/* {assets.map((asset) => (
        <MyOrderHistoryItem key={asset.id} asset={asset} />
      ))} */}
      </ul>
    </>
  )
}
