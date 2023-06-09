'use client'

import React, { useEffect, useState } from 'react'

interface MyAssetPagenationProps {
  pageName?: string
  pageCount?: number
  onPageChange?: (page: number) => void
}

// 디폴트값 세팅 프롭스 들어오면 프롭스값으로 적용
export const MyAssetPagenation = ({
  pageCount = 20,
  pageName = 'wishlist',
  onPageChange = (page) => console.log(page),
}: MyAssetPagenationProps) => {
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    onPageChange(currentPage)
  }, [currentPage, onPageChange])

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }

  const handlePageNavigation = (action: string) => {
    if (action === 'prev') {
      const prevPage = currentPage - 1
      if (prevPage >= 0) {
        setCurrentPage(prevPage)
      }
    }
    if (action === 'next') {
      const nextPage = currentPage + 1
      if (nextPage < pageCount) {
        setCurrentPage(nextPage)
      }
    }
  }
  return (
    <nav className=" mb-5 mt-5 flex justify-center border-b border-transparent-navy-30 pb-8">
      <ul className="inline-flex items-center gap-3 -space-x-px">
        <li>
          <button
            onClick={() => handlePageNavigation('prev')}
            className="ml-0 rounded px-3 py-2 leading-tight text-gray-500
             hover:bg-gray-100 hover:text-gray-700 "
          >
            prev
          </button>
        </li>
        {[...Array(pageCount)].map((page, index) => (
          <li key={index}>
            <button
              onClick={() => handlePageClick(index)}
              className={`ml-0 rounded px-3 py-3 font-bold leading-tight
              hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === index ? `bg-gray-100 text-gray-700` : `text-gray-500`
              } `}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handlePageNavigation('next')}
            className="ml-0 rounded px-3 py-2 leading-tight text-gray-500
             hover:bg-gray-100 hover:text-gray-700 "
          >
            next
          </button>
        </li>
      </ul>
    </nav>
  )
}
