import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed z-10 flex h-[7.2rem] w-[calc(100%-24.4rem)] items-center justify-between border-b border-solid border-transparent-navy-30 bg-bg-1 px-[2.3rem] py-[1.1rem]">
      <div className="flex h-[5rem] w-[66.3%] rounded-[0.4rem] border border-transparent-navy-30 bg-bg-2 px-[1.2rem]">
        <Image src="/icons/search.svg" alt="검색" width={24} height={24} />
        <input type="text" className="ml-[0.8rem] w-full bg-bg-2 text-neutral-white-50" />
      </div>
      <ul className="flex items-center before:m-[1rem] before:h-[3.4rem] before:w-[0.2rem] before:bg-transparent-navy-30">
        <li>
          <Link href="/wishlist" className="block p-[0.9rem]">
            <Image src="/icons/heart.svg" alt="위시리스트로" width={22} height={22} />
          </Link>
        </li>
        <li>
          <Link href="/cart" className="block p-[0.9rem]">
            <Image src="/icons/cartPlus.svg" alt="장바구니로" width={22} height={22} />
          </Link>
        </li>
        <li>
          <Link href="/my-assets" className="block p-[0.9rem]">
            <Image src="/icons/hardDrive.svg" alt="내에셋으로" width={22} height={22} />
          </Link>
        </li>
        <li className="group relative">
          <div className="cursor-pointer p-[0.9rem]">
            <Image src="/icons/user.svg" alt="마이페이지" width={22} height={22} />
          </div>
          <div className="absolute right-0 top-[100%] hidden pt-[1.5rem] text-center text-sl group-hover:block">
            <ul className="w-[13.1rem] rounded-[0.4rem] bg-bg-1 p-4 text-neutral-navy-100">
              <li className="leading-[4.4rem]">
                <Link href="/my-page" className="text-neutral-navy-100">
                  내 계정
                </Link>
              </li>
              <li className="leading-[4.4rem]">
                <Link href="/my-page/history" className="text-neutral-navy-100">
                  주문 내역
                </Link>
              </li>
              <li className="cursor-pointer border-t border-transparent-navy leading-[4.8rem]">
                <p>로그아웃</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  )
}
