'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetMyAssets } from '@/hooks/useGetMyAssets'
import { useGetAssets } from '@/hooks/useGetAssets'
import { RootState } from '@/store/store'
import PaginationButton from '../common/PaginationButton'
import MyAssetList from './MyAssetList'
import Image from 'next/image'
import DropDown from '../common/DropDown'

interface MyAssetProps {
  id: number
}

// export default function MyAsset({ id }: MyAssetProps) {
export default function MyAsset() {
  // const id = useSelector((state: RootState) => state.user.userId)

  //드롭다운 아이템
  const [selectedDropdown, setSelectedDropdown] = useState('최근순')
  // 선택한 에셋에 따른 내에셋 갯수 카운트
  const [selectedAssetIds, setSelectedAssetIds] = useState({ isClicked: false, count: 1 })
  //페이지네이션
  const [activePage, setActivePage] = useState(0)
  const { assets } = useGetAssets(activePage)

  //에셋사이즈
  const [getSize, setGetSize] = useState(0)
  const page = activePage
  const size = getSize
  const { myAssets, isLoading } = useGetMyAssets(page, size)
  // const { myAssets, isLoading } = useGetMyAssets({ page: activePage, size: getSize })

  // const handleCheckboxChange = (assetId: string, isChecked: boolean) => {
  //   if (isChecked) {
  //     setSelectedAssetIds((prevIds) => [...prevIds, assetId])
  //   } else {
  //     setSelectedAssetIds((prevIds) => prevIds.filter((id) => id !== assetId))
  //   }
  // }

  const handleClick = () => {
    setSelectedAssetIds((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }))
  }
  return (
    <section className="text-[1.4rem] text-neutral-navy-100">
      <div className="flex w-full justify-between">
        <div className="mb-12 flex">
          <h1 className="w-[9.1rem] text-[2.4rem]">내 에셋&nbsp;</h1>
          {/* <p className="text-[1.8rem]">(/{myAssets?.data.totalElement})</p> */}
        </div>
        <div className="flex">
          <div className="mx-1 ">
            <DropDown
              list={['최근 구매순', '낮은가격 순', '높은가격 순']}
              selectedItem={selectedDropdown}
              setSelectedItem={(newItem: string) => setSelectedDropdown(newItem)}
            />
          </div>
          <div className="mx-1 flex h-[3rem] w-[25.3rem] rounded-sm border border-transparent-navy-30 bg-bg-2 px-[1.2rem]">
            <Image src="/icons/search.svg" alt="검색" width={24} height={24} />
            <input type="text" className="ml-[0.8rem] w-full bg-bg-2 py-2 text-neutral-white-50" />
          </div>
        </div>
      </div>
      <MyAssetList
        myAssets={myAssets?.data?.assetList}
        // onChecked={handleCheckboxChange}
        // setAssetItems={setAssetItems}
        // selectedAssetIds={selectedAssetIds}
        // selectedAssetItems={setSelectedAssetIds}
      />
      {/* 페이지네이션 추가 */}
      <PaginationButton
        activePage={activePage}
        setActivePage={setActivePage}
        pages={myAssets?.data?.totalPage}
      />
    </section>
  )
}
