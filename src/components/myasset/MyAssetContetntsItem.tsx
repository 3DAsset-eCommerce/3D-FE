/* eslint-disable @next/next/no-img-element */
'use client'

import { openDrawer } from '@/store/drawerSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import MyAsset3D from './MyAsset3D'
interface MyAssetItemProps {
  image?: string
  subject?: string
  id?: number
  isCheckBoxSelect?: boolean
}

export const MyAssetContetntsItem = ({
  id = 1,
  subject = 'subject',
  image = 'icons/download.svg',
  isCheckBoxSelect = false,
}: MyAssetItemProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch()
  const handleClickDrawer = () => {
    dispatch(openDrawer())
  }
  const handleDownload = (id: number) => {
    console.log(id)
  }

  const handleCheckBox = () => {
    setIsChecked((prev) => !prev)
  }

  useEffect(() => {
    setIsChecked(isCheckBoxSelect)
  }, [isCheckBoxSelect])

  return (
    <div className=" mb-5  flex w-[20rem] flex-col">
      <div className="relative">
        {/* <Image
          onClick={handleClickDrawer}
          className="h-[30rem] w-full bg-slate-100"
          src={image}
          alt="아바타 이미지"
          width={30}
          height={30}
        /> */}
        <div onClick={handleClickDrawer} className="h-[25rem] w-full bg-slate-100">
          <MyAsset3D />
        </div>

        <input
          onClick={handleCheckBox}
          checked={isChecked}
          type="checkbox"
          className="absolute bottom-1 left-1 m-8 h-12 w-12 bg-transparent-gray"
        />
        <button
          onClick={() => handleDownload(id)}
          className=" absolute bottom-1 right-1 m-8 rounded-md bg-neutral-navy-1000 p-2"
        >
          <img className="" src="icons/download.svg" alt="다운로드" />
        </button>
      </div>
      <p className=" mt-3 text-base font-normal text-transparent-navy ">{subject}</p>
    </div>
  )
}
