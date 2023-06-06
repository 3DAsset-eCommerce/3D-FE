'use client'
import React, { useRef } from 'react'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="flex fixed inset-0 items-center justify-center w-full h-full bg-white bg-opacity-30 z-50"
      onClick={handleClickOutside}
    >
      {/* <div ref={modalRef} className="bg-white w-3/4 h-3/4 max-w-2xl max-h-s m p-4 rounded shadow"> */}
      <div
        ref={modalRef}
        className="justify-center m-[4.3rem] w-3/6 h-[65%] rounded-lg bg-opacity-80 bg-black"
      >
        <h2 className="mx-10 my-10 text-3xl font-semibold mb-4 text-neutral-navy-300">이용약관</h2>
        <h4 className="mx-10 my-6 text-sm font-base mb-4 text-neutral-navy-100">이용약관 소제목</h4>
        <div className="h-[53%] mx-10 my-6 overflow-y-scroll text-[1.2rem] text-neutral-navy-100">
          <p>
            이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용... 이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...
            이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용... 이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...
            이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용... 이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관
            내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...이용약관 내용...
          </p>
        </div>
        {/* 이용약관 동의 체크박스 */}
        <div className="flex justify-center">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            className="my-[1.1rem] w-7 h-7 border border-neutral-navy-300 rounded accent-neutral-navy-850 dark:accent-neutral-navy-850 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
          <div className="ml-3 my-6 text-sm">
            <label
              htmlFor="remember"
              className="text-[20px] text-neutral-navy-100 dark:text-neutral-navy-100 "
            >
              약관에 동의하시겠습니까?
            </label>
          </div>
        </div>

        {/* 닫기, 동의 버튼 */}
        <div className="flex justify-center">
          <div className="flex w-[36%] my-6">
            <button
              type="reset"
              onClick={onClose}
              className="w-full h-[3.1rem] mx-2 rounded-full text-neutral-white-50 bg-none text-sm px-5 py-3 text-center dark:border dark:border-primary-darkblue-hover"
            >
              Close
            </button>
            <button
              type="submit"
              onClick={onClose}
              className="w-full h-[3.1rem] mx-2 rounded-full text-neutral-white-50 bg-primary-darkblue-hover focus:outline-none text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsModal
