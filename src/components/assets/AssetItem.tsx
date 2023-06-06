'use client'

import { Asset } from '@/api/assets'
import { setClickedAsset } from '@/store/clickedAssetSlice'
import { openDrawer } from '@/store/drawerSlice'
import { formatPrice } from '@/utils/formatPrice'
import { useDispatch } from 'react-redux'

interface Props {
  asset: Asset
}

export default function AssetItem({ asset }: Props) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setClickedAsset(asset))
    dispatch(openDrawer())
  }
  return (
    <li
      onClick={handleClick}
      className="h-[35.8rem] min-w-[22.6rem] hover:cursor-pointer  focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
    >
      <div className="m-auto h-[35rem] w-[21.8rem]">
        <div className="h-[26.8rem] rounded bg-gray-100"></div>
        <div>
          <div className="flex h-[3rem] items-center text-sm text-neutral-navy-200">
            <span>4.9(38k)</span>
            <pre className="text-transparents-navy-15"> | </pre>
            <span>612k</span>
          </div>
          <h3 className="flex h-[2.8rem] items-center text-base  leading-[2.178rem] text-neutral-navy-100">
            {asset.title}
          </h3>
          <div className="flex h-[2.4rem] items-center justify-between">
            <p className="text-[1.8rem] leading-[2.4rem] text-neutral-white-0">
              {formatPrice(asset.price)}
            </p>
            <p className="text-primary-newlloyd-button">70%</p>
          </div>
        </div>
      </div>
    </li>
  )
}
