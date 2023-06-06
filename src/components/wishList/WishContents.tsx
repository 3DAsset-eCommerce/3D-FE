'use client'

import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import WishContentsItem from './WishContentsItem'
import WishButtons from './WishButtons'

interface WishContentsProps {
  children?: ReactNode
}

export default function WishContents({ children }: WishContentsProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) }
  }) => {
    setIsChecked(event.target.checked)
    alert(isChecked)
  }
  return (
    <div className="flex-wrap">
      <div className=" flex items-center  justify-between">
        <div className="gap-2">
          <span className="truncate text-lg font-bold text-white">위시리스트 </span>
          <span className="text-base text-white">
            (<span className="text-base text-primary-main">{1}</span>
            /10)
          </span>
        </div>
        <WishButtons />
      </div>
      <div className="flex flex-col pt-[3rem]">
        <div
          className="border-transparent flex items-center justify-between 
          text-xs font-normal text-transparent-navy-second"
        >
          <div className=" w-[9rem]  text-center">
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
              className=" h-11 w-11"
            />
          </div>
          <div className=" flex  w-[8rem] justify-center ">대표이미지</div>
          <div className="flex h-full w-[10rem] flex-auto flex-col justify-around truncate p-5">
            이름 및 상세설명
          </div>
          <div className="flex w-[9rem] flex-col gap-2  pr-[2rem] text-end ">가격</div>
          <div className=" flex w-[10rem]  justify-center ">장바구니</div>
          <div className=" flex w-[10rem] justify-center">삭제</div>
        </div>
        <div className="border-b border-transparent-navy-30" />
        <WishContentsItem onCheckboxChange={handleCheckboxChange} data={undefined} />
      </div>
    </div>
  )
}
