import React, { ChangeEvent } from 'react'

export const MyAssetDropdown = () => {
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = event.target.value
    alert(selectedValue)
  }

  return (
    <div className="relative">
      <select
        onChange={handleOptionChange}
        className="h-[3rem] rounded-md bg-neutral-navy-1000 px-3 text-mm text-neutral-navy-100"
      >
        <option value={'1'}>최근 구매순</option>
        <option value={'2'}>오래된 순 </option>
        <option value={'3'}>기타 조회</option>
      </select>
    </div>
  )
}
