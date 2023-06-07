import React from 'react'

export const MyAssetDropdown = () => {
  return (
    <>
      <button className="h-[3rem] rounded-md bg-neutral-navy-1000 px-3 text-mm text-neutral-navy-100">
        선택하세요 ▽
      </button>
      <ul className="hidden">
        <li>항목 1</li>
        <li>항목 2</li>
        <li>항목 3</li>
      </ul>
    </>
  )
}
