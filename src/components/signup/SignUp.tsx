'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import TermsModal from './TermsModal'
import { Register, RegisterEnroll, User } from '@/api/interface/auth'
import { useSignUp } from '@/hooks/useSignUp'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function SignUp() {
  const {
    joinMutation,
    emailDuplicateCheckMutation,
    joinVerifyCodeSendMutation,
    joinVerifyConfirmMutation,
  } = useSignUp()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isDirty, errors, isValid },
  } = useForm<RegisterEnroll>()
  // } = useForm<User>()

  // const [responseUserId, setResponseUserId] = useState<number | null>()
  const [sendCode, setSendCode] = useState(false)

  //인증코드 타이머
  const TIMER_TIME = 600
  const [code, setCode] = useState('')
  const [min, setMin] = useState(10)
  const [sec, setSec] = useState(0)
  const [timerVisible, setTimerVisible] = useState(false)

  const time = useRef(TIMER_TIME)
  const timerId = useRef<NodeJS.Timeout>()

  const startTimer = () => {
    time.current = TIMER_TIME
    timerId.current = setInterval(() => {
      // @ts-ignore
      setMin(parseInt(time.current / 60))
      setSec(time.current % 60)
      time.current -= 1
    }, 1000)
  }

  const resetTimer = () => {
    clearInterval(timerId.current)
    setMin(10)
    setSec(0)
  }

  useEffect(() => {
    if (time.current <= 0) {
      clearInterval(timerId.current)
      setSec(0)
    }
  }, [sec])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerId.current)
  }, [])

  // 이메일 중복확인 핸들러
  const handlerEmailCheck = () => {
    const email = getValues('email')
    emailDuplicateCheckMutation(email)
    if (!sendCode) {
      handleCodeSend()
    }
  }

  // 인증코드 전송
  const handleCodeSend = () => {
    const email = getValues('email')
    const firstName = getValues('firstName')
    const lastName = getValues('lastName')

    joinVerifyCodeSendMutation({ firstName, lastName, email })
    resetTimer()
    setTimerVisible(true)
    startTimer()
  }

  // 회원가입 이메일 인증코드 확인 핸들러
  const handlerVerifiedCodeConfirm = async () => {
    const code = getValues('code')
    // joinVerifyConfirmMutation(code)
  }

  // 비밀번호, 비밀번호확인 노출 토글
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility)
  }
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility((prevVisibility) => !prevVisibility)
  }

  //이용약관 동의합니다 체크 여부 state
  const [termsAccepted, setTermsAccepted] = useState(false)
  //모달창 출력 여부 state
  const [isOpen, setIsOpen] = useState(false)
  // 약관에 동의하시겠습니까? state
  const [isAgreed, setIsAgreed] = useState(false)

  const handleModalClose = () => {
    setIsOpen(false)
    setTermsAccepted(false)
  }

  const handleTermCheck = () => {
    setTermsAccepted(!termsAccepted)
    setIsOpen(!isOpen)
  }

  const onSignup = (data: Register) => {
    const { email, firstName, lastName, password } = data
    setIsAgreed(true)
    joinMutation({
      firstName,
      lastName,
      email,
      password,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSignup)} className="text-base text-neutral-navy-100">
      {/* 성, 이름 Input */}
      <div className="mb-1 mt-[1.7rem] flex justify-between">
        <div className="mr-2 flex w-full flex-col">
          <h4 className="px-1">성</h4>
          <input
            type="text"
            {...register('lastName', { required: true })}
            placeholder="성"
            className=" w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-neutral-white-50 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mr-2 flex w-full flex-col">
          <h4 className="px-1">이름</h4>
          <input
            type="text"
            {...register('firstName', { required: true })}
            className=" w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-neutral-white-50 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            placeholder="이름"
          />
        </div>
      </div>

      {/* 이메일 중복확인, 인증코드 보내기 및 확인*/}
      <div className="mt-2 flex">
        <input
          type="email"
          placeholder="E-mail"
          aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
          className=" mr-1 w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500 "
        />
        {sendCode ? (
          <button
            onClick={handleCodeSend}
            className="mx-1 flex w-[54%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2 text-neutral-white-50"
          >
            인증코드 전송
          </button>
        ) : (
          <button
            onClick={handlerEmailCheck}
            className="mx-1 flex w-[54%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2 text-neutral-white-50"
          >
            이메일 중복확인
          </button>
        )}
        {/* <button
          onClick={handlerEmailCheck}
          className="mx-1 flex w-[54%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2 text-neutral-white-50"
        >
          이메일 중복확인
        </button> */}
      </div>

      {/* 인증코드 확인*/}
      <div className="mt-2 flex">
        <div className="mr-1 flex w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500 ">
          <input
            type="text"
            placeholder="인증코드 입력"
            aria-invalid={!isDirty ? undefined : errors.code ? 'true' : 'false'}
            {...register('code', {
              required: '인증코드는 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '인증코드 형식에 맞지 않습니다.',
              },
            })}
            className="w-[85%] rounded-sm bg-neutral-navy-950 p-2.5"
          />
          {timerVisible ? (
            <p className="mr-2.5 mt-2.5">
              {min}:{sec < 10 ? `0${sec}` : sec}
            </p>
          ) : null}
        </div>
        <button
          onClick={handlerVerifiedCodeConfirm}
          className="mx-1 flex w-[54%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2 text-neutral-white-50"
        >
          인증코드 확인
        </button>
      </div>

      {/* 비밀번호 Input */}
      <div className="mt-2 flex flex-col">
        <label htmlFor="password" className="relative mb-2 ">
          <input
            type={passwordVisibility ? 'text' : 'password'}
            placeholder="비밀번호 입력"
            aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
            {...register('password', {
              required: true,
              pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20}).*$/,
              minLength: {
                value: 8,
                message: '최소 8자 입니다.',
              },
            })}
            className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500"
          />
          <Image
            onClick={togglePasswordVisibility}
            src={passwordVisibility ? '/icons/eye.svg' : '/icons/eyeOff.svg'}
            alt="password"
            className="absolute bottom-4 right-5 hover:cursor-pointer"
            width={20}
            height={20}
          />
        </label>

        <label htmlFor="passwordConfirm" className="relative mb-2 ">
          <input
            type={confirmPasswordVisibility ? 'text' : 'password'}
            placeholder="비밀번호 확인"
            {...register('passwordConfirm', {
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,20}$/,
                message: '영문, 숫자, 특수문자를 각 1개 이상 사용하여 8~20자 이내로 작성해주세요.',
              },
              minLength: {
                value: 8,
                message: '최소 8자 입니다.',
              },
            })}
            className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-neutral-white-50 focus:border-blue-500 focus:ring-blue-500"
          />
          <Image
            onClick={toggleConfirmPasswordVisibility}
            src={confirmPasswordVisibility ? '/icons/eye.svg' : '/icons/eyeOff.svg'}
            alt="password cover"
            className="absolute bottom-4 right-5 hover:cursor-pointer"
            width={20}
            height={20}
          />
        </label>
      </div>

      {/* 이용약관 동의 체크박스 */}
      <div className="my-8 ml-2 flex">
        <input
          id="terms"
          aria-describedby="terms"
          type="checkbox"
          checked={isAgreed}
          onChange={handleTermCheck}
          className="rounded h-6 w-6 border border-neutral-navy-300 bg-bg-3 accent-neutral-navy-850 dark:accent-neutral-navy-850 dark:ring-offset-gray-800"
        />
        <label htmlFor="terms" className="ml-3 flex text-xs">
          <p className="underline">이용약관</p>에 동의합니다
        </label>
      </div>
      <TermsModal
        isOpen={isOpen}
        isAgreed={isAgreed}
        setIsAgreed={setIsAgreed}
        onClose={handleModalClose}
      />

      {/* 회원가입 버튼 */}
      <button
        type="submit"
        disabled={!isValid || (!isDirty && !isAgreed)}
        className={`w-full rounded-full px-5 py-3 text-center text-[2rem] ${
          isValid ? 'bg-primary-darkblue-hover' : 'bg-neutral-navy-950'
        }
          ${isValid ? 'border-none' : 'border border-neutral-navy-300'}
          ${isValid ? 'text-neutral-white-100' : 'text--neutral-navy-300'}`}
      >
        Sign up
      </button>
    </form>
  )
}
