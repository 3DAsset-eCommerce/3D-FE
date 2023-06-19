'use client'

import { useState } from 'react'
import AssetDetailContent from './AssetDetailContent'
import AssetDetailNav from './AssetDetailNav'
import AssetDetailAddCart from './AssetDetailAddCart'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import AssetDetailReview from './AssetDetailReview'

export default function AssetDetail() {
  const asset = useSelector((state: RootState) => state.clickedAsset)

  const [selectedTab, setSelectedTab] = useState(true)

  return (
    <div>
      <AssetDetailNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab ? <AssetDetailContent asset={asset} /> : <AssetDetailReview asset={asset} />}
      <AssetDetailAddCart asset={asset} />
    </div>
  )
}
