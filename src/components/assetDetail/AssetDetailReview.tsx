import { Asset } from '@/api/assets'
import Image from 'next/image'
import React from 'react'
import Star from '../common/Star'
import CreateReview from './CreateReview'

interface Props {
  asset: Asset
}

export default function AssetDetailReview({ asset }: Props) {
  return (
    <>
      <div className="pt-[4.7rem]"></div>
      <article className="h-full p-6 text-neutral-navy-100">
        <div className="mb-[3.2rem] flex justify-between border-b border-transparent-navy-30 py-[1.4rem]">
          <h3 className="leading-[1.936rem]">Up down run down stairs</h3>
          <Star star={0.5} size="lg" />
        </div>
        <div>
          <div className="mb-[2rem] flex h-[4rem] justify-between">
            <h3>리뷰 작성하기</h3>
            <div className="h-[3.6rem] w-[18.1rem] rounded bg-neutral-navy-900 px-6 py-2">
              <Star star={3.5} size="sm" />
            </div>
          </div>
          <CreateReview />
        </div>
      </article>
    </>
  )
}
