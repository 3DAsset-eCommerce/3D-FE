'use client'
import { useGetUserInfo } from '@/hooks/useMyPage'
import React, { useRef } from 'react'

interface AccountDeleteModalProps {
  isOpen: boolean
  onClose: () => void
}

const AccountDeleteModal: React.FC<AccountDeleteModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const { myUser } = useGetUserInfo()

  if (!myUser?.createdAt) {
    return <div>가입날짜를 가져올 수 없습니다.</div>
  }
  const createdAtDate = new Date(myUser.createdAt)
  const year = createdAtDate.getFullYear()
  const month = createdAtDate.getMonth() + 1 // getMonth는 0부터 시작하기 때문에 1을 더해야 합니다.
  const day = createdAtDate.getDate()

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    // 모달 백그라운드
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-30"
      onClick={handleClickOutside}
    >
      {/* 모달 */}
      <div
        ref={modalRef}
        className="rounded-xl m-[4.3rem] h-[68%] w-[58%] justify-center bg-black px-12 "
      >
        <div className="mb-6 mt-8 flex justify-center">
          <p className="mx-10 my-6 mb-4 flex text-[0.9rem] text-sm">
            {/* 가입날짜 오늘날짜로 출력됨 수정필요 */}
            가입 날짜 : {`${year}년 ${month}월 ${day}일`} &nbsp;&nbsp; 계정 이메일 :{' '}
            {`${myUser?.email}`}
          </p>
        </div>
        <form action="">
          {/* 탈퇴사유 입력란 */}
          <div className="my-4 flex h-[30%] flex-col justify-center">
            <label htmlFor="reason" className="mb-[6px] flex justify-center text-[1.3rem]">
              탈퇴 사유를 입력해주세요.
            </label>
            <textarea
              name="reason"
              placeholder="탈퇴 사유 입력하기(최대 300자)(선택)"
              className="my-4 h-full w-full bg-neutral-navy-950 pl-3 pt-2 text-[0.9rem]"
            />
          </div>

          {/* 탈퇴 시, 공지내용 */}
          <div className="my-14 flex justify-center text-[0.9rem]">
            <p className="text-center">
              회원 탈퇴할 시 해당 계정에 보유한 쿠폰과 내 에셋, 위시리스트, 장바구니 등 회원님과
              관련된 모든 정보가 완전히 삭제되며,
              <br /> 이후 삭제된 정보들은 다시 복구할 수 없다는 점을 기억해 주세요. <br />
              <br />
              그래도 계정을 삭제하려면 &apos;회원탈퇴&apos;를 클릭하세요. <br />
            </p>
          </div>
          <div className="my-6 w-full border-b-2 border-transparent-navy-30"></div>

          {/* 회원탈퇴 동의 체크박스 */}
          <div className="flex justify-center">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="rounded mt-[1.8rem] h-7 w-7 border border-neutral-navy-300 accent-neutral-navy-850"
            />
            <div className="my-7 ml-3 text-sm">
              <label htmlFor="remember" className="dark:  text-[0.9rem] ">
                해당 계정에 대한 회원 탈퇴를 계속 진행하시겠습니까?
              </label>
            </div>
          </div>

          {/* 회원 탈퇴, 취소 버튼 */}
          <div className="flex justify-center">
            <div className="my-8 flex w-[36%]">
              <button
                type="submit"
                onClick={onClose}
                className="mx-2 h-[3.1rem] w-full rounded-full bg-none px-5 py-3 text-center text-sm text-neutral-white-50 dark:border dark:border-primary-darkblue-hover"
              >
                회원 탈퇴
              </button>
              <button
                type="reset"
                onClick={onClose}
                className="dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-2 h-[3.1rem] w-full rounded-full bg-primary-darkblue-hover px-5 py-3 text-center text-sm text-neutral-white-50 focus:outline-none"
              >
                취소
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AccountDeleteModal
