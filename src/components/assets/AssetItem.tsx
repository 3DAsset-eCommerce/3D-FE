'use client'

import { Asset } from '@/api/interface/asset'
import { setClickedAsset } from '@/store/clickedAssetSlice'
import { openDrawer } from '@/store/drawerSlice'
import { formatPrice } from '@/utils/formatPrice'
import { useDispatch } from 'react-redux'
import Image from 'next/image'

interface Props {
  asset: Asset
}

export default function AssetItem({ asset }: Props) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setClickedAsset(asset.assetId))
    dispatch(openDrawer())
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="h-[35.8rem] min-w-[22.4rem] hover:rounded-[0.4rem] hover:border-2 hover:border-primary-main
      focus:rounded-[0.4rem] focus:border-2 focus:border-primary-main"
      >
        <div className="h-[35rem] p-[0.4rem]">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/${asset.thumbnailUrl}`}
            alt="left"
            width={216}
            height={266}
            className="rounded-[0.4rem]"
          />
          <div>
            <div className="flex h-[3rem] items-center text-sm text-neutral-navy-200">
              <div className="flex">
                <Image
                  src="/icons/emptyStar.svg"
                  alt="left"
                  width={10}
                  height={9.5}
                  className="mr-[0.3rem]"
                />
                <p>{asset.rating}</p>
                <p>({asset.reviewCount})</p>
              </div>
              <pre className="text-transparents-navy-15"> | </pre>
              <div className="flex">
                <Image
                  src="/icons/heartFill.svg"
                  alt="left"
                  width={10}
                  height={9.5}
                  className="mr-[0.3rem]"
                />
                <p>{asset.wishCount}</p>
              </div>
            </div>
            <h3 className="flex h-[2.8rem] items-center text-base  leading-[2.178rem] text-neutral-navy-100">
              {asset.assetName}
            </h3>
            <div className="flex h-[2.4rem] items-center justify-between">
              <p className="text-[1.8rem] leading-[2.4rem] text-neutral-white-0">
                {formatPrice(asset.price)}
              </p>
              {/* <p className="text-primary-newlloyd-button">70%</p> */}
            </div>
          </div>
        </div>
      </button>
    </li>
  )
}
