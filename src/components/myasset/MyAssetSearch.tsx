import Image from 'next/image'
import { useState } from 'react'
export const MyAssetSearch = () => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      alert(inputValue)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  return (
    <div className="flex h-full  w-[25rem] rounded-md bg-bg-3 px-[1rem]">
      <Image src="/icons/search.svg" alt="검색" width={18} height={18} />
      <input
        type="text"
        className="ml-[0.8rem] w-full bg-bg-3 text-transparent-navy"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
