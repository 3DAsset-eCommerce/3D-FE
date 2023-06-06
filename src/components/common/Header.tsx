import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex fixed justify-between items-center z-10 w-[calc(100%-24.4rem)] h-[7.2rem] bg-bg-1 border-b border-solid border-transparent-navy-30 py-[1.1rem] px-[2.3rem]">
      <div className="flex w-[66.3%] h-[5rem] bg-bg-2 px-[1.2rem] rounded-[0.4rem] border border-transparent-navy-30">
        <Image src="/icons/search.svg" alt="검색" width={24} height={24} />
        <input type="text" className="w-full ml-[0.8rem] bg-bg-2" />
      </div>
      <ul className="flex items-center before:w-[0.2rem] before:h-[3.4rem] before:bg-transparent-navy-30 before:mr-[1rem]">
        <li>
          <Link href="#" className="block p-[0.9rem]">
            <Image src="/icons/heart.svg" alt="위시리스트로" width={22} height={22} />
          </Link>
        </li>
        <li>
          <Link href="#" className="block p-[0.9rem]">
            <Image src="/icons/cartPlus.svg" alt="장바구니로" width={22} height={22} />
          </Link>
        </li>
        <li>
          <Link href="#" className="block p-[0.9rem]">
            <Image src="/icons/hardDrive.svg" alt="내에셋으로" width={22} height={22} />
          </Link>
        </li>
        <li>
          <Link href="#" className="block p-[0.9rem]">
            <Image src="/icons/user.svg" alt="마이페이지" width={22} height={22} />
          </Link>
        </li>
      </ul>
    </header>
  )
}
