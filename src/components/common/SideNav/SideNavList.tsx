'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { setSelectedCategory } from '@/store/setSelectedCategory'
import { Subcategory, Category as typeCategory } from '@/interface/category'
import Category from './Category'
import Tags from './Tags'
import { setSelectedTags } from '@/store/tagSlice'

interface SideNavListProps {
  category: typeCategory[]
}

export default function SideNavList({ category }: SideNavListProps) {
  const selectedTags = useSelector((state: RootState) => state.tag.selectedTags)

  const dispatch = useDispatch()

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    dispatch(setSelectedTags(subcategory.tags || [])) // 서브카테고리 클릭시 해당 태그로 교체
  }
  console.log(selectedTags)

  return (
    <div>
      <div className="pl-[1.6rem]">
        <Image src="/logo-title.svg" alt="로고" width={156} height={36} />
      </div>
      <div className="flex cursor-pointer justify-end px-8 py-[0.4rem]">
        <Image src="/icons/minimizeMenu.svg" alt="메뉴" width={24} height={24} />
      </div>
      <ul className="p-[0.8rem]">
        <li className="border-b border-neutral-navy-200 py-[0.4rem] leading-[2.4rem]">
          <Link href="#" className="flex p-[0.8rem] text-neutral-navy-200">
            <Image
              src="/icons/assetList.svg"
              alt="개별 에셋"
              width={24}
              height={24}
              className="mr-[1.6rem]"
            />
            <p>에셋 리스트</p>
          </Link>
          <ul>
            <li>
              <Link href="#" className="flex p-[0.8rem] pl-[2.4rem] text-neutral-navy-200">
                <Image
                  src="/icons/box.svg"
                  alt="개별 에셋"
                  width={20}
                  height={20}
                  className="mr-[1.6rem]"
                />
                <p>개별 에셋</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex p-[0.8rem] pl-[2.4rem] text-neutral-navy-200">
                <Image
                  src="/icons/packageAsset.svg"
                  alt="개별 에셋"
                  width={20}
                  height={20}
                  className="mr-[1.6rem]"
                />
                <p>패키지 에셋</p>
              </Link>
            </li>
          </ul>
        </li>
        <li className="border-b border-neutral-navy-200 leading-[2.4rem]">
          <div>
            <div className="flex p-[0.8rem] text-neutral-navy-200">
              <Image
                src="/icons/list.svg"
                alt="개별 에셋"
                width={20}
                height={20}
                className="mr-[1.6rem]"
              />
              <p>카테고리별</p>
            </div>
            <Category data={category} handleSubcategoryClick={handleSubcategoryClick} />
          </div>
        </li>
        <li>
          <Tags selectedTags={selectedTags} />
        </li>
      </ul>
    </div>
  )
}
