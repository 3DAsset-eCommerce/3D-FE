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
      className="min-w-[22.6rem] h-[35.8rem] hover:cursor-pointer  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
    >
      <div className="w-[21.8rem] h-[35rem] m-auto">
        <div className="rounded bg-gray-100 h-[26.8rem]"></div>
        <div>
          <div className="text-neutral-navy-200 text-sm h-[3rem] flex items-center">
            <span>4.9(38k)</span>
            <pre className="text-transparents-navy-15"> | </pre>
            <span>612k</span>
          </div>
          <h3 className="text-neutral-navy-100 text-base leading-[2.178rem] h-[2.8rem]  flex items-center">
            {asset.title}
          </h3>
          <div className="justify-between h-[2.4rem] flex items-center">
            <p className="text-neutral-white-0 text-[1.8rem] leading-[2.4rem]">
              {formatPrice(asset.price)}
            </p>
            <p className="text-primary-newlloyd-button">70%</p>
          </div>
        </div>
      </div>
    </li>
  )
}
