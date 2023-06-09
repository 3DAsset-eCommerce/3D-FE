'use client'
import React, { ChangeEvent } from 'react'

interface MyAssetProps {
  onOptionChange?: any
}

export const MyAssetDropdown = ({
  onOptionChange = (action: string) => console.log(action),
}: MyAssetProps) => {
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    onOptionChange(selectedValue)
  }

  return (
    <div className="relative">
      <select
        onChange={handleOptionChange}
        className="h-[3rem] rounded-md bg-neutral-navy-1000 px-3 text-mm text-neutral-navy-100"
      >
        <option value={'new'}>최근 구매순</option>
        <option value={'old'}>오래된 순 </option>
      </select>
    </div>
  )
}
