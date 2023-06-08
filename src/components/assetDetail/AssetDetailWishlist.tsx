import { Asset } from '@/api/assets'
import WishlistButton from '../common/WishlistButton'
import { formatPrice } from '@/utils/formatPrice'

interface Props {
  asset: Asset
}

export default function AssetDetailWishlist({ asset }: Props) {
  return (
    <div className="absolute bottom-0 h-[10.5rem] w-[70.9rem] border-t border-transparent-navy-30 bg-bg-2">
      <div className="p-[2.7rem]">
        <div className="flex w-[65.7rem] justify-between">
          <div className="flex w-[33rem] flex-col gap-y-[1rem]">
            <h3 className="text-base leading-[1.936rem] text-neutral-navy-100">{asset.title}</h3>
            <div className="text-[1.8rem] text-neutral-white-0">{formatPrice(asset.price)}</div>
          </div>
          <div className="flex">
            <button
              className="mr-3 flex h-[4rem] w-[26.311rem] items-center justify-center
          rounded bg-primary-main px-20 py-3
          font-semibold leading-[1.936rem] text-neutral-white-0"
            >
              장바구니에 담기
            </button>
            <WishlistButton />
          </div>
        </div>
      </div>
    </div>
  )
}
