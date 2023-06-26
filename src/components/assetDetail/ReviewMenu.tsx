import React from 'react'

interface Props {
  reviewId: number
  assetId: number
}

export default function ReviewMenu({ reviewId, assetId }: Props) {
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <ul
      className="absolute left-[-17.2rem] top-1/2 h-[5.8rem] w-[18.2rem] rounded-[0.4rem]
     border border-neutral-navy-100 bg-bg-1"
    >
      <li
        onClick={handleEdit}
        className="flex h-1/2 items-center rounded-t-[0.4rem]   border-b pl-[1.2rem]  hover:bg-bg-2"
      >
        Edit
      </li>
      <li
        onClick={handleDelete}
        className="flex h-1/2 items-center rounded-[0.4rem] pl-[1.2rem] hover:border-0 hover:bg-bg-2"
      >
        Delete
      </li>
    </ul>
  )
}
