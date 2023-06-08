'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function CreateReview() {
  const [editedReview, setEditedReview] = useState(null)

  const handleClick = () => {}

  return (
    <div className="mb-[2rem] flex h-[13.3rem] flex-col justify-between rounded bg-neutral-navy-900 px-[2.4rem] py-[1.2rem]">
      <p>해당 제품에 대한 리뷰를 작성해주세요</p>
      <div className="flex items-center justify-center rounded bg-bg-0 px-[2.4rem] py-[0.8rem]">
        <button onClick={handleClick} className="flex text-primary-main">
          <Image src="/icons/edit.svg" alt="edit" width={24} height={24} />
          <span className="ml-1">작성하기</span>
        </button>
      </div>
    </div>
  )
}
