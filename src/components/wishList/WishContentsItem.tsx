/* eslint-disable @next/next/no-img-element */
'use client'
import { openDrawer } from '@/store/drawerSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

interface Data {
  이미지?: string
  Subject?: string
  id?: string
  확장자?: string
  용량?: string
  특화분야?: string
  사용프로그램?: string
  가격?: string
  할인?: string
}
interface WishContentsItemProps {
  data?: Data
  isChecked: boolean
}

export default function WishContentsItem({ data, isChecked }: WishContentsItemProps) {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    dispatch(openDrawer())
  }
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <>
      <div
        key={data?.id}
        className="border-transparent flex h-[11rem] min-w-[58rem] flex-wrap
        items-center justify-between
         border border-bg-2 text-xs font-normal text-transparent-navy-second hover:border-primary-darkblue-hover"
      >
        <div className=" w-[9rem]  text-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="h-11 w-11"
          />
        </div>
        <div onClick={handleClick} className=" flex  w-[8rem] justify-center ">
          <img src={data?.이미지} alt="3D 이미지" className="h-[10rem] w-[9rem]" />
        </div>
        <div className="flex h-full w-[10rem] flex-auto flex-col justify-around p-5">
          <p className="flex-shrink-0 truncate text-lg ">제목 : {data?.Subject}</p>
          <p className="whitespace-nomal">
            확장자: {} | 데이타 용량 : {} | 특화분야 : {} | 사용 프로그램 : {}
          </p>
        </div>
        <div className="flex w-[9rem] flex-col gap-2  pr-[2rem] text-end ">
          <h1 className="truncate text-mm  text-transparent-navy ">&#8361; {data?.가격}</h1>
          <h1 className="truncate text-xs  line-through ">&#8361; {data?.할인}</h1>
        </div>
        <div className=" flex w-[10rem]  justify-center ">
          <img
            onClick={() => {
              alert('장바구니')
            }}
            src="/icons/cartPlus.svg"
            alt="장바구니로"
          />
        </div>
        <div className=" flex w-[10rem] justify-center">
          <img
            onClick={() => {
              alert('삭제')
            }}
            src="/icons/trash.svg"
            alt="삭제"
          />
        </div>
      </div>
      <div className="border-b border-transparent-navy-30" />
    </>
  )
}
