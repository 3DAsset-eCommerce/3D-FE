'use client'
import React from 'react'
import Image from 'next/image'

export default function Login() {
  return (
    <>
      <section className="bg-cover bg-center h-screen bg-[url('/background/login-bg.svg')]">
        <div className="flex flex-col items-end justify-center mx-auto md:h-screen lg:py-0">
          <div className="w-[36.8rem] h-[47.5rem] justify-center m-8 rounded-lg bg-opacity-80 bg-black">
            <div className="w-[36.8rem] h-[47.5rem] space-y-4 md:space-y-6 sm:p-8">
              <a href="#" className="flex items-center mb-[11.8rem]">
                <Image src="/logo-title.svg" alt="logo" width={155} height={54} />
              </a>
              <h1 className="text-3xl font-bold text-neutral-navy-100 md:text-3xl dark:text-text-neutral-navy-100">
                로그인
              </h1>
              <h4 className="text-xs font-bold text-neutral-navy-100 md:text-xs dark:text-neutral-navy-100">
                가입하신 이메일 또는 간편 로그인
              </h4>
              <div className="border-t-2 border-blue-500"></div>

              <form className="space-y-4 md:space-y-6  my-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="h-[3.1rem] bg-neutral-navy-950 border border-neutral-navy-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-navy-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="E-mail"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="h-[3.1rem] bg-neutral-navy-950 border border-neutral-navy-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-main focus:border-primary-main block w-full p-2.5 dark:bg-neutral-navy-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-5 h-5 border border-neutral-navy-300 rounded accent-neutral-navy-850 dark:accent-neutral-navy-850 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-xs text-neutral-navy-100 dark:text-neutral-navy-100 "
                      >
                        로그인 상태 유지
                      </label>
                    </div>
                  </div>
                  <button className="flex items-center justify-between border border-white-0 bg-white w-[11.5rem] h-[3.5rem] px-4 py-2 rounded-lg">
                    <Image src="/google.svg" alt="Google Logo" width={20} height={20} />
                    <span className="text-xs font-semibold">구글로 가입하기</span>
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full h-[3.1rem] rounded-full text-neutral-white-50 bg-primary-darkblue-hover focus:outline-none text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>
                <div className="flex items-center justify-between">
                  <a
                    href=""
                    className="text-xs text-neutral-navy-100 text-primary-600 hover:underline dark:text-primary-500"
                  >
                    회원가입
                  </a>
                  <a
                    href=""
                    className="text-xs text-neutral-navy-100 ext-primary-600 hover:underline dark:text-primary-500"
                  >
                    아이디/비밀번호 찾기
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
