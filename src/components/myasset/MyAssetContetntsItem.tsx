/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

export const MyAssetContetntsItem = () => {
  return (
    <div className=" flex  w-[20rem] flex-col">
      <div className="relative">
        <img className="h-[30rem] w-full bg-slate-100" src="./icon/" alt="아바타 이미지" />
        <input
          type="checkbox"
          className="absolute bottom-1 left-1 m-8 h-12 w-12 bg-transparent-gray"
        />
        <button className=" absolute bottom-1 right-1 m-8 rounded-md bg-neutral-navy-1000 p-2">
          <img className="" src="icons/download.svg" alt="다운로드" />
        </button>
      </div>
      <p className=" mt-5 text-base font-normal text-transparent-navy ">Up down run down stairs</p>
    </div>
  )
}
