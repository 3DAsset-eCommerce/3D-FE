import Image from 'next/image'
import Link from 'next/link'

export const MyAssetFooter = () => {
  return (
    <div className=" boder flex w-full justify-around border-t border-transparent-navy-30 pt-5">
      <div className="flex flex-auto justify-center">
        <Image width={156} height={36} className="" src="/logo-footer.svg" alt="푸터 로고" />
      </div>
      <div className=" flex flex-auto justify-center gap-16 text-mm text-neutral-navy-200">
        <Link href="/">저작권</Link>
        <Link href="/">서비스 이용약관</Link>
        <Link href="/">쿠키 설정</Link>
        <Link href="/">언어설정</Link>
      </div>
    </div>
  )
}
