'use client'
import React from 'react'
import Image from 'next/image'
export default function CategoryAssetList() {
  return (
    <section className="min-h-[calc(100vh-12.3rem)] px-[2.3rem] pt-8  text-neutral-navy-100">
      <div className="mb-[2.5rem] h-[5.2rem] text-lg  font-bold leading-[3rem]">카테고리 별</div>
      <div className="h-[16.2rem] w-[24.4rem]">
        <div className="mb-[2.4rem] flex h-[4.4rem] items-center justify-between">
          <div className="rounded-1/2 rounded-full border border-neutral-navy-300 px-[2.4rem] py-[1.1rem] text-sl">
            <button>Moving_01</button>
          </div>
          <div className="flex text-ms text-neutral-navy-200">
            <button>더보기</button>
            <Image src="/icons/chevronRight.svg" alt="개별 에셋" width={20} height={20} />
          </div>
        </div>
      </div>
    </section>
  )
}
