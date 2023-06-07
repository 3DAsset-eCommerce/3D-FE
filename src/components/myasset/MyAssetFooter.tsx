import Image from 'next/image'

export const MyAssetFooter = () => {
  return (
    <div className=" boder flex w-full justify-around border-t border-transparent-navy-30 pt-5">
      <div className="flex flex-auto justify-center">
        <Image width={156} height={36} className="" src="/logo-title.svg" alt="푸터 로고" />
      </div>
      <div className=" flex flex-auto justify-center gap-[3rem] text-mm text-neutral-navy-200">
        <a href="/">저작권</a>
        <a href="/">서비스 이용약관</a>
        <a href="/">쿠키 설정</a>
        <a href="/">언어설정</a>
      </div>
    </div>
  )
}
