'use client'
import { MyassetButtons } from './MyAssetButtons'
import { MyAssetSearch } from './MyAssetSearch'
import { MyAssetDropdown } from './MyAssetDropdown'
import React, { useEffect, useState } from 'react'
import { MyAssetContetntsItem } from './MyAssetContetntsItem'
import { MyAssetPagenation } from './MyAssetPagenation'

interface DataProps {
  data?: any
}
export const MyAssetContents = (data: DataProps) => {
  const itemCount = 14
  const [isCheckBoxSelect, setisCheckBoxSelect] = useState(false)

  const hadleAllchecked = () => {
    setisCheckBoxSelect(!isCheckBoxSelect)
    alert(isCheckBoxSelect)
  }

  return (
    <div className="m-3">
      <div className="mb-16 flex justify-between">
        <div className="flex items-center gap-2 ">
          <p className="text-lg font-bold text-transparent-navy">내 에셋</p>
          <span className="text-base text-transparent-gray">( 100 )</span>
        </div>
        <div className="flex items-center gap-5">
          <MyAssetDropdown />
          <MyAssetSearch />
        </div>
      </div>
      <div className="mb-[5rem] flex w-full flex-wrap justify-center ">
        {[...Array(itemCount)].map((page, index) => (
          <div key={index} className="mr-6">
            <MyAssetContetntsItem key={index} isCheckBoxSelect={isCheckBoxSelect} />
          </div>
        ))}
      </div>
      <MyAssetPagenation />
      <MyassetButtons hadleAllchecked={hadleAllchecked} />
    </div>
  )
}
