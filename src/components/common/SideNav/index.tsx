import Image from 'next/image'
import Link from 'next/link'
import SideNavList from './SideNavList'
import { getAllCategories } from '@/api/category'

export default async function SideNav() {
  const data = await getAllCategories()

  return (
    <aside className="fixed z-10 flex h-screen w-[24.4rem] min-w-[24.4rem] flex-col justify-between border-r border-solid border-transparent-navy-30 bg-bg-1 pb-16 pt-[2.4rem] text-mm">
      <SideNavList category={data} />
      <div className="mx-auto w-[20rem] bg-neutral-navy-900 leading-[3.8rem]">
        <Link href="#" className="flex justify-center text-neutral-navy-200">
          Neuroid&nbsp;<span className="text-primary-main">Beta</span>
          <Image
            src="/icons/arrowRight.svg"
            alt="화살표"
            width={18}
            height={18}
            className="ml-[0.4rem]"
          />
        </Link>
      </div>
    </aside>
  )
}
