'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import TermsModal from './TermsModal'

export default function SignUp() {
  //이용약관 동의 체크 여부 state
  const [termsAccepted, setTermsAccepted] = useState(false)
  //모달창 출력 여부 state
  const [showModal, setShowModal] = useState(false)

  const handleModalClose = () => {
    setShowModal(false)
    setTermsAccepted(false)
  }

  const handleTermCheck = () => {
    setTermsAccepted(!termsAccepted)
    setShowModal(!showModal)
  }

  return (
    <>
      <section className="bg-cover bg-center h-screen bg-[url('/background/signup-bg.svg')]">
        <div className="flex flex-col items-end justify-center mx-auto md:h-screen lg:py-0">
          <div className="justify-center m-[4.3rem] w-[40rem] h-4/5 rounded-lg bg-opacity-80 bg-black">
            <div className="w-[36.875rem] h-4/5 md:space-y-6 sm:p-8">
              <a href="#" className="flex items-center mb-[4.5rem]">
                <Image src="/logo-title.svg" alt="logo" width={155} height={54} />
              </a>
              <h1 className="text-3xl font-bold text-neutral-navy-100 md:text-3xl dark:text-text-neutral-navy-100">
                회원가입
              </h1>
              <h4 className="text-xs font-bold text-neutral-navy-100 md:text-xs dark:text-neutral-navy-100">
                이메일 주소 또는 간편 가입으로 시작해보세요
              </h4>
              <div className="border-t-2 border-neutral-navy-900"></div>

              {/* 회원가입 form */}
              <form className="space-y-3" action="#">
                {/* 성, 이름 Input */}
                <div className="flex justify-between">
                  <div className="flex flex-col mx-1">
                    <h4 className="text-xs font-semibold px-1 text-neutral-navy-100">성</h4>
                    <input
                      type="text"
                      name="lastName"
                      className="h-[3.1rem] bg-neutral-navy-950 border border-neutral-navy-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-navy-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="성"
                    />
                  </div>
                  <div className="flex flex-col mx-1">
                    <h4 className="text-xs font-semibold px-1 text-neutral-navy-100">이름</h4>
                    <input
                      type="text"
                      name="firstName"
                      className="h-[3.1rem] bg-neutral-navy-950 border border-neutral-navy-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-navy-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="이름"
                    />
                  </div>
                </div>

                {/* 이메일 중복확인, 인증코드 보내기 및 확인 */}
                <div className="flex flex-col">
                  <div className="flex">
                    <input
                      type="email"
                      className="w-[21.7rem] h-[3.1rem] mx-1 bg-neutral-navy-950 border border-neutral-navy-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-neutral-navy-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="E-mail"
                    />
                    <button className="flex items-center justify-center mx-1 w-[10.6rem] h-[3.1rem] px-4 py-2 bg-primary-darkblue-hover border border-primary-darkblue-hover rounded-lg">
                      <span className="text-xs text-white">인증코드 보내기</span>
                    </button>
                  </div>
                  <div className="pt-1 pb-3 text-xs px-1 text-point-red">
                    * 이미 사용하는 이메일 입니다
                  </div>

                  <div className="flex">
                    <input
                      type="email"
                      className="w-[21.7rem] h-[3.1rem] mx-1 bg-neutral-navy-950 border border-neutral-navy-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-neutral-navy-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="인증코드 입력"
                    />
                    <button className="flex items-center justify-center mx-1 w-[10.6rem] h-[3.1rem] px-4 py-2 bg-primary-darkblue-hover border border-primary-darkblue-hover rounded-lg">
                      <span className="text-xs text-white">인증코드 확인</span>
                    </button>
                  </div>
                  <div className="pt-1 pb-3 text-xs px-1 text-point-red">
                    * 전송된 인증코드와 일치하지 않습니다
                  </div>
                </div>

                {/* 비밀번호 Input */}
                <div className="flex h-[3.1rem] p-2.5 mx-1 border border-neutral-navy-300 text-gray-900 sm:text-sm rounded-lg dark:bg-neutral-navy-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-darkblue-hover">
                  <input
                    type="password"
                    className="w-full p-1 bg-neutral-navy-950 border-none outline-none"
                    placeholder="비밀번호 입력"
                  />
                  <Image src="/icons/eyeOff.svg" alt="code cover" width={20} height={20} />
                </div>
                <div className="flex h-[3.1rem] p-2.5 mx-1 border border-neutral-navy-300 text-gray-900 sm:text-sm rounded-lg dark:bg-neutral-navy-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-darkblue-hover">
                  <input
                    type="passwordCheck"
                    className="w-full p-1 bg-neutral-navy-950 border-none outline-none"
                    placeholder="비밀번호 확인"
                  />
                  <Image src="/icons/eyeOff.svg" alt="code cover" width={20} height={20} />
                </div>

                {/* 이용약관 동의 체크박스 */}
                <div className="flex mt-[1.5rem] ml-2">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={handleTermCheck}
                    className="w-5 h-5 border border-neutral-navy-300 rounded accent-neutral-navy-850 dark:accent-neutral-navy-850 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-xs text-neutral-navy-100 dark:text-neutral-navy-100 "
                    >
                      이용약관에 동의합니다
                    </label>
                  </div>
                </div>
                <TermsModal isOpen={showModal} onClose={handleModalClose} />

                {/* 회원가입 버튼 */}
                <button
                  type="submit"
                  className="w-full h-[3.1rem] rounded-full text-neutral-white-50 bg-primary-darkblue-hover focus:outline-none text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
              </form>

              {/* /로그인 navigate TextButton */}
              <div className="flex justify-end">
                <a
                  href="/login"
                  className="text-xs text-neutral-navy-100 hover:underline dark:text-primary-500"
                >
                  로그인 하러가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
