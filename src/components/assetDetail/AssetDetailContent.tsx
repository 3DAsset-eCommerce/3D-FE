'use client'

import { Asset } from '@/api/assets'
import AssetTag from '../assets/AssetTags'
import WishlistButton from '../common/WishlistButton'

interface Props {
  asset: Asset
}

export default function AssetDetailContent({ asset }: Props) {
  return (
    <>
      <div className="h-[52.3rem] border-b border-transparent-navy-30 bg-bg-2 pt-[4.7rem]">
        three.js
      </div>
      <article className="h-full px-6 pb-10 pt-6 text-neutral-navy-100">
        <div className="mb-6 flex h-[5.6rem] items-center">
          <div className="w-[44.1rem] text-lg font-semibold">
            <h2>{asset.title}</h2>
          </div>
          <div>
            <button>URL Copy</button>
            <span>Icon</span>
          </div>
          <div>
            <WishlistButton />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex h-[4.4rem] items-center border-t border-transparent-navy-30">
            <h3>확장자</h3>
          </div>
          <div className="flex h-[4.4rem] items-center border-t border-transparent-navy-30">
            <h3>평점</h3>
          </div>
          <div className="flex h-[4.4rem] items-center border-t border-transparent-navy-30">
            <h3>방문자 수</h3>
          </div>
          <div className="flex h-[4.4rem] items-center border-t border-transparent-navy-30">
            <h3>찜하기 수</h3>
          </div>
          <div className="flex h-[4.4rem] items-center border-t border-transparent-navy-30">
            <h3>파일 크기</h3>
          </div>
          <div className="flex h-[4.4rem] items-center border-y border-transparent-navy-30">
            <h3>제작자</h3>
          </div>
        </div>
        <div className="bg-neutral-navy-900 px-3 py-4">
          <div>
            이 패키지는 러너 게임 또는 액션 캐릭터를 만드는데 필요한 킹니메이션입니다. 관련 태그를
            검색하여 비슷한 365종의 에셋을 더 탑색해보세요.
          </div>
        </div>
        <AssetTag tags={asset.categories.tags} />
        <div className="h-[10.5rem]"></div>
      </article>
    </>
  )
}
