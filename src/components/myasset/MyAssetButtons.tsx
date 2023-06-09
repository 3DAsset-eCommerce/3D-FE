import React, { useState } from 'react'

interface myAssetContentProps {
  hadleAllchecked?: any
}
export const MyassetButtons = ({ hadleAllchecked }: myAssetContentProps) => {
  const [isAllSelected, setIsAllSelected] = useState(false)

  const handleAllSelectClick = () => {
    setIsAllSelected((prev) => !prev)
    console.log('전체 선택 버튼 클릭')
    hadleAllchecked()
  }
  const handleSelectDownload = () => {
    console.log('다운로드')
  }
  return (
    <div className="m-10 flex gap-4">
      <button
        onClick={handleAllSelectClick}
        className=" w-[18rem] rounded-md bg-transparent-navy-30 p-2 text-base text-transparent-navy"
      >
        {isAllSelected ? '전채 해제' : '전체 선택'}
      </button>
      <button
        onClick={handleSelectDownload}
        className=" w-[18rem] rounded-md border border-transparent-darkblue p-2 text-transparent-darkblue"
      >
        선택 항목 다운로드
      </button>
    </div>
  )
}
