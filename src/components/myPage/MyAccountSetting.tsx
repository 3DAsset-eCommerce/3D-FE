/**
 * 마이페이지-내계정페이지
 */
'use client'
import React from 'react'

export default function MyAccountSetting() {
  return (
    <>
      <section className=" mb-12 flex w-[91%] items-center justify-center">
        <div className="h-[35%] w-full">
          <div className="ml-[5%]">
            <div className="ml-[45%]">
              <h1 className="w-full text-[24px] font-semibold dark:text-neutral-navy-100">
                내 계정
              </h1>
            </div>
            <form className="mb-[13.6rem] ml-[26.5%] mt-[4rem] flex h-full w-full">
              {/* 성, 이름 Input */}
              <div className="flex flex-col">
                <div className="mx-1 my-5 flex flex-col">
                  <h4 className="my-1 text-[12px] text-neutral-navy-200">이름</h4>
                  <input
                    type="text"
                    name="firstName"
                    className="focus:ring-primary-600 focus:border-primary-600 h-[2.6rem] w-[24.3rem] rounded-lg border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-neutral-navy-200 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="이름"
                  />
                </div>

                <div className="mx-1 my-5 flex flex-col">
                  <h4 className="my-1 text-[12px] text-neutral-navy-200">성</h4>
                  <input
                    type="text"
                    name="lastName"
                    className="focus:ring-primary-600 focus:border-primary-600 h-[2.6rem] w-[24.3rem] rounded-lg border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-neutral-navy-200 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="성"
                  />
                </div>
              </div>

              <div className="mx-[4.5rem] h-[18rem] border border-transparent-navy-30"></div>

              {/* 가입한 이메일 주소, 비밀번호 */}
              <div className="flex flex-col">
                <h4 className="mb-1 text-[12px] text-neutral-navy-200">가입한 이메일 주소</h4>
                <input
                  type="email"
                  className="focus:ring-primary-600 focus:border-primary-600 mx-1 h-[2.6rem] w-[24.3rem] rounded-lg border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="E-mail"
                />

                {/* 비밀번호 Input */}
                <div className="mt-6 flex flex-col">
                  <h4 className="my-1 text-[12px] text-neutral-navy-200">비밀번호</h4>
                  <input
                    type="password"
                    className="focus:ring-primary-600 focus:border-primary-600 mx-1 mb-2 h-[2.6rem] w-[24.3rem] rounded-lg border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-neutral-navy-200 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="새 비밀번호"
                  />
                  <input
                    type="passwordCheck"
                    className="focus:ring-primary-600 focus:border-primary-600 mx-1 mb-4 h-[2.6rem] w-[24.3rem] rounded-lg border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-neutral-navy-200 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="새 비밀번호 확인"
                  />
                </div>

                {/* 변경내용 저장버튼 */}
                <button
                  type="submit"
                  className="bg-transparent h-[3.1rem] w-full rounded-lg border border-gray-600 px-5 py-3 text-center text-sm text-neutral-navy-200"
                >
                  저장하기
                </button>
              </div>
            </form>
          </div>
          <div className="w-full border-b-2 border-transparent-navy-30"></div>

          <div className="mt-6 flex">
            <a
              href="/delete"
              className="dark:text-primary-500 text-[16px] text-neutral-navy-300 underline underline-offset-4"
            >
              탈퇴하기
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
