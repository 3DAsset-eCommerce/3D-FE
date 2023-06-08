import React from 'react'
import Image from 'next/image'

interface Props {
  star: number
  size: string
}

function Star({ star, size }: Props) {
  const starSize = size === 'sm' ? 14 : 24
  const starWidth = size === 'sm' ? 1.4 : 2.4
  const starsWidth = Math.round(starWidth * star * 100) / 100

  const emptyStars = Array.from({ length: 5 }).map((_, index) => (
    <Image
      key={`empty-star-${index}`}
      src="/icons/emptyStar.svg"
      alt="star"
      width={starSize}
      height={starSize}
      className=""
    />
  ))

  const filledStars = Array.from({ length: 5 }).map((_, index) => (
    <Image
      key={`filled-star-${index}`}
      src="/icons/filledStar.svg"
      alt="star"
      width={starSize}
      height={starSize}
      style={{ minWidth: `${starWidth}rem` }}
    />
  ))

  return (
    <div className="relative flex w-[20.2rem] items-center justify-between">
      <span
        className={`${
          size === 'sm' ? 'text-[1.4rem]' : 'text-[2.6rem] font-bold text-primary-main'
        }`}
      >
        {star}
      </span>
      <div className="flex w-[12rem]">
        <div className={`absolute top-1/2 z-10 flex -translate-y-1/2 transform`}>{emptyStars}</div>
        <div
          style={{ width: `${starsWidth}rem` }}
          className={`absolute top-1/2  z-10 flex -translate-y-1/2 transform overflow-hidden`}
        >
          {filledStars}
        </div>
      </div>
    </div>
  )
}

export default Star
