/**
 * 마이페이지 TabNavBar
 */
interface Props {
  setSelectedTab: (prev: boolean) => void
  selectedTab: boolean
}

export default function MyPageNav({ setSelectedTab, selectedTab }: Props) {
  return (
    <div className="absolute top-[7.2rem] mt-[2rem] flex h-[3.5rem] w-full text-neutral-200 ">
      <div
        onClick={() => setSelectedTab(true)}
        className={`${
          selectedTab ? 'border-primary-main bg-bg-2' : 'border-transparent-navy-30 '
        } flex w-[38%] items-center justify-center  border-b-[0.3rem] hover:border-primary-main hover:bg-bg-2`}
      >
        <button className="mb-4 h-full w-full text-[16px]">내 계정</button>
      </div>
      <div
        onClick={() => setSelectedTab(false)}
        className={`${
          !selectedTab ? 'border-primary-main bg-bg-2 ' : 'border-transparent-navy-30 '
        } flex w-[38%] items-center justify-center  border-b-[0.3rem] hover:border-primary-main hover:bg-bg-2`}
      >
        <button className="mb-4 h-full w-full text-[16px]">주문내역</button>
      </div>
    </div>
  )
}
