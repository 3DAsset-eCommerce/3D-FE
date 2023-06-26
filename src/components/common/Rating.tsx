import React from 'react'
import Stars from './icon/Stars'

interface Props {
  star: number
  size: number
}

export default function Rating({ star, size }: Props) {
  // const starsWidth = Math.round(starWidth * star * 100) / 100

  // const emptyStars = Array.from({ length: 5 }).map((_, index) => (
  //   <Image
  //     key={`empty-star-${index}`}
  //     src="/icons/emptyStar.svg"
  //     alt="star"
  //     width={starSize}
  //     height={starSize}
  //     className=""
  //   />
  // ))

  // const filledStars = Array.from({ length: 5 }).map((_, index) => (
  //   <Image
  //     key={`filled-star-${index}`}
  //     src="/icons/filledStar.svg"
  //     alt="star"
  //     width={starSize}
  //     height={starSize}
  //     style={{ minWidth: `${starWidth}rem` }}
  //   />
  // ))

  return (
    <div className=" flex w-[20.2rem] items-center justify-between">
      <span className="text-[2.6rem] font-bold text-primary-main">{star}</span>
      <div className="relative flex w-[13rem]">
        <div className={`absolute left-0 top-1/2 flex -translate-y-1/2 transform`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="mr-[0.8rem]">
              <Stars key={index} isFilled={false} size={size} />
            </li>
          ))}
        </div>
        <div className={`absolute left-0 top-1/2 flex -translate-y-1/2 transform overflow-hidden`}>
          {Array.from({ length: star }).map((_, index) => (
            <li key={index} className="mr-[0.8rem]">
              <Stars key={index} isFilled={true} size={size} />
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}
