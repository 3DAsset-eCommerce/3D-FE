'use client'

import React, { ReactNode } from 'react'
import { MyassetButtons } from './MyAssetButtons'
import { MyAssetSearch } from './MyAssetSearch'
import { MyAssetDropdown } from './MyAssetDropdown'

interface MyAssetContentsProps {
  children?: ReactNode
}
export const MyAssetContents = ({ children }: MyAssetContentsProps) => {
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
      <div className="flex">{children}</div>
    </div>
  )
}
